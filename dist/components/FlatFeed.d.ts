import * as React from 'react';
import { FeedRequestOptions } from '../getstreamCustomTypes';
import { BaseActivityResponse, BaseClient, BaseReaction, Renderable } from '../types';
declare type Props = {
    /** The feed group part of the feed that should be displayed */
    feedGroup: string;
    /** The user_id part of the feed that should be displayed */
    userId?: string;
    /** Read options for the API client (eg. limit, ranking, ...) */
    options?: FeedRequestOptions;
    /** The component used to render an activity in the feed */
    Activity?: Renderable;
    /** Component to show when the feed is refreshing **/
    LoadingIndicator?: Renderable;
    /** The component to use to render new activities notification */
    Notifier?: Renderable;
    /** By default pagination is done with a "Load more" button, you can use
     * InifiniteScrollPaginator to enable infinite scrolling */
    Paginator?: Renderable;
    /** Component to show when there are no activities in the feed **/
    Placeholder?: Renderable;
    /** If true, feed shows the Notifier component when new activities are added */
    notify?: boolean;
    /** The feed read handler (change only for advanced/complex use-cases) */
    doFeedRequest?: (client: BaseClient, feedGroup: string, userId?: string, options?: FeedRequestOptions) => Promise<any>;
    /** Override activity delete request */
    doActivityDeleteRequest?: (id: string) => unknown;
    /** Override reaction add request */
    doReactionAddRequest?: (kind: string, activity: BaseActivityResponse, data?: any, options?: any) => unknown;
    /** Override reaction delete request */
    doReactionDeleteRequest?: (id: string) => unknown;
    /** Override child reaction add request */
    doChildReactionAddRequest?: (kind: string, activity: BaseReaction, data?: any, options?: any) => unknown;
    /** Override child reaction delete request */
    doChildReactionDeleteRequest?: (id: string) => unknown;
    /** Override reactions filter request */
    doReactionsFilterRequest?: (options: any) => Promise<any>;
    /** The location that should be used for analytics when liking in the feed,
     * this is only useful when you have analytics enabled for your app. */
    analyticsLocation?: string;
};
declare const _default: React.FC<Props>;
export default _default;
