import { TFunction } from 'i18next';
import Dayjs from 'dayjs';
declare const defaultNS = "translation";
import 'dayjs/locale/nl';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/en';
export declare class Streami18n {
    i18nInstance: import("i18next").i18n;
    Dayjs: any;
    setLanguageCallback: (cb: TFunction) => void;
    initialized: boolean;
    currentLanguage?: string;
    DateTimeParser?: typeof Dayjs;
    logger?: (msg: any) => void;
    isCustomDateTimeParser: boolean;
    i18nextConfig?: any;
    t: any;
    tDateTimeParser: any;
    translations: {
        en: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        nl: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        ru: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        tr: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        fr: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        hi: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        it: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
    };
    /**
     * dayjs.updateLocale('nl') also changes the global locale. We don't want to do that
     * when user calls registerTranslation() function. So intead we will store the locale configs
     * given to registerTranslation() function in `dayjsLocales` object, and register the required locale
     * with moment, when setLanguage is called.
     * */
    dayjsLocales: {};
    /**
     * Contructor accepts following options:
     *  - language (String) default: 'en'
     *    Language code e.g., en, tr
     *
     *  - translationsForLanguage (object)
     *    Translations object. Please check src/i18n/en.json for example.
     *
     *  - disableDateTimeTranslations (boolean) default: false
     *    Disable translations for datetimes
     *
     *  - debug (boolean) default: false
     *    Enable debug mode in internal i18n class
     *
     *  - logger (function) default: () => {}
     *    Logger function to log warnings/errors from this class
     *
     *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
     *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
     *    corresponding to language (param)
     *
     *  - DateTimeParser (function) Moment or Dayjs instance/function.
     *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
     *
     * @param {*} options
     */
    constructor(options?: Partial<{
        language: string;
        disableDateTimeTranslations: boolean;
        debug: boolean;
        logger: (msg: any) => void;
        dayjsLocaleConfigForLanguage: any;
        translationsForLanguage: any;
        DateTimeParser: typeof Dayjs;
    }>);
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    init(): Promise<{
        t: any;
        tDateTimeParser: any;
    }>;
    localeExists: (language: any) => boolean;
    validateCurrentLanguage: () => void;
    /** Returns an instance of i18next used within this class instance */
    geti18Instance: () => import("i18next").i18n;
    /** Returns list of available languages. */
    getAvailableLanguages: () => string[];
    /** Returns all the translation dictionary for all inbuilt-languages */
    getTranslations: () => {
        en: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        nl: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        ru: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        tr: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        fr: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        hi: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
        it: {
            translation: {
                "1 comment": string;
                "1 like": string;
                "1 repost": string;
                Details: string;
                "Load activities": string;
                "Load more": string;
                "New Post": string;
                "No data to display...": string;
                "Pick your emoji": string;
                Post: string;
                "Start Typing...": string;
                "Type your post...": string;
                "You have 1 new notification": string;
                "You have {{ notificationCount }} new notifications": string;
                "{{ actorName }} and 1 other commented on your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other followed you": string;
                "{{ actorName }} and 1 other liked your {{ activityVerb }}": string;
                "{{ actorName }} and 1 other reposted your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others followed you": string;
                "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": string;
                "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": string;
                "{{ actorName }} commented on your {{ activityVerb }}": string;
                "{{ actorName }} followed you": string;
                "{{ actorName }} liked your {{ activityVerb }}": string;
                "{{ actorName }} reposted your {{ activityVerb }}": string;
                "{{ countComments }} comments": string;
                "{{ countLikes }} likes": string;
                "{{ countReposts }} reposts": string;
            };
        };
    };
    /**
     * Returns current version translator function.
     */
    getTranslators(): Promise<{
        t: any;
        tDateTimeParser: any;
    }>;
    /**
     * Register translation
     *
     * @param {*} language
     * @param {*} translation
     * @param {*} customDayjsLocale
     */
    registerTranslation(language: any, translation: any, customDayjsLocale: any): void;
    addOrUpdateLocale(key: any, config: any): void;
    /**
     * Changes the language.
     * @param {*} language
     */
    setLanguage(language: any): Promise<TFunction>;
    /**
     *
     * @param {*} callback
     */
    registerSetLanguageCallback(callback: any): void;
}
export {};
