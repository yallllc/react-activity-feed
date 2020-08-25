import { StreamClient } from 'getstream';
import { Component, ReactElement } from 'react';
import { AppCtx, FeedCtx } from './Context';
import { ActivityArgData, ActivityGroupResponse, ActivityResponse, OgData as OgDataGetStream, ReactionKindMap, ReactionResponse, UserResponse as StreamUserResponse, ReactionRequestOptions } from './getstreamCustomTypes';
export declare type FlowRequestTypes = 'get-user-info' | 'get-feed' | 'get-feed-next-page' | 'get-reactions-next-page' | 'get-notification-counts' | 'upload-image' | 'add-activity' | 'delete-activity' | 'add-reaction' | 'delete-reaction' | 'add-child-reaction' | 'delete-child-reaction';
export declare type UploadState = 'uploading' | 'finished' | 'failed';
export declare type FileLike = Blob | File;
export declare type UploadInfo = {
    id: string;
    url?: string;
    state: UploadState;
};
export declare type FileUpload = UploadInfo & {
    file: File;
};
export declare type ImageUpload = UploadInfo & {
    file: Blob | File;
    previewUri?: string;
};
export declare type ErrorHandler = (error: Error, type: FlowRequestTypes, details: any) => any;
declare type ReactComponentClass = Component<any>;
export declare type ReactComponentFunction = (props: any) => ReactElement | boolean | number | string | undefined;
export declare type ReactElementCreator = ReactComponentClass | ReactComponentFunction;
export declare type RenderableButNotElement = (ReactElementCreator | boolean | number | string) | undefined;
export declare type Renderable = RenderableButNotElement | ReactElement<any> | React.ElementType<any>;
export declare type BaseActivityResponse = ActivityResponse<any, any>;
export declare type BaseActivityGroupResponse = ActivityGroupResponse<any, any>;
export declare type BaseAppCtx = AppCtx;
export declare type BaseFeedCtx = FeedCtx;
export declare type BaseClient = StreamClient;
export declare type BaseReaction = ReactionResponse<any, any>;
export declare type BaseReactionMap = ReactionKindMap<any, any>;
export declare type BaseUserResponse = StreamUserResponse<any>;
export declare type UserData = {
    name?: string;
    profileImage?: string;
};
export declare type OgData = OgDataGetStream;
export declare type FileInfo = {
    name: string;
    url: string;
    mimeType: string;
};
export declare type Attachments = {
    images?: string[];
    og?: OgData;
    files?: Array<FileInfo>;
};
export declare type CustomActivityData = {
    text?: string;
    link?: boolean;
    image?: string;
    attachments?: Attachments;
};
export declare type CustomActivityArgData = ActivityArgData<any, CustomActivityData>;
export declare type ActivityData = ActivityResponse<UserData, CustomActivityData>;
export declare type UserResponse = StreamUserResponse<UserData>;
export declare type ToggleReactionCallbackFunction = (kind: string, activity: BaseActivityResponse, data?: any, options?: {
    trackAnalytics?: boolean;
} & ReactionRequestOptions) => void | Promise<any>;
export declare type AddReactionCallbackFunction = (kind: string, activity: BaseActivityResponse, data?: any, options?: {
    trackAnalytics?: boolean;
} & ReactionRequestOptions) => void | Promise<any>;
export declare type RemoveReactionCallbackFunction = (kind: string, activity: BaseActivityResponse, id: string, options?: {
    trackAnalytics?: boolean;
}) => void | Promise<any>;
export declare type ToggleChildReactionCallbackFunction = (kind: string, activity: BaseReaction, data: any, options?: {
    trackAnalytics?: boolean;
} & ReactionRequestOptions) => void | Promise<any>;
export declare type AddChildReactionCallbackFunction = (kind: string, activity: BaseReaction, data: any, options?: {
    trackAnalytics?: boolean;
} & ReactionRequestOptions) => void | Promise<any>;
export declare type RemoveChildReactionCallbackFunction = (kind: string, activity: BaseReaction, id: string, options?: {
    trackAnalytics?: boolean;
}) => void | Promise<any>;
export declare type CommentData = {
    text: string;
};
export declare type Comment = ReactionResponse<UserData, CommentData>;
export declare type NotificationActivity = ActivityResponse<UserData, any>;
export declare type NotificationActivities = Array<ActivityResponse<UserData, any>>;
export declare type Emoji = {
    native: string;
    colons: string;
    id: string;
    name: string;
    emoticons: string[];
    skin?: number;
    unified: string;
};
export declare type Trigger = {
    [triggerChar: string]: {
        output?: (item: any | string, trigger?: string) => {
            key?: string;
            text: string;
            caretPosition: 'start' | 'end' | 'next' | number;
        } | string | null;
        dataProvider: (token: string) => Promise<Array<any | string>> | Array<any | string>;
        allowWhitespace?: boolean;
        afterWhitespace?: boolean;
        component: ReactElement<any>;
    };
};
export {};
