import * as React from 'react';
import { UserResponse } from './types';
import Dayjs from 'dayjs';
import { Renderable, FileLike } from './types';
export declare function humanizeTimestamp(timestamp: string | number, tDateTimeParser: (input?: string | number) => Dayjs.Dayjs): string;
export declare const smartRender: (ElementOrComponentOrLiteral: Renderable, props?: {}, fallback?: Renderable) => string | number | boolean | React.Component<any, {}, any> | import("./types").ReactComponentFunction | JSX.Element;
export declare const getRetinaImage: (images: string) => string;
export declare function userOrDefault(user: UserResponse | string | {
    error: string;
}): UserResponse;
export declare function sleep(ms: number): Promise<void>;
export declare function generateRandomId(): string;
export declare function dataTransferItemsHaveFiles(items?: DataTransferItemList): boolean;
export declare function dataTransferItemsToFiles(items?: DataTransferItemList): Promise<FileLike[]>;
export declare function inputValueFromEvent(event?: (React.SyntheticEvent<HTMLTextAreaElement> | null | undefined) | (Event | null | undefined)): string | null | undefined;
export declare function sanitizeURL(url?: string): string | undefined;
export declare const textRenderer: (text: string, parentClass: string, onClickMention?: (word: string) => unknown, onClickHashtag?: (word: string) => unknown) => any[];
