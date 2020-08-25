import * as React from 'react';
import { FeedRequestOptions, FeedResponse } from '../getstreamCustomTypes';
import { BaseActivityResponse, BaseClient, BaseReaction, Renderable } from '../types';
import LoadMorePaginator from './LoadMorePaginator';
declare type Props = {
    /** The feed group part of the feed that should be displayed */
    feedGroup: string;
    /** The user_id part of the feed that should be displayed */
    userId?: string;
    /** read options for the API client (eg. limit, mark_seen, ...) */
    options?: FeedRequestOptions;
    /** the component used to render a group in the feed */
    Group: Renderable;
    /** if true, feed shows the NewActivitiesNotification component when new activities are added */
    notify: boolean;
    /** The component used to render the new activities notification */
    Notifier: Renderable;
    /** By default pagination is done with a "Load more" button, you can use
     * InifiniteScrollPaginator to enable infinite scrolling */
    Paginator: Renderable;
    /** Component to show when there are no activities in the feed **/
    Placeholder: Renderable;
    /** The feed read handler (change only for advanced/complex use-cases) */
    doFeedRequest?: (client: BaseClient, feedGroup: string, userId?: string, options?: FeedRequestOptions) => Promise<FeedResponse<any, any>>;
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
    /** The location that should be used for analytics when liking in the feed,
     * this is only useful when you have analytics enabled for your app. */
    analyticsLocation?: string;
};
/**
 * Renders a notificationfeed, this component is a StreamApp consumer and must
 * always be a child of the `<StreamApp>` element.
 * @example ./examples/NotificationFeed.md
 */
export default class NotificationFeed extends React.Component<Props> {
    static defaultProps: {
        feedGroup: string;
        Group: React.FC<{
            activityGroup: any;
            onClickNotification?: (activityGroup: import("../getstreamCustomTypes").ActivityGroupResponse<any, any>) => unknown;
            onClickUser?: (input: import("../getstreamCustomTypes").UserResponse<import("../types").UserData>) => unknown;
            onMarkAsRead?: (group: true | import("../getstreamCustomTypes").ActivityGroupResponse<any, any> | readonly import("../getstreamCustomTypes").ActivityGroupResponse<any, any>[]) => Promise<unknown>;
        }>;
        notify: boolean;
        Notifier: React.FC<import("./NewActivitiesNotification").Props>;
        Paginator: typeof LoadMorePaginator;
        Placeholder: React.FC<{
            text: string;
        }>;
    };
    render(): JSX.Element;
}
export {};