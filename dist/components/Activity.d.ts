import React, { ReactNode } from 'react';
import { ActivityData, Renderable } from '../types';
declare type Props = {
    Header?: Renderable;
    Content?: Renderable;
    Footer?: Renderable;
    HeaderRight?: Renderable;
    onClickUser?: (input: any | null | undefined) => unknown;
    sub?: string;
    icon?: string;
    activity: ActivityData;
    /** Handler for any routing you may do on clicks on Hashtags */
    onClickHashtag?: (word: string) => unknown;
    wrapHashtag?: (hashtagJSX: ReactNode) => ReactNode;
    /** Handler for any routing you may do on clicks on Mentions */
    onClickMention?: (word: string) => unknown;
    wrapMention?: (hashtagJSX: ReactNode) => ReactNode;
};
declare const _default: React.FC<Props>;
export default _default;
