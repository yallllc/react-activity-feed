import Dayjs from 'dayjs';
import stream, { StreamClient, User } from 'getstream';
import * as React from 'react';
import { Streami18n } from '../Streami18n';
import { ErrorHandler, UserData } from '../types';
import { FeedProps } from './Feed';
import { FeedManager } from './FeedManager';
export declare const StreamContext: React.Context<{
    changedUserData: () => void;
    sharedFeedManagers: {};
    client: any;
}>;
export declare const TranslationContext: React.Context<{
    t: (msg: any) => any;
    tDateTimeParser: (input: any) => Dayjs.Dayjs;
}>;
export declare function withTranslationContext<O>(OriginalComponent: React.ComponentType): React.FC<O>;
export declare type AppCtx<Data = UserData> = {
    client: StreamClient;
    user: User;
    userData: Data | null | undefined;
    changedUserData: () => void;
    changeNotificationCounts?: any;
    analyticsClient?: any;
    sharedFeedManagers: {
        [key: string]: FeedManager;
    };
    errorHandler: ErrorHandler;
};
export declare type Streami18Ctx = {
    t: (msg: string, data?: any) => string;
    tDateTimeParser: (input?: string | number) => Dayjs.Dayjs;
};
declare type StreamAppProps<Data = UserData> = {
    /** The ID of your app, can be found on the [Stream dashboard](https://getstream.io/dashboard) */
    appId: string | number;
    /** The API key for your app, can be found on the [Stream dashboard](https://getstream.io/dashboard) */
    apiKey: string;
    /** The access token for the end user that uses your website, how to generate it can be found [here](https://getstream.io/docs/#frontend_setup) */
    token: string;
    /** Any options that [`stream.connect()`](https://getstream.io/docs/#setup) accepts */
    options?: any;
    analyticsToken?: string;
    /** Normaly feed state is local to the feed component, such as FlatFeed and
     * NotificationFeed. This means that changes in one feed don't affect the
     * other. However in some cases you want the state to be shared in multiple
     * components. In the case of the NotificationDropdown you need state shared
     * between the NotificationFeed and the dropdown badge. This prop should be
     * used in those cases. Each element in the array provided to `sharedFeeds`
     * will create one globally managed feed. The default of this prop makes sure
     * that the NotificationDropdown works correctly. If you want need to change
     * some props on the NotificationDropdown, you should change them here
     * instead.
     */
    sharedFeeds?: Array<FeedProps>;
    /** The data a user should get when no data is present in stream for this user yet */
    defaultUserData?: Data;
    /** A callback to handle errors produced by the components. This should
     * probably hook into your own notification system. */
    errorHandler?: ErrorHandler;
    i18nInstance?: Streami18n;
    children?: React.ReactNode;
};
declare type StreamAppState = AppCtx & Streami18Ctx & {
    apiKey: string;
    token: string;
    appId: string | number;
};
/**
 * Manages the connection with Stream. Any components that should talk to
 * Stream should be a child of this component.
 */
export declare class StreamApp extends React.Component<StreamAppProps, StreamAppState> {
    static defaultProps: {
        sharedFeeds: {
            feedGroup: string;
            notify: boolean;
            options: {
                mark_seen: boolean;
            };
        }[];
        defaultUserData: {
            name: string;
        };
        errorHandler: (error: Error, type: import("../types").FlowRequestTypes, detail: any) => void;
    };
    static Consumer: (props: {
        children?: (input: AppCtx) => React.ReactNode;
    }) => JSX.Element;
    constructor(props: StreamAppProps);
    componentDidUpdate(prevProps: StreamAppProps): void;
    componentDidMount(): Promise<void>;
    static getDerivedStateFromProps(props: StreamAppProps, state: StreamAppState): AppCtx<UserData> & Streami18Ctx & {
        apiKey: string;
        token: string;
        appId: React.ReactText;
    } & {
        client: stream.StreamClient;
        user: stream.User;
        userData: any;
        analyticsClient: any;
        sharedFeedManagers: {};
        errorHandler: ErrorHandler;
        apiKey: string;
        token: string;
        appId: React.ReactText;
    };
    static initClientState: <S>(props: StreamAppProps, state: S) => S & {
        client: stream.StreamClient;
        user: stream.User;
        userData: any;
        analyticsClient: any;
        sharedFeedManagers: {};
        errorHandler: ErrorHandler;
        apiKey: string;
        token: string;
        appId: React.ReactText;
    };
    getUserInfo: () => Promise<void>;
    render(): JSX.Element;
}
export {};
