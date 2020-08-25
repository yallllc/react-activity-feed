import * as React from 'react';
import { FeedRequestOptions, FeedResponse } from '../getstreamCustomTypes';
import { AddChildReactionCallbackFunction, AddReactionCallbackFunction, BaseActivityGroupResponse, BaseActivityResponse, BaseAppCtx, BaseClient, BaseReaction, RemoveChildReactionCallbackFunction, RemoveReactionCallbackFunction, ToggleChildReactionCallbackFunction, ToggleReactionCallbackFunction } from '../types';
import { FeedManager } from './FeedManager';
import { AppCtx } from './StreamApp';
export declare const FeedContext: React.Context<{}>;
export declare type FeedCtx = {
    feedGroup: string;
    userId?: string;
    activityOrder: string[];
    activities: any;
    unread: number;
    unseen: number;
    refresh: (extraOptions?: FeedRequestOptions) => Promise<any>;
    refreshUnreadUnseen: () => Promise<any>;
    loadNextReactions: (activityId: string, kind: string, activityPath?: string[], oldestToNewest?: boolean) => Promise<any>;
    loadNextPage: () => Promise<any>;
    hasNextPage: boolean;
    loadReverseNextPage: () => Promise<any>;
    hasReverseNextPage: boolean;
    refreshing: boolean;
    hasDoneRequest: boolean;
    realtimeAdds: Array<any>;
    realtimeDeletes: Array<any>;
    feedManager: FeedManager;
    onToggleReaction: ToggleReactionCallbackFunction;
    onAddReaction: AddReactionCallbackFunction;
    onRemoveReaction: RemoveReactionCallbackFunction;
    onToggleChildReaction: ToggleChildReactionCallbackFunction;
    onAddChildReaction: AddChildReactionCallbackFunction;
    onRemoveChildReaction: RemoveChildReactionCallbackFunction;
    onRemoveActivity: (activityId: string) => Promise<any>;
    onMarkAsRead: (group: true | BaseActivityGroupResponse | BaseActivityGroupResponse[]) => Promise<any>;
    onMarkAsSeen: (group: true | BaseActivityGroupResponse | BaseActivityGroupResponse[]) => Promise<any>;
    getActivityPath: (activity: BaseActivityResponse | string, ...rest: string[]) => string[];
};
export declare type FeedProps = {
    /** The feed group part of the feed */
    feedGroup: string;
    /** The user_id part of the feed */
    userId?: string;
    /** Read options for the API client (eg. limit, ranking, ...) */
    options?: FeedRequestOptions;
    /** If true, feed shows the Notifier component when new activities are added */
    notify?: boolean;
    /** The feed read handler (change only for advanced/complex use-cases) */
    doFeedRequest?: (client: BaseClient, feedGroup: string, userId?: string, options?: FeedRequestOptions) => Promise<FeedResponse<any, any>>;
    /** Override activity delete request */
    doActivityDeleteRequest?: (id: string) => any;
    children?: React.ReactNode;
    /** Override reaction add request */
    doReactionAddRequest?: (kind: string, activity: BaseActivityResponse, data?: any, options?: any) => any;
    /** Override reaction delete request */
    doReactionDeleteRequest?: (id: string) => any;
    /** Override child reaction add request */
    doChildReactionAddRequest?: (kind: string, activity: BaseReaction, data?: any, options?: any) => any;
    /** Override child reaction delete request */
    doChildReactionDeleteRequest?: (id: string) => any;
    /** Override reactions filter request */
    doReactionsFilterRequest?: (options: {}) => Promise<any>;
    /** The location that should be used for analytics when liking in the feed,
     * this is only useful when you have analytics enabled for your app. */
    analyticsLocation?: string;
};
export declare class Feed extends React.Component<FeedProps> {
    _appCtxWrapperFunc: (appCtx: AppCtx) => JSX.Element;
    render(): JSX.Element;
}
export declare type FeedInnerProps = FeedProps & BaseAppCtx;
