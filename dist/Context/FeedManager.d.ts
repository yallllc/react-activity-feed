import { FeedRequestOptions, FeedResponse, ReactionFilterResponse, ReactionRequestOptions } from '../getstreamCustomTypes';
import { BaseActivityGroupResponse, BaseActivityResponse, BaseReaction } from '../types';
import { FeedInnerProps } from './Feed';
declare type FR = FeedResponse<any, any>;
declare type RR = ReactionFilterResponse<any, any>;
declare type FeedManagerState = {
    activityOrder: string[];
    activities: any;
    refreshing: boolean;
    lastResponse?: FR;
    lastReverseResponse?: {
        next: string;
    };
    realtimeAdds: Array<any>;
    realtimeDeletes: Array<any>;
    subscription?: any;
    activityIdToPath: {
        [key: string]: string[];
    };
    reactionActivities: {
        [key: string]: string;
    };
    activityIdToPaths: {
        [key: string]: Array<string[]>;
    };
    reactionIdToPaths: {
        [key: string]: Array<string[]>;
    };
    unread: number;
    unseen: number;
    numSubscribers: number;
    reactionsBeingToggled: {
        [kind: string]: {
            [activityId: string]: boolean;
        };
    };
    childReactionsBeingToggled: {
        [kind: string]: {
            [reactionId: string]: boolean;
        };
    };
};
export declare class FeedManager {
    props: FeedInnerProps;
    state: FeedManagerState;
    registeredCallbacks: Array<() => any>;
    constructor(props: FeedInnerProps);
    register(callback: () => any): void;
    unregister(callback: () => any): void;
    triggerUpdate(): void;
    setState: (changed: Partial<FeedManagerState> | ((FeedManagerState: any) => Partial<FeedManagerState>)) => void;
    trackAnalytics: (label: string, activity: BaseActivityResponse, track?: boolean) => void;
    getActivityPath: (activity: BaseActivityResponse | string, ...rest: string[]) => any[];
    getActivityPaths: (activity: BaseActivityResponse | string) => string[][];
    getReactionPaths: (reaction: BaseReaction | string) => string[][];
    onAddReaction: (kind: string, activity: BaseActivityResponse, data?: {}, options?: {
        trackAnalytics?: boolean;
    } & ReactionRequestOptions) => Promise<void>;
    onRemoveReaction: (kind: string, activity: BaseActivityResponse, id: string, options?: {
        trackAnalytics?: boolean;
    }) => Promise<void>;
    onToggleReaction: (kind: string, activity: BaseActivityResponse, data: {}, options?: {
        trackAnalytics?: boolean;
    } & ReactionRequestOptions) => Promise<void>;
    onAddChildReaction: (kind: string, reaction: BaseReaction, data?: {}, options?: {
        trackAnalytics?: boolean;
    } & ReactionRequestOptions) => Promise<void>;
    onRemoveChildReaction: (kind: string, reaction: BaseReaction, id: string, options?: {
        trackAnalytics?: boolean;
    }) => Promise<void>;
    onToggleChildReaction: (kind: string, reaction: BaseReaction, data: {}, options?: {
        trackAnalytics?: boolean;
    } & ReactionRequestOptions) => Promise<void>;
    _removeActivityFromState: (activityId: string) => void;
    onRemoveActivity: (activityId: string) => Promise<void>;
    onMarkAsRead: (group: true | BaseActivityGroupResponse | BaseActivityGroupResponse[]) => Promise<void>;
    onMarkAsSeen: (group: true | BaseActivityGroupResponse | BaseActivityGroupResponse[]) => Promise<void>;
    _onMarkAs: (type: 'seen' | 'read', group: true | BaseActivityGroupResponse | BaseActivityGroupResponse[]) => Promise<void>;
    getOptions: (extraOptions?: FeedRequestOptions) => FeedRequestOptions;
    doFeedRequest: (options: FeedRequestOptions) => Promise<FR>;
    feed: () => import("getstream").Feed;
    responseToActivityMap: (response: FR) => any;
    responseToActivityIdToPath: (response: FR) => {};
    responseToActivityIdToPaths: (response: FR, previous?: {}) => {};
    feedResponseToReactionIdToPaths: (response: FR, previous?: {}) => {};
    reactionResponseToReactionIdToPaths: (response: RR, previous: {}, basePath: any[], oldLength: number) => {};
    removeFoundReactionIdPaths: (data: any, previous: {}, basePath: any[]) => {};
    removeFoundActivityIdPaths: (data: any, previous: {}, basePath: any[]) => {};
    removeFoundActivityIdPath: (data: any[], previous: {}, basePath: any[]) => {};
    addFoundReactionIdPaths: (data: any, previous: {}, basePath: any[]) => {};
    addFoundActivityIdPaths: (data: any, previous: any, basePath: any[]) => any;
    addFoundActivityIdPath: (data: Array<{
        id: string;
    }>, previous: any, basePath: any[]) => any;
    responseToReactionActivities: (response: FR) => {};
    unseenUnreadFromResponse(response: FR): {
        unseen: number;
        unread: number;
    };
    refresh: (extraOptions: FeedRequestOptions) => Promise<void>;
    subscribe: () => Promise<void>;
    unsubscribe: () => Promise<void>;
    hasNextPage: () => boolean;
    hasReverseNextPage: () => boolean;
    loadNextPage: () => Promise<void>;
    loadReverseNextPage: () => Promise<void>;
    loadNextReactions: (activityId: string, kind: string, activityPath?: string[], oldestToNewest?: boolean) => Promise<void>;
    refreshUnreadUnseen: () => Promise<void>;
}
export {};
