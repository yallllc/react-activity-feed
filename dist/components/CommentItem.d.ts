/// <reference types="react" />
import { Comment } from '../types';
import { Streami18Ctx } from '../Context';
export declare type Props = {
    comment: Comment;
    onClickUser?: (input: any | null | undefined) => unknown;
    /** Handler for any routing you may do on clicks on Hashtags */
    onClickHashtag?: (word: string) => unknown;
    /** Handler for any routing you may do on clicks on Mentions */
    onClickMention?: (word: string) => unknown;
} & Streami18Ctx;
declare const _default: {
    (props: any): JSX.Element;
    displayName: any;
};
export default _default;
