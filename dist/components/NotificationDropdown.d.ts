import * as React from 'react';
import { FeedRequestOptions, FeedResponse } from '../getstreamCustomTypes';
import { BaseActivityResponse, BaseClient, BaseReaction, Renderable } from '../types';
import LoadMorePaginator from './LoadMorePaginator';
declare type Props = {
    /** The feed group part of the feed that should be displayed */
    feedGroup: string;
    /** The user_id part of the feed that should be displayed */
    userId?: string;
    /** Read options for the API client (eg. limit, mark_seen, ...) */
    options?: FeedRequestOptions;
    /** The component used to render a group in the feed */
    Group: Renderable;
    /** If true, feed shows the NewActivitiesNotification component when new
     * activities are added */
    notify: boolean;
    /** The component to use to render new activities notification */
    Notifier: Renderable;
    /** By default pagination is done with a "Load more" button, you can use
     * InifiniteScrollPaginator to enable infinite scrolling */
    Paginator: Renderable;
    /** Component to show when there are no activities in the feed */
    Placeholder: Renderable;
    /** Icon component  */
    Icon?: Renderable;
    /** Header component  */
    Header?: Renderable;
    /** Footer component */
    Footer?: Renderable;
    /** The feed read handler (change only for advanced/complex use-cases) */
    doFeedRequest?: (client: BaseClient, feedGroup: string, userId?: string, options?: FeedRequestOptions) => Promise<FeedResponse<{}, {}>>;
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
    /** The location that should be used for analytics when liking in the feed,
     * this is only useful when you have analytics enabled for your app. */
    analyticsLocation?: string;
    /** The width of the dropdown */
    width?: number;
    /** Used to position the dropdown different horizontaly */
    right?: boolean;
};
/**
 * IMPORTANT: Changing most of the props below doesn't result in the desired
 * effect. These settings related to feed management should be changed in the
 * `sharedFeeds` prop of the [`StreamApp`](#streamapp) component.
 * @example ./examples/NotificationDropdown.md
 */
export default class NotificationDropdown extends React.Component<Props> {
    static defaultProps: {
        feedGroup: string;
        Group: {
            (props: any): JSX.Element;
            displayName: any;
        };
        notify: boolean;
        Notifier: {
            (props: any): JSX.Element;
            displayName: any;
        };
        Paginator: typeof LoadMorePaginator;
        Placeholder: {
            (props: any): JSX.Element;
            displayName: any;
        };
        width: number;
    };
    render(): JSX.Element;
}
export {};
