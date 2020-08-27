import React, { ReactNode } from 'react';
import { Comment } from '../types';
export declare type Props = {
    comment: Comment;
    onClickUser?: (input: any | null | undefined) => unknown;
    /** Handler for any routing you may do on clicks on Hashtags */
    onClickHashtag?: (word: string) => unknown;
    wrapHashtag?: (hashtagJSX: ReactNode) => ReactNode;
    /** Handler for any routing you may do on clicks on Mentions */
    onClickMention?: (word: string) => unknown;
    wrapMention?: (hashtagJSX: ReactNode) => ReactNode;
};
declare const _default: React.FC<Props>;
export default _default;
