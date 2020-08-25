import * as React from 'react';
import URL from 'url-parse';
import anchorme from 'anchorme';
import _truncate from 'lodash/truncate';
import twitter from 'twitter-text';
import { UserResponse } from './types';
import Dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import minMax from 'dayjs/plugin/minMax';
import { Renderable, RenderableButNotElement, FileLike } from './types';
Dayjs.extend(utc);
Dayjs.extend(minMax);

// import { UserResponse } from 'getstream';

export function humanizeTimestamp(
  timestamp: string | number,
  tDateTimeParser: (input?: string | number) => Dayjs.Dayjs,
): string {
  // Following calculation is based on assumption that tDateTimeParser()
  // either returns momentjs or dayjs object.
  const time = tDateTimeParser(timestamp).add(
    Dayjs(timestamp).utcOffset(),
    'minute',
  ); // parse time as UTC
  const now = tDateTimeParser();
  return time.from(now);
}

export const smartRender = (
  ElementOrComponentOrLiteral: Renderable,
  props?: any,
  fallback?: Renderable,
) => {
  if (ElementOrComponentOrLiteral === undefined) {
    ElementOrComponentOrLiteral = fallback;
  }
  if (React.isValidElement(ElementOrComponentOrLiteral)) {
    // cast through any, to make TS believe it's a React.Element
    return (ElementOrComponentOrLiteral as any) as React.ReactElement<any>;
  }

  // cast through any to remove React.Element after previous check
  const ComponentOrLiteral = (ElementOrComponentOrLiteral as any) as RenderableButNotElement;
  if (
    typeof ComponentOrLiteral === 'string' ||
    typeof ComponentOrLiteral === 'number' ||
    typeof ComponentOrLiteral === 'boolean' ||
    ComponentOrLiteral == null
  ) {
    return ComponentOrLiteral;
  }
  const Comp = ComponentOrLiteral as any;
  return <Comp {...props} />;
};

export const getRetinaImage = (images: string) =>
  images
    .split('|')
    .map((item, i) => `${item} ${i + 1}x`)
    .join(', ');

export function userOrDefault(
  user: UserResponse | string | { error: string },
): UserResponse {
  let actor: UserResponse;
  const notFound = {
    id: '!not-found',
    created_at: '',
    updated_at: '',
    data: { name: 'Unknown', profileImage: '' },
  };
  if (
    !user ||
    typeof user === 'string' ||
    (typeof user === 'object' && typeof (user as any).error === 'string')
  ) {
    actor = notFound;
  } else {
    actor = user as any;
  }
  return actor;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// https://stackoverflow.com/a/6860916/2570866
export function generateRandomId() {
  // prettier-ignore
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function dataTransferItemsHaveFiles(
  items?: DataTransferItemList,
): boolean {
  if (!items || !items.length) {
    return false;
  }
  for (const item of items) {
    if (item.kind === 'file' || item.type === 'text/html') {
      return true;
    }
  }
  return false;
}

function getFileLikes(items) {
  const fileLikes = [];
  for (const item of items) {
    if (item.kind === 'file') {
      const file = item.getAsFile();
      if (file) {
        fileLikes.push(file);
      }
    }
  }
  return fileLikes;
}

export async function dataTransferItemsToFiles(
  items?: DataTransferItemList,
): Promise<FileLike[]> {
  if (!items || !items.length) {
    return [];
  }

  const fileLikes = getFileLikes(items);
  // If there are files inside the DataTransferItem prefer those
  if (fileLikes.length) {
    return fileLikes;
  }

  // Otherwise extract images from html
  const blobPromises = [];
  const parser = new DOMParser();
  for (const item of items) {
    if (item.type === 'text/html') {
      blobPromises.push(
        new Promise((accept) => {
          item.getAsString(async (s) => {
            const doc = parser.parseFromString(s, 'text/html');
            const imageTags = doc.getElementsByTagName('img');

            const imagePromises = [];
            for (const tag of imageTags) {
              if (!tag.src) {
                continue;
              }
              imagePromises.push(
                (async () => {
                  let res;
                  try {
                    res = await fetch(tag.src);
                  } catch (e) {
                    return;
                  }
                  const contentType =
                    res.headers.get('Content-type') ||
                    'application/octet-stream';
                  const buf = await res.arrayBuffer();
                  const blob = new Blob([buf], { type: contentType });
                  fileLikes.push(blob);
                })(),
              );
            }
            await Promise.all(imagePromises);
            accept();
          });
        }),
      );
    }
  }
  await Promise.all(blobPromises);
  return fileLikes;
}

export function inputValueFromEvent(
  event?:
    | (React.SyntheticEvent<HTMLTextAreaElement> | null | undefined)
    | (Event | null | undefined),
): string | null | undefined {
  if (!event) {
    return;
  }
  let target;
  if (event.currentTarget) {
    target = event.currentTarget;
  } else {
    target = event.target;
  }
  // Trick flow into believing the target maybe has a value field
  const inputTarget: { value?: string } = target as any;
  return inputTarget.value;
}

export function sanitizeURL(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  const proto = URL(url).protocol;
  // allow http, https, ftp
  // IMPORTANT: Don't allow data: protocol because of:
  // <a href="data:text/html;base64,PHNjcmlwdD5hbGVydCgneHNzJyk7PC9zY3JpcHQ+" target="_blank">here</a>
  if (proto === 'https:' || proto === 'http:' || proto === 'ftp:') {
    return url;
  }
  return undefined;
}

export const textRenderer = (
  text: string,
  parentClass: string,
  onClickMention?: (word: string) => unknown,
  onClickHashtag?: (word: string) => unknown,
) => {
  if (text === undefined) return;
  return text
    .split(' ')
    .map((word, i) => {
      if (onClickMention && word.includes('@')) {
        const mention = twitter.extractMentions(word);
        if (!mention.length) return word;

        return (
          <React.Fragment key={`item-${i}`}>
            {!word.startsWith(`@${mention[0]}`) &&
              word.slice(0, word.indexOf(mention[0]) - 1)}
            <a
              onClick={() => onClickMention && onClickMention(mention[0])}
              className={`${parentClass}__mention`}
            >
              @{mention[0]}
            </a>
            {!word.endsWith(mention[0]) &&
              word.slice(word.indexOf(mention[0]) + mention[0].length)}
          </React.Fragment>
        );
      } else if (onClickHashtag && word.includes('#')) {
        const hashtag = twitter.extractHashtags(word);
        if (!hashtag.length) return word;

        return (
          <React.Fragment key={`item-${i}`}>
            {!word.startsWith(`#${hashtag[0]}`) &&
              word.slice(0, word.indexOf(hashtag[0]) - 1)}
            <a
              onClick={() => onClickHashtag && onClickHashtag(hashtag[0])}
              className={`${parentClass}__hashtag`}
            >
              #{hashtag[0]}
            </a>
            {!word.endsWith(hashtag[0]) &&
              word.slice(word.indexOf(hashtag[0]) + hashtag[0].length)}
          </React.Fragment>
        );
      }
      if (anchorme.validate.url(word) || anchorme.validate.email(word)) {
        const link = anchorme(word, { list: true });
        if (
          link[0].protocol !== 'http://' &&
          link[0].protocol !== 'https://' &&
          link[0].protocol !== 'mailto:'
        ) {
          return word;
        }
        const url = link[0].protocol + link[0].encoded;
        const urlText = _truncate(link[0].encoded, { length: 33 });
        return (
          <a
            href={url}
            className={`${parentClass}__link`}
            target="blank"
            rel="noopener"
            key={`item-${i}`}
          >
            {urlText}
          </a>
        );
      }

      return word;
    })
    .reduce((accu, elem) => (accu === null ? [elem] : [accu, ' ', elem]), []); // TODO added 2nd arg ,[] but don't know if that's the intention
};
