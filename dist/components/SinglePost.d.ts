import React from 'react';
import { FeedRequestOptions } from '../getstreamCustomTypes';
import { BaseActivityResponse, BaseReaction, Renderable } from '../types';
declare type Props = {
    activityId: string;
    feedGroup: string;
    userId?: string;
    options?: FeedRequestOptions;
    analyticsLocation?: string;
    Activity?: Renderable;
    /** Override activity delete request */
    doActivityDeleteRequest?: (id: string) => unknown;
    /** Override reaction add request */
    doReactionAddRequest?: (kind: string, activity: BaseActivityResponse, data?: {}, options?: {}) => unknown;
    /** Override reaction delete request */
    doReactionDeleteRequest?: (id: string) => unknown;
    /** Override child reaction add request */
    doChildReactionAddRequest?: (kind: string, activity: BaseReaction, data?: {}, options?: {}) => unknown;
    /** Override child reaction delete request */
    doChildReactionDeleteRequest?: (id: string) => unknown;
    /** Override reactions filter request */
    doReactionsFilterRequest?: (options: {}) => Promise<Object>;
};
/**
 * Shows the detail of a single activity
 * @example ./examples/SinglePost.md
 */
export default class SinglePost extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
