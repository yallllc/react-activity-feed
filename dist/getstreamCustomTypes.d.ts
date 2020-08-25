export declare type TimestampedResponse = {
    created_at: string;
    updated_at: string;
};
export declare type DurationResponse = {
    duration: string;
};
export declare type UserResponse<Data> = TimestampedResponse & {
    id: string;
    data: Data;
};
export declare type FollowCounts = {
    following_count: number;
    followers_count: number;
};
export declare type ProfileResponse<Data> = FollowCounts & UserResponse<Data>;
export declare type StreamUser<Data> = {
    id: string;
    full?: UserResponse<Data>;
    data?: Data;
    get(): Promise<UserResponse<Data>>;
    getOrCreate(Data: any): Promise<UserResponse<Data>>;
    create(Data: any): Promise<UserResponse<Data>>;
    update(Data: any): Promise<UserResponse<Data>>;
    profile(): Promise<ProfileResponse<Data>>;
};
export declare type FollowResponse = DurationResponse;
export declare type ReactionRequestOptions = {
    id?: string;
    targetFeeds?: Array<StreamFeed<any, any> | string>;
    userId?: string;
};
export declare type OgData = {
    title: string;
    description: string;
    site_name: string;
    images: Array<{
        image?: string;
        secure_url?: string;
    }>;
    videos: Array<{
        video?: string;
        secure_url?: string;
        type?: string;
        width?: string;
        height?: string;
    }>;
    audios: Array<{
        type?: string;
        secure_url?: string;
        audio?: string;
    }>;
    url: string;
};
export declare type ReactionFilterResponse<UserData, ReactionData> = {
    results: Array<ReactionResponse<UserData, ReactionData>>;
    next: string;
};
declare type CollectionEntry<Data> = {
    id: string;
    data: Data;
    collection: string;
};
export declare type ActivityArgData<UserData, CustomActivityData> = {
    foreign_id?: string;
    time?: string;
    actor: StreamUser<UserData>;
    verb: string;
    object: string | StreamUser<UserData> | CollectionEntry<any>;
    target?: string;
} & CustomActivityData;
export declare type MarkValue = boolean | string;
export declare type FeedRequestOptions = {
    withReactionCounts?: boolean;
    withRecentReactions?: boolean;
    withOwnReactions?: boolean;
    reactions?: {
        recent?: boolean;
        own?: boolean;
        counts?: boolean;
    };
    limit?: number;
    offset?: number;
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    ranking?: string;
    mark_seen?: MarkValue;
    mark_read?: MarkValue;
    refresh?: boolean;
};
export declare type ReactionFilterOptions = {
    activity_id?: string;
    user_id?: string;
    kind?: string;
    limit?: number;
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
};
export declare type FollowRequestOptions = {
    limit?: number;
};
export declare type StreamFeed<UserData, CustomActivityData> = {
    id: string;
    slug: string;
    userId: string;
    get: (options?: FeedRequestOptions) => Promise<FeedResponse<UserData, CustomActivityData>>;
    getActivityDetail: (activityId: string, options?: FeedRequestOptions) => Promise<FeedResponse<UserData, CustomActivityData>>;
    addActivity: (activities: ActivityArgData<UserData, CustomActivityData>) => Promise<ActivityResponse<UserData, CustomActivityData>>;
    addActivities: (activities: Array<ActivityArgData<UserData, CustomActivityData>>) => Promise<Array<ActivityResponse<UserData, CustomActivityData>>>;
    subscribe: () => Subscription;
    removeActivity: (id: string | {
        foreignId: string;
    }) => Promise<any>;
    follow: (targetFeedGroup: string, targetUserId: string | StreamUser<UserData>, options?: FollowRequestOptions) => Promise<DurationResponse>;
};
export declare type Subscription = {
    then: (success: () => any, failure: (err: Error) => any) => Promise<any>;
    cancel: () => any;
};
export declare type ReactionKindMap<UserData, ReactionData> = {
    [key: string]: Array<ReactionResponse<UserData, ReactionData>>;
};
export declare type ReactionExtra = {
    next: string;
};
export declare type ReactionExtraKindMap = {
    [key: string]: ReactionExtra;
};
export declare type ReactionCounts = {
    [key: string]: number;
};
export declare type ActivityResponse<UserData, CustomActivityData> = {
    id: string;
    foreign_id: string;
    time: string;
    actor: UserResponse<UserData> | string | {
        error: string;
    };
    verb: string;
    object: string | any;
    target: string;
    origin: null | string;
    to: Array<string>;
    reaction_counts?: ReactionCounts;
    own_reactions?: ReactionKindMap<UserData, any>;
    latest_reactions?: ReactionKindMap<UserData, any>;
    latest_reactions_extra?: ReactionExtraKindMap;
    activities?: any;
} & CustomActivityData;
export declare type FeedResponse<UserData, CustomActivityData> = {
    unread?: number;
    unseen?: number;
    results: Array<ActivityGroupResponse<UserData, CustomActivityData> | ActivityResponse<UserData, CustomActivityData>>;
    next: string;
    duration: string;
};
export declare type ActivityGroupResponse<UserData, CustomActivityData> = {
    id: string;
    verb: string;
    activities: Array<ActivityResponse<UserData, CustomActivityData>>;
    is_read?: boolean;
    is_seen?: boolean;
};
export declare type ReactionResponse<UserData, ReactionData> = {
    id: string;
    kind: string;
    activity_id: string;
    data: ReactionData;
    user_id: string;
    user: UserResponse<UserData>;
    children_counts?: ReactionCounts;
    own_children?: ReactionKindMap<UserData, any>;
    latest_children?: ReactionKindMap<UserData, any>;
    latest_children_extra?: ReactionExtraKindMap;
} & TimestampedResponse;
export {};
