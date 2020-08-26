import _extends from '@babel/runtime/helpers/extends';
import Dayjs from 'dayjs';
import stream from 'getstream';
import React, { isValidElement, createElement, Fragment, createContext, Component, createRef, PureComponent } from 'react';
import StreamAnalytics from 'stream-analytics';
import i18n from 'i18next';
import calendar from 'dayjs/plugin/calendar';
import updateLocale from 'dayjs/plugin/updateLocale';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/nl';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/en';
import immutable from 'immutable';
import _isEqual from 'lodash/isEqual';
import _isPlainObject from 'lodash/isPlainObject';
import _remove from 'lodash/remove';
import URL from 'url-parse';
import anchorme from 'anchorme';
import _truncate from 'lodash/truncate';
import twitter from 'twitter-text';
import utc from 'dayjs/plugin/utc';
import minMax from 'dayjs/plugin/minMax';
import { IconButton, FileIcon, LoadingIndicator, Thumbnail, ImageDropzone, ImagePreviewer, FilePreviewer, ImageUploadButton, FileUploadButton } from 'react-file-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faBookmark } from '@fortawesome/free-regular-svg-icons';
import Lightbox from 'react-images';
import _debounce from 'lodash/debounce';
import _difference from 'lodash/difference';
import _includes from 'lodash/includes';
import _uniq from 'lodash/uniq';
import { Picker, emojiIndex } from 'emoji-mart';
import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete';
import PropTypes from 'prop-types';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var handleError = function handleError(error, type, detail) {
  console.warn(error, type, detail);
};

var Details = "Details";
var Post = "Post";
var enTranslations = {
	"1 comment": "1 comment",
	"1 like": "1 like",
	"1 repost": "1 repost",
	Details: Details,
	"Load activities": "Load activities",
	"Load more": "Load more",
	"New Post": "New Post",
	"No data to display...": "No data to display...",
	"Pick your emoji": "Pick your emoji",
	Post: Post,
	"Start Typing...": "Start Typing...",
	"Type your post...": "Type your post...",
	"You have 1 new notification": "You have 1 new notification",
	"You have {{ notificationCount }} new notifications": "You have {{ notificationCount }} new notifications",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "{{ actorName }} and 1 other commented on your {{ activityVerb }}",
	"{{ actorName }} and 1 other followed you": "{{ actorName }} and 1 other followed you",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "{{ actorName }} and 1 other liked your {{ activityVerb }}",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "{{ actorName }} and 1 other reposted your {{ activityVerb }}",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "{{ actorName }} and {{ countOtherActors }} others followed you",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}",
	"{{ actorName }} commented on your {{ activityVerb }}": "{{ actorName }} commented on your {{ activityVerb }}",
	"{{ actorName }} followed you": "{{ actorName }} followed you",
	"{{ actorName }} liked your {{ activityVerb }}": "{{ actorName }} liked your {{ activityVerb }}",
	"{{ actorName }} reposted your {{ activityVerb }}": "{{ actorName }} reposted your {{ activityVerb }}",
	"{{ countComments }} comments": "{{ countComments }} comments",
	"{{ countLikes }} likes": "{{ countLikes }} likes",
	"{{ countReposts }} reposts": "{{ countReposts }} reposts"
};

var Details$1 = "Details";
var Post$1 = "";
var nlTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$1,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$1,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var Details$2 = "Детали";
var Post$2 = "";
var ruTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$2,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$2,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var Details$3 = "Detaylar";
var Post$3 = "";
var trTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$3,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$3,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var Details$4 = "Voir les commentaires";
var Post$4 = "";
var frTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$4,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$4,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var Details$5 = "डिटेल्स";
var Post$5 = "";
var hiTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$5,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$5,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var Details$6 = "Dettagli";
var Post$6 = "";
var itTranslations = {
	"1 comment": "",
	"1 like": "",
	"1 repost": "",
	Details: Details$6,
	"Load activities": "",
	"Load more": "",
	"New Post": "",
	"No data to display...": "",
	"Pick your emoji": "",
	Post: Post$6,
	"Start Typing...": "",
	"Type your post...": "",
	"You have 1 new notification": "",
	"You have {{ notificationCount }} new notifications": "",
	"{{ actorName }} and 1 other commented on your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other followed you": "",
	"{{ actorName }} and 1 other liked your {{ activityVerb }}": "",
	"{{ actorName }} and 1 other reposted your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others followed you": "",
	"{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}": "",
	"{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}": "",
	"{{ actorName }} commented on your {{ activityVerb }}": "",
	"{{ actorName }} followed you": "",
	"{{ actorName }} liked your {{ activityVerb }}": "",
	"{{ actorName }} reposted your {{ activityVerb }}": "",
	"{{ countComments }} comments": "",
	"{{ countLikes }} likes": "",
	"{{ countReposts }} reposts": ""
};

var defaultNS = 'translation';
var defaultLng = 'en';
Dayjs.extend(updateLocale);
Dayjs.updateLocale('nl', {
  calendar: {
    sameDay: '[vandaag om] LT',
    nextDay: '[morgen om] LT',
    nextWeek: 'dddd [om] LT',
    lastDay: '[gisteren om] LT',
    lastWeek: '[afgelopen] dddd [om] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('it', {
  calendar: {
    sameDay: '[Oggi alle] LT',
    nextDay: '[Domani alle] LT',
    nextWeek: 'dddd [alle] LT',
    lastDay: '[Ieri alle] LT',
    lastWeek: '[lo scorso] dddd [alle] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('hi', {
  calendar: {
    sameDay: '[आज] LT',
    nextDay: '[कल] LT',
    nextWeek: 'dddd, LT',
    lastDay: '[कल] LT',
    lastWeek: '[पिछले] dddd, LT',
    sameElse: 'L'
  },
  // Hindi notation for meridiems are quite fuzzy in practice. While there exists
  // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
  meridiemParse: /रात|सुबह|दोपहर|शाम/,
  meridiemHour: function meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }

    if (meridiem === 'रात') {
      return hour < 4 ? hour : hour + 12;
    } else if (meridiem === 'सुबह') {
      return hour;
    } else if (meridiem === 'दोपहर') {
      return hour >= 10 ? hour : hour + 12;
    } else if (meridiem === 'शाम') {
      return hour + 12;
    }
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) {
      return 'रात';
    } else if (hour < 10) {
      return 'सुबह';
    } else if (hour < 17) {
      return 'दोपहर';
    } else if (hour < 20) {
      return 'शाम';
    } else {
      return 'रात';
    }
  }
});
Dayjs.updateLocale('fr', {
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('tr', {
  calendar: {
    sameDay: '[bugün saat] LT',
    nextDay: '[yarın saat] LT',
    nextWeek: '[gelecek] dddd [saat] LT',
    lastDay: '[dün] LT',
    lastWeek: '[geçen] dddd [saat] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('ru', {
  calendar: {
    sameDay: '[Сегодня, в] LT',
    nextDay: '[Завтра, в] LT',
    lastDay: '[Вчера, в] LT'
  }
});
var en_locale = {
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
};
var defaultStreami18nOptions = {
  language: 'en',
  disableDateTimeTranslations: false,
  debug: false,
  logger: function logger(msg) {
    return console.warn(msg);
  },
  dayjsLocaleConfigForLanguage: null,
  translationsForLanguage: null,
  DateTimeParser: Dayjs
};

var Streami18n =
/** @class */
function () {
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
  function Streami18n(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    var _this = this;

    if (options === void 0) {
      options = {};
    }

    this.i18nInstance = i18n.createInstance();
    this.Dayjs = null;

    this.setLanguageCallback = function () {
      return null;
    };

    this.initialized = false;
    this.isCustomDateTimeParser = false;
    this.t = null;
    this.tDateTimeParser = null;
    this.translations = {
      en: (_a = {}, _a[defaultNS] = enTranslations, _a),
      nl: (_b = {}, _b[defaultNS] = nlTranslations, _b),
      ru: (_c = {}, _c[defaultNS] = ruTranslations, _c),
      tr: (_d = {}, _d[defaultNS] = trTranslations, _d),
      fr: (_e = {}, _e[defaultNS] = frTranslations, _e),
      hi: (_f = {}, _f[defaultNS] = hiTranslations, _f),
      it: (_g = {}, _g[defaultNS] = itTranslations, _g)
    };
    /**
     * dayjs.updateLocale('nl') also changes the global locale. We don't want to do that
     * when user calls registerTranslation() function. So intead we will store the locale configs
     * given to registerTranslation() function in `dayjsLocales` object, and register the required locale
     * with moment, when setLanguage is called.
     * */

    this.dayjsLocales = {};

    this.localeExists = function (language) {
      if (_this.isCustomDateTimeParser) return true;
      return Object.keys(Dayjs.Ls).indexOf(language) > -1;
    };

    this.validateCurrentLanguage = function () {
      var availableLanguages = Object.keys(_this.translations);

      if (availableLanguages.indexOf(_this.currentLanguage) === -1) {
        _this.logger("Streami18n: '" + _this.currentLanguage + "' language is not registered." + (" Please make sure to call streami18n.registerTranslation('" + _this.currentLanguage + "', {...}) or ") + ("use one the built-in supported languages - " + _this.getAvailableLanguages()));

        _this.currentLanguage = defaultLng;
      }
    };
    /** Returns an instance of i18next used within this class instance */


    this.geti18Instance = function () {
      return _this.i18nInstance;
    };
    /** Returns list of available languages. */


    this.getAvailableLanguages = function () {
      return Object.keys(_this.translations);
    };
    /** Returns all the translation dictionary for all inbuilt-languages */


    this.getTranslations = function () {
      return _this.translations;
    };

    var finalOptions = __assign(__assign({}, defaultStreami18nOptions), options); // Prepare the i18next configuration.


    this.logger = finalOptions.logger;
    this.currentLanguage = finalOptions.language;
    this.DateTimeParser = finalOptions.DateTimeParser;

    try {
      // This is a shallow check to see if given parser is instance of Dayjs.
      // For some reason Dayjs.isDayjs(this.DateTimeParser()) doesn't work.
      if (this.DateTimeParser && this.DateTimeParser.extend) {
        this.DateTimeParser.extend(LocalizedFormat);
        this.DateTimeParser.extend(calendar);
        this.DateTimeParser.extend(localeData);
        this.DateTimeParser.extend(relativeTime);
      }
    } catch (error) {
      throw Error("Streami18n: Looks like you wanted to provide Dayjs instance, but something went wrong while adding plugins - " + error);
    }

    this.isCustomDateTimeParser = !!options.DateTimeParser;
    var translationsForLanguage = finalOptions.translationsForLanguage;

    if (translationsForLanguage) {
      this.translations[this.currentLanguage] = (_h = {}, _h[defaultNS] = translationsForLanguage, _h);
    } // If translations don't exist for given language, then set it as empty object.


    if (!this.translations[this.currentLanguage]) {
      this.translations[this.currentLanguage] = (_j = {}, _j[defaultNS] = {}, _j);
    }

    this.i18nextConfig = {
      nsSeparator: false,
      keySeparator: false,
      fallbackLng: false,
      debug: finalOptions.debug,
      lng: this.currentLanguage,
      interpolation: {
        escapeValue: false
      },
      parseMissingKeyHandler: function parseMissingKeyHandler(key) {
        _this.logger("Streami18n: Missing translation for key: " + key);

        return key;
      }
    };
    this.validateCurrentLanguage();
    var dayjsLocaleConfigForLanguage = finalOptions.dayjsLocaleConfigForLanguage;

    if (dayjsLocaleConfigForLanguage) {
      this.addOrUpdateLocale(this.currentLanguage, __assign({}, dayjsLocaleConfigForLanguage));
    } else if (!this.localeExists(this.currentLanguage)) {
      this.logger("Streami18n: Streami18n(...) - Locale config for " + this.currentLanguage + " does not exist in momentjs." + ("Please import the locale file using \"import 'moment/locale/" + this.currentLanguage + "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
    }

    this.tDateTimeParser = function (timestamp) {
      if (finalOptions.disableDateTimeTranslations || !_this.localeExists(_this.currentLanguage)) {
        return _this.DateTimeParser(timestamp).locale(defaultLng);
      }

      return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
    };
  }
  /**
   * Initializes the i18next instance with configuration (which enables natural language as default keys)
   */


  Streami18n.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, e_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            this.validateCurrentLanguage();
            _b.label = 1;

          case 1:
            _b.trys.push([1, 3,, 4]);

            _a = this;
            return [4
            /*yield*/
            , this.i18nInstance.init(__assign(__assign({}, this.i18nextConfig), {
              resources: this.translations,
              lng: this.currentLanguage
            }))];

          case 2:
            _a.t = _b.sent();
            this.initialized = true;
            return [2
            /*return*/
            , {
              t: this.t,
              tDateTimeParser: this.tDateTimeParser
            }];

          case 3:
            e_1 = _b.sent();
            this.logger("Something went wrong with init: " + e_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Returns current version translator function.
   */


  Streami18n.prototype.getTranslators = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!this.initialized) return [3
            /*break*/
            , 2];

            if (this.dayjsLocales[this.currentLanguage]) {
              this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
            }

            return [4
            /*yield*/
            , this.init()];

          case 1:
            return [2
            /*return*/
            , _a.sent()];

          case 2:
            return [2
            /*return*/
            , {
              t: this.t,
              tDateTimeParser: this.tDateTimeParser
            }];
        }
      });
    });
  };
  /**
   * Register translation
   *
   * @param {*} language
   * @param {*} translation
   * @param {*} customDayjsLocale
   */


  Streami18n.prototype.registerTranslation = function (language, translation, customDayjsLocale) {
    var _a;

    if (!translation) {
      this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) called without translation");
      return;
    }

    if (!this.translations[language]) {
      this.translations[language] = (_a = {}, _a[defaultNS] = translation, _a);
    } else {
      this.translations[language][defaultNS] = translation;
    }

    if (customDayjsLocale) {
      this.dayjsLocales[language] = __assign({}, customDayjsLocale);
    } else if (!this.localeExists(language)) {
      this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) - " + ("Locale config for " + language + " does not exist in Dayjs.") + ("Please import the locale file using \"import 'dayjs/locale/" + language + "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
    }

    if (this.initialized) {
      this.i18nInstance.addResources(language, defaultNS, translation);
    }
  };

  Streami18n.prototype.addOrUpdateLocale = function (key, config) {
    if (this.localeExists(key)) {
      Dayjs.updateLocale(key, __assign({}, config));
    } else {
      // Merging the custom locale config with en config, so missing keys can default to english.
      Dayjs.locale(__assign({
        name: key
      }, __assign(__assign({}, en_locale), config)), null, true);
    }
  };
  /**
   * Changes the language.
   * @param {*} language
   */


  Streami18n.prototype.setLanguage = function (language) {
    return __awaiter(this, void 0, void 0, function () {
      var t, e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.currentLanguage = language;
            if (!this.initialized) return [2
            /*return*/
            ];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , this.i18nInstance.changeLanguage(language)];

          case 2:
            t = _a.sent();

            if (this.dayjsLocales[language]) {
              this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
            }

            this.setLanguageCallback(t);
            return [2
            /*return*/
            , t];

          case 3:
            e_2 = _a.sent();
            this.logger("Failed to set language: " + e_2);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   *
   * @param {*} callback
   */


  Streami18n.prototype.registerSetLanguageCallback = function (callback) {
    this.setLanguageCallback = callback;
  };

  return Streami18n;
}();

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

Dayjs.extend(utc);
Dayjs.extend(minMax); // import { UserResponse } from 'getstream';

function humanizeTimestamp(timestamp, tDateTimeParser) {
  // Following calculation is based on assumption that tDateTimeParser()
  // either returns momentjs or dayjs object.
  var time = tDateTimeParser(timestamp).add(Dayjs(timestamp).utcOffset(), 'minute'); // parse time as UTC

  var now = tDateTimeParser();
  return time.from(now);
}
var smartRender = function smartRender(ElementOrComponentOrLiteral, props, fallback) {
  if (ElementOrComponentOrLiteral === undefined) {
    ElementOrComponentOrLiteral = fallback;
  }

  if ( /*#__PURE__*/isValidElement(ElementOrComponentOrLiteral)) {
    // cast through any, to make TS believe it's a React.Element
    return ElementOrComponentOrLiteral;
  } // cast through any to remove React.Element after previous check


  var ComponentOrLiteral = ElementOrComponentOrLiteral;

  if (typeof ComponentOrLiteral === 'string' || typeof ComponentOrLiteral === 'number' || typeof ComponentOrLiteral === 'boolean' || ComponentOrLiteral == null) {
    return ComponentOrLiteral;
  }

  var Comp = ComponentOrLiteral;
  return /*#__PURE__*/createElement(Comp, props);
};
function userOrDefault(user) {
  var actor;
  var notFound = {
    id: '!not-found',
    created_at: '',
    updated_at: '',
    data: {
      name: 'Unknown',
      profileImage: ''
    }
  };

  if (!user || typeof user === 'string' || _typeof_1(user) === 'object' && typeof user.error === 'string') {
    actor = notFound;
  } else {
    actor = user;
  }

  return actor;
}

function generateRandomId() {
  // prettier-ignore
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}

function dataTransferItemsHaveFiles(items) {
  var e_1, _a;

  if (!items || !items.length) {
    return false;
  }

  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (item.kind === 'file' || item.type === 'text/html') {
        return true;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return false;
}

function getFileLikes(items) {
  var e_2, _a;

  var fileLikes = [];

  try {
    for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
      var item = items_2_1.value;

      if (item.kind === 'file') {
        var file = item.getAsFile();

        if (file) {
          fileLikes.push(file);
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (items_2_1 && !items_2_1.done && (_a = items_2["return"])) _a.call(items_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  return fileLikes;
}

function dataTransferItemsToFiles(items) {
  return __awaiter(this, void 0, void 0, function () {
    var fileLikes, blobPromises, parser, _loop_1, items_3, items_3_1, item;

    var e_3, _a;

    var _this = this;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          if (!items || !items.length) {
            return [2
            /*return*/
            , []];
          }

          fileLikes = getFileLikes(items); // If there are files inside the DataTransferItem prefer those

          if (fileLikes.length) {
            return [2
            /*return*/
            , fileLikes];
          }

          blobPromises = [];
          parser = new DOMParser();

          _loop_1 = function _loop_1(item) {
            if (item.type === 'text/html') {
              blobPromises.push(new Promise(function (accept) {
                item.getAsString(function (s) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var doc, imageTags, imagePromises, _loop_2, imageTags_1, imageTags_1_1, tag;

                    var e_4, _a;

                    var _this = this;

                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          doc = parser.parseFromString(s, 'text/html');
                          imageTags = doc.getElementsByTagName('img');
                          imagePromises = [];

                          _loop_2 = function _loop_2(tag) {
                            if (!tag.src) {
                              return "continue";
                            }

                            imagePromises.push(function () {
                              return __awaiter(_this, void 0, void 0, function () {
                                var res, e_5, contentType, buf, blob;
                                return __generator(this, function (_a) {
                                  switch (_a.label) {
                                    case 0:
                                      _a.trys.push([0, 2,, 3]);

                                      return [4
                                      /*yield*/
                                      , fetch(tag.src)];

                                    case 1:
                                      res = _a.sent();
                                      return [3
                                      /*break*/
                                      , 3];

                                    case 2:
                                      e_5 = _a.sent();
                                      return [2
                                      /*return*/
                                      ];

                                    case 3:
                                      contentType = res.headers.get('Content-type') || 'application/octet-stream';
                                      return [4
                                      /*yield*/
                                      , res.arrayBuffer()];

                                    case 4:
                                      buf = _a.sent();
                                      blob = new Blob([buf], {
                                        type: contentType
                                      });
                                      fileLikes.push(blob);
                                      return [2
                                      /*return*/
                                      ];
                                  }
                                });
                              });
                            }());
                          };

                          try {
                            for (imageTags_1 = __values(imageTags), imageTags_1_1 = imageTags_1.next(); !imageTags_1_1.done; imageTags_1_1 = imageTags_1.next()) {
                              tag = imageTags_1_1.value;

                              _loop_2(tag);
                            }
                          } catch (e_4_1) {
                            e_4 = {
                              error: e_4_1
                            };
                          } finally {
                            try {
                              if (imageTags_1_1 && !imageTags_1_1.done && (_a = imageTags_1["return"])) _a.call(imageTags_1);
                            } finally {
                              if (e_4) throw e_4.error;
                            }
                          }

                          return [4
                          /*yield*/
                          , Promise.all(imagePromises)];

                        case 1:
                          _b.sent();

                          accept();
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                });
              }));
            }
          };

          try {
            for (items_3 = __values(items), items_3_1 = items_3.next(); !items_3_1.done; items_3_1 = items_3.next()) {
              item = items_3_1.value;

              _loop_1(item);
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (items_3_1 && !items_3_1.done && (_a = items_3["return"])) _a.call(items_3);
            } finally {
              if (e_3) throw e_3.error;
            }
          }

          return [4
          /*yield*/
          , Promise.all(blobPromises)];

        case 1:
          _b.sent();

          return [2
          /*return*/
          , fileLikes];
      }
    });
  });
}
function inputValueFromEvent(event) {
  if (!event) {
    return;
  }

  var target;

  if (event.currentTarget) {
    target = event.currentTarget;
  } else {
    target = event.target;
  } // Trick flow into believing the target maybe has a value field


  var inputTarget = target;
  return inputTarget.value;
}
function sanitizeURL(url) {
  if (!url) {
    return undefined;
  }

  var proto = URL(url).protocol; // allow http, https, ftp
  // IMPORTANT: Don't allow data: protocol because of:
  // <a href="data:text/html;base64,PHNjcmlwdD5hbGVydCgneHNzJyk7PC9zY3JpcHQ+" target="_blank">here</a>

  if (proto === 'https:' || proto === 'http:' || proto === 'ftp:') {
    return url;
  }

  return undefined;
}
var textRenderer = function textRenderer(text, parentClass, onClickMention, onClickHashtag) {
  if (text === undefined) return;
  return text.split(' ').map(function (word, i) {
    if (onClickMention && word.includes('@')) {
      var mention_1 = twitter.extractMentions(word);
      if (!mention_1.length) return word;
      return /*#__PURE__*/createElement(Fragment, {
        key: "item-" + i
      }, !word.startsWith("@" + mention_1[0]) && word.slice(0, word.indexOf(mention_1[0]) - 1), /*#__PURE__*/createElement("a", {
        onClick: function onClick() {
          return onClickMention && onClickMention(mention_1[0]);
        },
        className: parentClass + "__mention"
      }, "@", mention_1[0]), !word.endsWith(mention_1[0]) && word.slice(word.indexOf(mention_1[0]) + mention_1[0].length));
    } else if (onClickHashtag && word.includes('#')) {
      var hashtag_1 = twitter.extractHashtags(word);
      if (!hashtag_1.length) return word;
      return /*#__PURE__*/createElement(Fragment, {
        key: "item-" + i
      }, !word.startsWith("#" + hashtag_1[0]) && word.slice(0, word.indexOf(hashtag_1[0]) - 1), /*#__PURE__*/createElement("a", {
        onClick: function onClick() {
          return onClickHashtag && onClickHashtag(hashtag_1[0]);
        },
        className: parentClass + "__hashtag"
      }, "#", hashtag_1[0]), !word.endsWith(hashtag_1[0]) && word.slice(word.indexOf(hashtag_1[0]) + hashtag_1[0].length));
    }

    if (anchorme.validate.url(word) || anchorme.validate.email(word)) {
      var link = anchorme(word, {
        list: true
      });

      if (link[0].protocol !== 'http://' && link[0].protocol !== 'https://' && link[0].protocol !== 'mailto:') {
        return word;
      }

      var url = link[0].protocol + link[0].encoded;

      var urlText = _truncate(link[0].encoded, {
        length: 33
      });

      return /*#__PURE__*/createElement("a", {
        href: url,
        className: parentClass + "__link",
        target: "blank",
        rel: "noopener",
        key: "item-" + i
      }, urlText);
    }

    return word;
  }).reduce(function (accu, elem) {
    return accu === null ? [elem] : [accu, ' ', elem];
  }, []); // TODO added 2nd arg ,[] but don't know if that's the intention
};

var FeedManager =
/** @class */
function () {
  function FeedManager(props) {
    var _this = this;

    this.state = {
      activityOrder: [],
      activities: immutable.Map(),
      activityIdToPath: {},
      activityIdToPaths: {},
      reactionIdToPaths: {},
      reactionActivities: {},
      lastResponse: null,
      lastReverseResponse: null,
      refreshing: false,
      realtimeAdds: [],
      realtimeDeletes: [],
      subscription: null,
      unread: 0,
      unseen: 0,
      numSubscribers: 0,
      reactionsBeingToggled: {},
      childReactionsBeingToggled: {}
    };

    this.setState = function (changed) {
      if (typeof changed === 'function') {
        changed = changed(_this.state);
      }

      _this.state = __assign(__assign({}, _this.state), changed);

      _this.triggerUpdate();
    };

    this.trackAnalytics = function (label, activity, track) {
      var analyticsClient = _this.props.analyticsClient;

      if (!track) {
        return;
      }

      if (!analyticsClient) {
        console.warn('trackAnalytics was enabled, but analytics client was not initialized. ' + 'Please set the analyticsToken prop on StreamApp');
        return;
      }

      var feed = _this.props.client.feed(_this.props.feedGroup, _this.props.userId);

      analyticsClient.trackEngagement({
        label: label,
        feed_id: _this.props.feedGroup,
        content: {
          foreign_id: activity.foreign_id
        },
        location: _this.props.analyticsLocation
      });
    };

    this.getActivityPath = function (activity) {
      var rest = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }

      var activityId;

      if (typeof activity === 'string') {
        activityId = activity;
      } else {
        activityId = activity.id;
      }

      var activityPath = _this.state.activityIdToPath[activityId];

      if (activityPath === undefined) {
        return __spread([activityId], rest);
      }

      return __spread(activityPath, rest);
    };

    this.getActivityPaths = function (activity) {
      var activityId;

      if (typeof activity === 'string') {
        activityId = activity;
      } else {
        activityId = activity.id;
      }

      return _this.state.activityIdToPaths[activityId];
    };

    this.getReactionPaths = function (reaction) {
      var reactionId;

      if (typeof reaction === 'string') {
        reactionId = reaction;
      } else {
        reactionId = reaction.id;
      }

      return _this.state.reactionIdToPaths[reactionId];
    };

    this.onAddReaction = function (kind, activity, data, options) {
      if (options === void 0) {
        options = {};
      }

      return __awaiter(_this, void 0, void 0, function () {
        var reaction, e_1, enrichedReaction;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 5,, 6]);

              if (!this.props.doReactionAddRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doReactionAddRequest(kind, activity, data, options)];

            case 1:
              reaction = _a.sent();
              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.props.client.reactions.add(kind, activity, data, options.targetFeeds)];

            case 3:
              reaction = _a.sent();
              _a.label = 4;

            case 4:
              return [3
              /*break*/
              , 6];

            case 5:
              e_1 = _a.sent();
              this.props.errorHandler(e_1, 'add-reaction', {
                kind: kind,
                activity: activity,
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              this.trackAnalytics(kind, activity, options.trackAnalytics);
              enrichedReaction = immutable.fromJS(__assign(__assign({}, reaction), {
                user: this.props.user
              }));
              this.setState(function (prevState) {
                var e_2, _a;

                var activities = prevState.activities;
                var reactionIdToPaths = prevState.reactionIdToPaths;

                try {
                  for (var _b = __values(_this.getActivityPaths(activity)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var path = _c.value;

                    _this.removeFoundReactionIdPaths(activities.getIn(path).toJS(), reactionIdToPaths, path);

                    activities = activities.updateIn(__spread(path, ['reaction_counts', kind]), function (v) {
                      if (v === void 0) {
                        v = 0;
                      }

                      return v + 1;
                    }).updateIn(__spread(path, ['own_reactions', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.unshift(enrichedReaction);
                    }).updateIn(__spread(path, ['latest_reactions', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.unshift(enrichedReaction);
                    });

                    _this.addFoundReactionIdPaths(activities.getIn(path).toJS(), reactionIdToPaths, path);
                  }
                } catch (e_2_1) {
                  e_2 = {
                    error: e_2_1
                  };
                } finally {
                  try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }

                return {
                  activities: activities,
                  reactionIdToPaths: reactionIdToPaths
                };
              });
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.onRemoveReaction = function (kind, activity, id, options) {
      if (options === void 0) {
        options = {};
      }

      return __awaiter(_this, void 0, void 0, function () {
        var e_3;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 5,, 6]);

              if (!this.props.doReactionDeleteRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doReactionDeleteRequest(id)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.props.client.reactions["delete"](id)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [3
              /*break*/
              , 6];

            case 5:
              e_3 = _a.sent();
              this.props.errorHandler(e_3, 'delete-reaction', {
                kind: kind,
                activity: activity,
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              this.trackAnalytics('un' + kind, activity, options.trackAnalytics);
              this.setState(function (prevState) {
                var e_4, _a;

                var activities = prevState.activities;
                var reactionIdToPaths = prevState.reactionIdToPaths;

                try {
                  for (var _b = __values(_this.getActivityPaths(activity)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var path = _c.value;

                    _this.removeFoundReactionIdPaths(activities.getIn(path).toJS(), reactionIdToPaths, path);

                    activities = activities.updateIn(__spread(path, ['reaction_counts', kind]), function (v) {
                      if (v === void 0) {
                        v = 0;
                      }

                      return v - 1;
                    }).updateIn(__spread(path, ['own_reactions', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.remove(v.findIndex(function (r) {
                        return r.get('id') === id;
                      }));
                    }).updateIn(__spread(path, ['latest_reactions', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.remove(v.findIndex(function (r) {
                        return r.get('id') === id;
                      }));
                    });

                    _this.addFoundReactionIdPaths(activities.getIn(path).toJS(), reactionIdToPaths, path);
                  }
                } catch (e_4_1) {
                  e_4 = {
                    error: e_4_1
                  };
                } finally {
                  try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                  } finally {
                    if (e_4) throw e_4.error;
                  }
                }

                return {
                  activities: activities,
                  reactionIdToPaths: reactionIdToPaths
                };
              });

              if (this.state.reactionActivities[id]) {
                this._removeActivityFromState(this.state.reactionActivities[id]);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.onToggleReaction = function (kind, activity, data, options) {
      if (options === void 0) {
        options = {};
      }

      return __awaiter(_this, void 0, void 0, function () {
        var togglingReactions, currentReactions, last;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              togglingReactions = this.state.reactionsBeingToggled[kind] || {};

              if (togglingReactions[activity.id]) {
                return [2
                /*return*/
                ];
              }

              togglingReactions[activity.id] = true;
              this.state.reactionsBeingToggled[kind] = togglingReactions;
              currentReactions = this.state.activities.getIn(__spread(this.getActivityPaths(activity)[0], ['own_reactions', kind]), immutable.List());
              last = currentReactions.last();
              if (!last) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.onRemoveReaction(kind, activity, last.get('id'), options)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.onAddReaction(kind, activity, data, options)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              delete togglingReactions[activity.id];
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.onAddChildReaction = function (kind, reaction, data, options) {
      if (options === void 0) {
        options = {};
      }

      return __awaiter(_this, void 0, void 0, function () {
        var childReaction, e_5, enrichedReaction;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 5,, 6]);

              if (!this.props.doChildReactionAddRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doChildReactionAddRequest(kind, reaction, data, options)];

            case 1:
              childReaction = _a.sent();
              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.props.client.reactions.addChild(kind, reaction, data, options.targetFeeds)];

            case 3:
              childReaction = _a.sent();
              _a.label = 4;

            case 4:
              return [3
              /*break*/
              , 6];

            case 5:
              e_5 = _a.sent();
              this.props.errorHandler(e_5, 'add-child-reaction', {
                kind: kind,
                reaction: reaction,
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              enrichedReaction = immutable.fromJS(__assign(__assign({}, childReaction), {
                user: this.props.user
              }));
              this.setState(function (prevState) {
                var e_6, _a;

                var activities = prevState.activities;

                try {
                  for (var _b = __values(_this.getReactionPaths(reaction)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var path = _c.value;
                    activities = activities.updateIn(__spread(path, ['children_counts', kind]), function (v) {
                      if (v === void 0) {
                        v = 0;
                      }

                      return v + 1;
                    }).updateIn(__spread(path, ['own_children', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.unshift(enrichedReaction);
                    }).updateIn(__spread(path, ['latest_children', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.unshift(enrichedReaction);
                    });
                  }
                } catch (e_6_1) {
                  e_6 = {
                    error: e_6_1
                  };
                } finally {
                  try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                  } finally {
                    if (e_6) throw e_6.error;
                  }
                }

                return {
                  activities: activities
                };
              });
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.onRemoveChildReaction = function (kind, reaction, id,
    /* eslint-disable-next-line no-unused-vars */
    options) {

      return __awaiter(_this, void 0, void 0, function () {
        var e_7;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 5,, 6]);

              if (!this.props.doChildReactionDeleteRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doChildReactionDeleteRequest(id)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.props.client.reactions["delete"](id)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [3
              /*break*/
              , 6];

            case 5:
              e_7 = _a.sent();
              this.props.errorHandler(e_7, 'delete-reaction', {
                kind: kind,
                reaction: reaction,
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              // this.trackAnalytics('un' + kind, reaction, options.trackAnalytics);
              if (this.state.reactionActivities[id]) {
                this._removeActivityFromState(this.state.reactionActivities[id]);
              }

              return [2
              /*return*/
              , this.setState(function (prevState) {
                var e_8, _a;

                var activities = prevState.activities;

                try {
                  for (var _b = __values(_this.getReactionPaths(reaction)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var path = _c.value;
                    activities = activities.updateIn(__spread(path, ['children_counts', kind]), function (v) {
                      if (v === void 0) {
                        v = 0;
                      }

                      return v - 1;
                    }).updateIn(__spread(path, ['own_children', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.remove(v.findIndex(function (r) {
                        return r.get('id') === id;
                      }));
                    }).updateIn(__spread(path, ['children', kind]), function (v) {
                      if (v === void 0) {
                        v = immutable.List();
                      }

                      return v.remove(v.findIndex(function (r) {
                        return r.get('id') === id;
                      }));
                    });
                  }
                } catch (e_8_1) {
                  e_8 = {
                    error: e_8_1
                  };
                } finally {
                  try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                  } finally {
                    if (e_8) throw e_8.error;
                  }
                }

                return {
                  activities: activities
                };
              })];
          }
        });
      });
    };

    this.onToggleChildReaction = function (kind, reaction, data, options) {
      if (options === void 0) {
        options = {};
      }

      return __awaiter(_this, void 0, void 0, function () {
        var togglingReactions, currentReactions, last;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              togglingReactions = this.state.childReactionsBeingToggled[kind] || {};

              if (togglingReactions[reaction.id]) {
                return [2
                /*return*/
                ];
              }

              togglingReactions[reaction.id] = true;
              this.state.childReactionsBeingToggled[kind] = togglingReactions;
              currentReactions = this.state.activities.getIn(__spread(this.getReactionPaths(reaction)[0], ['own_children', kind]), immutable.List());
              last = currentReactions.last();
              if (!last) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.onRemoveChildReaction(kind, reaction, last.get('id'), options)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.onAddChildReaction(kind, reaction, data, options)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              delete togglingReactions[reaction.id];
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this._removeActivityFromState = function (activityId) {
      return _this.setState(function (_a) {
        var activities = _a.activities,
            activityOrder = _a.activityOrder,
            activityIdToPath = _a.activityIdToPath,
            activityIdToPaths = _a.activityIdToPaths,
            reactionIdToPaths = _a.reactionIdToPaths;

        var path = _this.getActivityPath(activityId);

        var outerId = activityId;

        if (path.length > 1) {
          // It's an aggregated group we should update the paths of everything in
          // the list
          var groupArrayPath = path.slice(0, -1);
          activityIdToPath = _this.removeFoundActivityIdPath(activities.getIn(groupArrayPath).toJS(), activityIdToPath, groupArrayPath);
          activityIdToPaths = _this.removeFoundActivityIdPaths(activities.getIn(groupArrayPath).toJS(), activityIdToPaths, groupArrayPath);
          reactionIdToPaths = _this.removeFoundReactionIdPaths(activities.getIn(groupArrayPath).toJS(), reactionIdToPaths, groupArrayPath);
        } else {
          // Otherwise remove all things inside this activity from the path
          // objects
          activityIdToPaths = _this.removeFoundActivityIdPaths(activities.get(activityId).toJS(), activityIdToPaths, [activityId]);
          reactionIdToPaths = _this.removeFoundReactionIdPaths(activities.get(activityId).toJS(), reactionIdToPaths, [activityId]);
        }

        activities = activities.removeIn(path);

        if (path.length > 1) {
          var groupArrayPath = path.slice(0, -1);

          if (activities.getIn(groupArrayPath).size === 0) {
            outerId = path[0]; //
          } else {
            outerId = null;
          }

          activityIdToPath = _this.addFoundActivityIdPath(activities.getIn(groupArrayPath).toJS(), activityIdToPath, groupArrayPath);
          activityIdToPaths = _this.addFoundActivityIdPaths(activities.getIn(groupArrayPath).toJS(), activityIdToPaths, groupArrayPath);
          reactionIdToPaths = _this.addFoundReactionIdPaths(activities.getIn(groupArrayPath).toJS(), reactionIdToPaths, groupArrayPath);
        }

        if (outerId != null) {
          activityOrder = activityOrder.filter(function (id) {
            return id !== outerId;
          });
        }

        return {
          activities: activities,
          activityOrder: activityOrder,
          activityIdToPaths: activityIdToPaths,
          reactionIdToPaths: reactionIdToPaths,
          activityIdToPath: activityIdToPath
        };
      });
    };

    this.onRemoveActivity = function (activityId) {
      return __awaiter(_this, void 0, void 0, function () {
        var e_9;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 5,, 6]);

              if (!this.props.doActivityDeleteRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doActivityDeleteRequest(activityId)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , this.feed().removeActivity(activityId)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [3
              /*break*/
              , 6];

            case 5:
              e_9 = _a.sent();
              this.props.errorHandler(e_9, 'delete-activity', {
                activityId: this.props.feedGroup,
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              return [2
              /*return*/
              , this._removeActivityFromState(activityId)];
          }
        });
      });
    };

    this.onMarkAsRead = function (group) {
      return _this._onMarkAs('read', group);
    };

    this.onMarkAsSeen = function (group) {
      return _this._onMarkAs('seen', group);
    };

    this._onMarkAs = function (type, group) {
      return __awaiter(_this, void 0, void 0, function () {
        var groupArray, markArg, e_10;

        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              markArg = group;

              if (group === true) {
                groupArray = this.state.activityOrder;
              } else if (Array.isArray(group)) {
                groupArray = group.map(function (g) {
                  return g.id;
                });
                markArg = groupArray;
              } else {
                markArg = group.id;
                groupArray = [group.id];
              }

              _b.label = 1;

            case 1:
              _b.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , this.doFeedRequest((_a = {
                limit: 1,
                id_lte: this.state.activityOrder[0]
              }, _a['mark_' + type] = markArg, _a))];

            case 2:
              _b.sent();

              return [3
              /*break*/
              , 4];

            case 3:
              e_10 = _b.sent();
              this.props.errorHandler(e_10, 'get-notification-counts', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [3
              /*break*/
              , 4];

            case 4:
              this.setState(function (prevState) {
                var e_11, _a, _b;

                var counterKey = 'un' + type;
                var activities = prevState.activities;
                var counter = prevState[counterKey];

                try {
                  for (var groupArray_1 = __values(groupArray), groupArray_1_1 = groupArray_1.next(); !groupArray_1_1.done; groupArray_1_1 = groupArray_1.next()) {
                    var groupId = groupArray_1_1.value;
                    var markerPath = [groupId, 'is_' + type];

                    if (activities.getIn(markerPath) !== false) {
                      continue;
                    }

                    activities = activities.setIn(markerPath, true);
                    counter--;
                  }
                } catch (e_11_1) {
                  e_11 = {
                    error: e_11_1
                  };
                } finally {
                  try {
                    if (groupArray_1_1 && !groupArray_1_1.done && (_a = groupArray_1["return"])) _a.call(groupArray_1);
                  } finally {
                    if (e_11) throw e_11.error;
                  }
                }

                return _b = {
                  activities: activities
                }, _b[counterKey] = counter, _b;
              });
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.getOptions = function (extraOptions) {
      if (extraOptions === void 0) {
        extraOptions = {};
      }

      var propOpts = __assign({}, _this.props.options);

      var id_gt = extraOptions.id_gt,
          id_gte = extraOptions.id_gte,
          id_lt = extraOptions.id_lt,
          id_lte = extraOptions.id_lte,
          offset = extraOptions.offset;

      if (id_gt || id_gte || id_lt || id_lte || offset != null) {
        delete propOpts.id_gt;
        delete propOpts.id_gte;
        delete propOpts.id_lt;
        delete propOpts.id_lte;
        delete propOpts.offset;
        delete propOpts.refresh;
      }

      return __assign(__assign({
        withReactionCounts: true,
        withOwnReactions: true,
        limit: 10
      }, propOpts), extraOptions);
    };

    this.doFeedRequest = function (options) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.props.doFeedRequest) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.props.doFeedRequest(this.props.client, this.props.feedGroup, this.props.userId, options)];

            case 1:
              return [2
              /*return*/
              , _a.sent()];

            case 2:
              return [4
              /*yield*/
              , this.feed().get(options)];

            case 3:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };

    this.feed = function () {
      return _this.props.client.feed(_this.props.feedGroup, _this.props.userId);
    };

    this.responseToActivityMap = function (response) {
      return immutable.fromJS(response.results.reduce(function (map, a) {
        map[a.id] = a;
        return map;
      }, {}));
    };

    this.responseToActivityIdToPath = function (response) {
      var e_12, _a;

      if (response.results.length === 0 || response.results[0].activities === undefined) {
        return {};
      }

      var map = {};

      var _loop_1 = function _loop_1(group) {
        group.activities.forEach(function (act, i) {
          map[act.id] = [group.id, 'activities', i];
        });
      };

      try {
        for (var _b = __values(response.results), _c = _b.next(); !_c.done; _c = _b.next()) {
          var group = _c.value;

          _loop_1(group);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_12) throw e_12.error;
        }
      }

      return map;
    };

    this.responseToActivityIdToPaths = function (response, previous) {
      var e_13, _a;

      if (previous === void 0) {
        previous = {};
      }

      var map = previous;
      var currentPath = [];

      function addFoundActivities(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundActivities(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.actor && obj.verb && obj.object) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            map[obj.id].push(__spread(currentPath));
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundActivities(obj[k]);
            currentPath.pop();
          }
        }
      }

      try {
        for (var _b = __values(response.results), _c = _b.next(); !_c.done; _c = _b.next()) {
          var a = _c.value;
          currentPath.push(a.id);
          addFoundActivities(a);
          currentPath.pop();
        }
      } catch (e_13_1) {
        e_13 = {
          error: e_13_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_13) throw e_13.error;
        }
      }

      return map;
    };

    this.feedResponseToReactionIdToPaths = function (response, previous) {
      var e_14, _a;

      if (previous === void 0) {
        previous = {};
      }

      var map = previous;
      var currentPath = [];

      function addFoundReactions(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundReactions(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.kind && obj.data) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            map[obj.id].push(__spread(currentPath));
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundReactions(obj[k]);
            currentPath.pop();
          }
        }
      }

      try {
        for (var _b = __values(response.results), _c = _b.next(); !_c.done; _c = _b.next()) {
          var a = _c.value;
          currentPath.push(a.id);
          addFoundReactions(a);
          currentPath.pop();
        }
      } catch (e_14_1) {
        e_14 = {
          error: e_14_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_14) throw e_14.error;
        }
      }

      return map;
    };

    this.reactionResponseToReactionIdToPaths = function (response, previous, basePath, oldLength) {
      var e_15, _a;

      var map = previous;

      var currentPath = __spread(basePath);

      function addFoundReactions(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundReactions(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.kind && obj.data) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            map[obj.id].push(__spread(currentPath));
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundReactions(obj[k]);
            currentPath.pop();
          }
        }
      }

      try {
        for (var _b = __values(response.results), _c = _b.next(); !_c.done; _c = _b.next()) {
          var a = _c.value;
          currentPath.push(oldLength);
          addFoundReactions(a);
          currentPath.pop();
          oldLength++;
        }
      } catch (e_15_1) {
        e_15 = {
          error: e_15_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_15) throw e_15.error;
        }
      }

      return map;
    };

    this.removeFoundReactionIdPaths = function (data, previous, basePath) {
      var map = previous;

      var currentPath = __spread(basePath);

      function removeFoundReactions(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            removeFoundReactions(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.kind && obj.data) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            _remove(map[obj.id], function (path) {
              return _isEqual(path, currentPath);
            });
          }

          for (var k in obj) {
            currentPath.push(k);
            removeFoundReactions(obj[k]);
            currentPath.pop();
          }
        }
      }

      removeFoundReactions(data);
      return map;
    };

    this.removeFoundActivityIdPaths = function (data, previous, basePath) {
      var map = previous;

      var currentPath = __spread(basePath);

      function addFoundActivities(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundActivities(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.actor && obj.verb && obj.object) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            _remove(map[obj.id], function (path) {
              return _isEqual(path, currentPath);
            });
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundActivities(obj[k]);
            currentPath.pop();
          }
        }
      }

      addFoundActivities(data);
      return map;
    };

    this.removeFoundActivityIdPath = function (data, previous, basePath) {
      var map = previous;

      var currentPath = __spread(basePath);

      data.forEach(function (obj, i) {
        currentPath.push(i);

        if (_isEqual(map[obj.id], currentPath)) {
          delete map[obj.id];
        }

        currentPath.pop();
      });
      return map;
    };

    this.addFoundReactionIdPaths = function (data, previous, basePath) {
      var map = previous;

      var currentPath = __spread(basePath);

      function addFoundReactions(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundReactions(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.kind && obj.data) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            map[obj.id].push(__spread(currentPath));
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundReactions(obj[k]);
            currentPath.pop();
          }
        }
      }

      addFoundReactions(data);
      return map;
    };

    this.addFoundActivityIdPaths = function (data, previous, basePath) {
      var map = previous;

      var currentPath = __spread(basePath);

      function addFoundActivities(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(function (v, i) {
            currentPath.push(i);
            addFoundActivities(v);
            currentPath.pop();
          });
        } else if (_isPlainObject(obj)) {
          if (obj.id && obj.actor && obj.verb && obj.object) {
            if (!map[obj.id]) {
              map[obj.id] = [];
            }

            map[obj.id].push(__spread(currentPath));
          }

          for (var k in obj) {
            currentPath.push(k);
            addFoundActivities(obj[k]);
            currentPath.pop();
          }
        }
      }

      addFoundActivities(data);
      return map;
    };

    this.addFoundActivityIdPath = function (data, previous, basePath) {
      var map = previous;
      data.forEach(function (obj, i) {
        map[obj.id] = __spread(basePath, [i]);
      });
      return map;
    };

    this.responseToReactionActivities = function (response) {
      var e_16, _a;

      if (response.results.length === 0) {
        return {};
      }

      var map = {};

      function setReactionActivities(activities) {
        var e_17, _a;

        try {
          for (var activities_1 = __values(activities), activities_1_1 = activities_1.next(); !activities_1_1.done; activities_1_1 = activities_1.next()) {
            var a = activities_1_1.value;

            if (a.reaction && a.reaction.id) {
              map[a.reaction.id] = a.id;
            }
          }
        } catch (e_17_1) {
          e_17 = {
            error: e_17_1
          };
        } finally {
          try {
            if (activities_1_1 && !activities_1_1.done && (_a = activities_1["return"])) _a.call(activities_1);
          } finally {
            if (e_17) throw e_17.error;
          }
        }
      }

      if (response.results[0].activities === undefined) {
        setReactionActivities(response.results);
      } else {
        try {
          for (var _b = __values(response.results), _c = _b.next(); !_c.done; _c = _b.next()) {
            var group = _c.value;
            setReactionActivities(group.activities);
          }
        } catch (e_16_1) {
          e_16 = {
            error: e_16_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_16) throw e_16.error;
          }
        }
      }

      return map;
    };

    this.refresh = function (extraOptions) {
      return __awaiter(_this, void 0, void 0, function () {
        var options, response, e_18, newState;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              options = this.getOptions(extraOptions);
              return [4
              /*yield*/
              , this.setState({
                refreshing: true
              })];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 5]);

              return [4
              /*yield*/
              , this.doFeedRequest(options)];

            case 3:
              response = _a.sent();
              return [3
              /*break*/
              , 5];

            case 4:
              e_18 = _a.sent();
              this.setState({
                refreshing: false
              });
              this.props.errorHandler(e_18, 'get-feed', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 5:
              newState = __assign({
                activityOrder: response.results.map(function (a) {
                  return a.id;
                }),
                activities: this.responseToActivityMap(response),
                activityIdToPath: this.responseToActivityIdToPath(response),
                activityIdToPaths: this.responseToActivityIdToPaths(response),
                reactionIdToPaths: this.feedResponseToReactionIdToPaths(response),
                reactionActivities: this.responseToReactionActivities(response),
                refreshing: false,
                lastResponse: response,
                realtimeAdds: [],
                realtimeDeletes: []
              }, this.unseenUnreadFromResponse(response));

              if (options.mark_seen === true) {
                newState.unseen = 0;
              }

              if (options.mark_read === true) {
                newState.unread = 0;
              }

              return [2
              /*return*/
              , this.setState(newState)];
          }
        });
      });
    };

    this.subscribe = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var feed_1;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.props.notify) return [3
              /*break*/
              , 2];
              feed_1 = this.feed();
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                if (prevState.subscription) {
                  return {};
                }

                var subscription = feed_1.subscribe(function (data) {
                  _this.setState(function (prevState) {
                    var numActivityDiff = data["new"].length - data.deleted.length;
                    return {
                      realtimeAdds: prevState.realtimeAdds.concat(data["new"]),
                      realtimeDeletes: prevState.realtimeDeletes.concat(data.deleted),
                      unread: prevState.unread + numActivityDiff,
                      unseen: prevState.unseen + numActivityDiff
                    };
                  });
                });
                subscription.then(function () {
                  console.log("now listening to changes in realtime for " + _this.props.feedGroup);
                }, function (err) {
                  console.error(err);
                });
                return {
                  subscription: subscription
                };
              })];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.unsubscribe = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var subscription, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              subscription = this.state.subscription;

              if (!subscription) {
                return [2
                /*return*/
                ];
              }

              return [4
              /*yield*/
              , subscription];

            case 1:
              _a.sent();

              if (!(this.registeredCallbacks.length === 0)) return [3
              /*break*/
              , 5];
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 5]);

              return [4
              /*yield*/
              , subscription.cancel()];

            case 3:
              _a.sent();

              console.log("stopped listening to changes in realtime for " + this.props.feedGroup);
              return [3
              /*break*/
              , 5];

            case 4:
              err_1 = _a.sent();
              console.error(err_1);
              return [3
              /*break*/
              , 5];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.hasNextPage = function () {
      var lastResponse = _this.state.lastResponse;
      return Boolean(lastResponse && lastResponse.next);
    };

    this.hasReverseNextPage = function () {
      var lastReverseResponse = _this.state.lastReverseResponse;
      return Boolean(lastReverseResponse && lastReverseResponse.next);
    };

    this.loadNextPage = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var lastResponse, cancel, nextURL, options, response, e_19;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              lastResponse = this.state.lastResponse;

              if (!lastResponse || !lastResponse.next) {
                return [2
                /*return*/
                ];
              }

              cancel = false;
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                if (prevState.refreshing) {
                  cancel = true;
                  return {};
                }

                return {
                  refreshing: true
                };
              })];

            case 1:
              _a.sent();

              if (cancel) {
                return [2
                /*return*/
                ];
              }

              nextURL = new URL(lastResponse.next, true);
              options = this.getOptions(nextURL.query);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 5]);

              return [4
              /*yield*/
              , this.doFeedRequest(options)];

            case 3:
              response = _a.sent();
              return [3
              /*break*/
              , 5];

            case 4:
              e_19 = _a.sent();
              this.setState({
                refreshing: false
              });
              this.props.errorHandler(e_19, 'get-feed-next-page', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 5:
              return [2
              /*return*/
              , this.setState(function (prevState) {
                var activities = prevState.activities.merge(_this.responseToActivityMap(response));

                var activityIdToPath = __assign(__assign({}, prevState.activityIdToPath), _this.responseToActivityIdToPath(response));

                return {
                  activityOrder: prevState.activityOrder.concat(response.results.map(function (a) {
                    return a.id;
                  })),
                  activities: activities,
                  activityIdToPath: activityIdToPath,
                  activityIdToPaths: _this.responseToActivityIdToPaths(response, prevState.activityIdToPaths),
                  reactionIdToPaths: _this.feedResponseToReactionIdToPaths(response, prevState.reactionIdToPaths),
                  reactionActivities: __assign(__assign({}, prevState.reactionActivities), _this.responseToReactionActivities(response)),
                  refreshing: false,
                  lastResponse: response
                };
              })];
          }
        });
      });
    };

    this.loadReverseNextPage = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var lastReverseResponse, cancel, nextURL, options, response, e_20;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              lastReverseResponse = this.state.lastReverseResponse;

              if (!lastReverseResponse || !lastReverseResponse.next) {
                return [2
                /*return*/
                ];
              }

              cancel = false;
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                if (prevState.refreshing) {
                  cancel = true;
                  return {};
                }

                return {
                  refreshing: true
                };
              })];

            case 1:
              _a.sent();

              if (cancel) {
                return [2
                /*return*/
                ];
              }

              nextURL = new URL(lastReverseResponse.next, true);
              options = this.getOptions(nextURL.query);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 5]);

              return [4
              /*yield*/
              , this.doFeedRequest(options)];

            case 3:
              response = _a.sent();
              return [3
              /*break*/
              , 5];

            case 4:
              e_20 = _a.sent();
              this.setState({
                refreshing: false
              });
              this.props.errorHandler(e_20, 'get-feed-next-page', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 5:
              return [2
              /*return*/
              , this.setState(function (prevState) {
                var activities = prevState.activities.merge(_this.responseToActivityMap(response));

                var activityIdToPath = __assign(__assign({}, prevState.activityIdToPath), _this.responseToActivityIdToPath(response));

                return {
                  activityOrder: response.results.map(function (a) {
                    return a.id;
                  }).concat(prevState.activityOrder),
                  activities: activities,
                  activityIdToPath: activityIdToPath,
                  activityIdToPaths: _this.responseToActivityIdToPaths(response, prevState.activityIdToPaths),
                  reactionIdToPaths: _this.feedResponseToReactionIdToPaths(response, prevState.reactionIdToPaths),
                  reactionActivities: __assign(__assign({}, prevState.reactionActivities), _this.responseToReactionActivities(response)),
                  refreshing: false,
                  lastReverseResponse: response
                };
              })];
          }
        });
      });
    };

    this.loadNextReactions = function (activityId, kind, activityPath, oldestToNewest) {
      return __awaiter(_this, void 0, void 0, function () {
        var options, orderPrefix, latestReactionsPath, nextUrlPath, refreshingPath, reactions_extra, nextUrl, refreshing, response, e_21;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              options = {
                activity_id: activityId,
                kind: kind
              };
              orderPrefix = 'latest';

              if (oldestToNewest) {
                orderPrefix = 'oldest';
              }

              if (!activityPath) {
                activityPath = this.getActivityPath(activityId);
              }

              latestReactionsPath = __spread(activityPath, [orderPrefix + '_reactions', kind]);
              nextUrlPath = __spread(activityPath, [orderPrefix + '_reactions_extra', kind, 'next']);
              refreshingPath = __spread(activityPath, [orderPrefix + '_reactions_extra', kind, 'refreshing']);
              reactions_extra = this.state.activities.getIn(__spread(activityPath, [orderPrefix + '_reactions_extra']));
              nextUrl = 'https://api.stream-io-api.com/';

              if (reactions_extra) {
                nextUrl = reactions_extra.getIn([kind, 'next'], '');
              } else if (oldestToNewest) {
                // If it's the first request and oldest to newest make sure
                // order is reversed by this trick with a non existant id.
                options.id_gt = 'non-existant-' + generateRandomId();
              }

              refreshing = this.state.activities.getIn(refreshingPath, false);

              if (!nextUrl || refreshing) {
                return [2
                /*return*/
                ];
              }

              this.setState(function (prevState) {
                return {
                  activities: prevState.activities.setIn(refreshingPath, true)
                };
              });
              options = __assign(__assign({}, URL(nextUrl, true).query), options);
              _a.label = 1;

            case 1:
              _a.trys.push([1, 6,, 7]);

              if (!this.props.doReactionsFilterRequest) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.props.doReactionsFilterRequest(options)];

            case 2:
              response = _a.sent();
              return [3
              /*break*/
              , 5];

            case 3:
              return [4
              /*yield*/
              , this.props.client.reactions.filter(options)];

            case 4:
              response = _a.sent();
              _a.label = 5;

            case 5:
              return [3
              /*break*/
              , 7];

            case 6:
              e_21 = _a.sent();
              this.setState({
                refreshing: false
              });
              this.props.errorHandler(e_21, 'get-reactions-next-page', {
                options: options
              });
              return [2
              /*return*/
              ];

            case 7:
              this.setState(function (prevState) {
                return {
                  activities: prevState.activities.setIn(refreshingPath, false).setIn(nextUrlPath, response.next).updateIn(latestReactionsPath, function (v) {
                    if (v === void 0) {
                      v = immutable.List();
                    }

                    return v.concat(immutable.fromJS(response.results));
                  }),
                  reactionIdToPaths: _this.reactionResponseToReactionIdToPaths(response, prevState.reactionIdToPaths, latestReactionsPath, prevState.activities.getIn(latestReactionsPath, immutable.List()).toJS().length)
                };
              });
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.refreshUnreadUnseen = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var response, e_22;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 3]);

              return [4
              /*yield*/
              , this.doFeedRequest({
                limit: 0
              })];

            case 1:
              response = _a.sent();
              return [3
              /*break*/
              , 3];

            case 2:
              e_22 = _a.sent();
              this.props.errorHandler(e_22, 'get-notification-counts', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 3:
              return [2
              /*return*/
              , this.setState(this.unseenUnreadFromResponse(response))];
          }
        });
      });
    };

    this.props = props;
    var initialOptions = this.getOptions();
    this.registeredCallbacks = [];
    var previousUrl = '';

    if (initialOptions.id_gte) {
      previousUrl = "?id_lt=" + initialOptions.id_gte;
    } else if (initialOptions.id_gt) {
      previousUrl = "?id_lte=" + initialOptions.id_gt;
    } else if (initialOptions.id_lte) {
      previousUrl = "?id_gt=" + initialOptions.id_lte;
    } else if (initialOptions.id_lt) {
      previousUrl = "?id_gte=" + initialOptions.id_lt;
    }

    this.state.lastReverseResponse = {
      next: previousUrl
    };
  }

  FeedManager.prototype.register = function (callback) {
    this.registeredCallbacks.push(callback);
    this.subscribe();
  };

  FeedManager.prototype.unregister = function (callback) {
    this.registeredCallbacks.splice(this.registeredCallbacks.indexOf(callback), 1);
    this.unsubscribe();
  };

  FeedManager.prototype.triggerUpdate = function () {
    var e_23, _a;

    try {
      for (var _b = __values(this.registeredCallbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
        var callback = _c.value;
        callback();
      }
    } catch (e_23_1) {
      e_23 = {
        error: e_23_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_23) throw e_23.error;
      }
    }
  };

  FeedManager.prototype.unseenUnreadFromResponse = function (response) {
    var unseen = 0;
    var unread = 0;

    if (typeof response.unseen === 'number') {
      unseen = response.unseen;
    }

    if (typeof response.unread === 'number') {
      unread = response.unread;
    }

    return {
      unseen: unseen,
      unread: unread
    };
  };

  return FeedManager;
}();

var StreamContext = /*#__PURE__*/createContext({
  changedUserData: function changedUserData() {},
  sharedFeedManagers: {},
  client: null
});
var TranslationContext = /*#__PURE__*/createContext({
  t: function t(msg) {
    return msg;
  },
  tDateTimeParser: function tDateTimeParser(input) {
    return Dayjs(input);
  }
}); // It's necessary to pass the component's external props without
// a Streami18Ctx union (O = Original Props) so we can return that
// type directly here, due to the fact that generated ts declarations
// were not exporting optionals when using Omit<P, keyof Streami18Ctx>.

function withTranslationContext(OriginalComponent) {
  var ContextAwareComponent = function ContextAwareComponent(props) {
    return /*#__PURE__*/createElement(TranslationContext.Consumer, null, function (translationContext) {
      return OriginalComponent && /*#__PURE__*/createElement(OriginalComponent, _extends({}, translationContext, props));
    });
  };

  ContextAwareComponent.displayName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = ContextAwareComponent.displayName.replace('Base', '');
  return ContextAwareComponent;
}
/**
 * Manages the connection with Stream. Any components that should talk to
 * Stream should be a child of this component.
 */

var StreamApp =
/** @class */
function (_super) {
  __extends(StreamApp, _super);

  function StreamApp(props) {
    var _this = _super.call(this, props) || this;

    _this.getUserInfo = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 3]);

              return [4
              /*yield*/
              , this.state.user.getOrCreate(this.props.defaultUserData)];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 3];

            case 2:
              e_1 = _a.sent();
              this.props.errorHandler(e_1, 'get-user-info', {
                userId: this.state.client.userId
              });
              return [2
              /*return*/
              ];

            case 3:
              this.state.changedUserData();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = StreamApp.initClientState(props, {
      changedUserData: function changedUserData() {
        _this.setState({
          userData: _this.state.userData
        }); // was user.data

      },
      t: null,
      tDateTimeParser: null
    });
    return _this;
  }

  StreamApp.prototype.componentDidUpdate = function (prevProps) {
    if (this.props.apiKey !== prevProps.apiKey || this.props.token !== prevProps.token || this.props.appId !== prevProps.appId) {
      this.getUserInfo();
    }
  };

  StreamApp.prototype.componentDidMount = function () {
    return __awaiter(this, void 0, void 0, function () {
      var i18nInstance, streami18n, _a, t, tDateTimeParser;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            this.getUserInfo();
            i18nInstance = this.props.i18nInstance;

            if (i18nInstance && i18nInstance instanceof Streami18n) {
              streami18n = i18nInstance;
            } else {
              streami18n = new Streami18n({
                language: 'en'
              });
            }

            streami18n.registerSetLanguageCallback(function (t) {
              _this.setState({
                t: t
              });
            });
            return [4
            /*yield*/
            , streami18n.getTranslators()];

          case 1:
            _a = _b.sent(), t = _a.t, tDateTimeParser = _a.tDateTimeParser;
            this.setState({
              t: t,
              tDateTimeParser: tDateTimeParser
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  StreamApp.getDerivedStateFromProps = function (props, state) {
    if (state.client.apiKey !== props.apiKey || state.client.userToken !== props.token || state.client.appId !== props.appId) {
      return StreamApp.initClientState(props, state);
    }

    return null;
  };

  StreamApp.prototype.render = function () {
    if (!this.state.t) return null;

    var _a = this.state,
        t = _a.t,
        tDateTimeParser = _a.tDateTimeParser,
        streamContextValue = __rest(_a, ["t", "tDateTimeParser"]);

    return /*#__PURE__*/createElement(StreamContext.Provider, {
      value: streamContextValue
    }, /*#__PURE__*/createElement(TranslationContext.Provider, {
      value: {
        t: t,
        tDateTimeParser: tDateTimeParser
      }
    }, /*#__PURE__*/createElement(Fragment, null, this.props.children || /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
      style: {
        width: 100 + '%',
        height: 100 + '%',
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: '#008AFF',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
      }
    }, /*#__PURE__*/createElement("h3", null, "You are connected to:"), /*#__PURE__*/createElement("svg", {
      width: "117",
      height: "21",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/createElement("path", {
      className: "stream",
      d: "M48.812 16.9c.168-.15.317-.317.448-.504.13-.187.196-.401.196-.644 0-.299-.107-.55-.322-.756a2.794 2.794 0 0 0-.784-.518 4.892 4.892 0 0 0-.966-.322c-.336-.075-.616-.14-.84-.196a13.04 13.04 0 0 1-1.736-.546 5.849 5.849 0 0 1-1.414-.784 3.53 3.53 0 0 1-.952-1.092c-.233-.42-.35-.92-.35-1.498 0-.541.13-1.05.392-1.526a4.35 4.35 0 0 1 1.05-1.26 5.156 5.156 0 0 1 1.54-.868 5.387 5.387 0 0 1 1.862-.322c.579 0 1.13.084 1.652.252.523.168.994.397 1.414.686.42.29.775.64 1.064 1.05.29.41.48.868.574 1.372l-2.436.588a2.036 2.036 0 0 0-.728-1.12c-.373-.299-.887-.448-1.54-.448a2.69 2.69 0 0 0-.7.098 2.41 2.41 0 0 0-.672.294c-.205.13-.378.29-.518.476-.14.187-.21.401-.21.644 0 .261.08.485.238.672.159.187.35.34.574.462.224.121.467.22.728.294.261.075.504.14.728.196.99.243 1.81.504 2.464.784.653.28 1.176.588 1.568.924.392.336.667.705.826 1.106.159.401.238.854.238 1.358a3.6 3.6 0 0 1-.406 1.68 4.22 4.22 0 0 1-1.12 1.358 5.304 5.304 0 0 1-1.708.896 6.912 6.912 0 0 1-2.142.322c-1.157 0-2.189-.285-3.094-.854-.905-.57-1.517-1.33-1.834-2.282l2.296-1.036c.299.653.681 1.097 1.148 1.33.467.233.999.35 1.596.35.747 0 1.372-.205 1.876-.616zm12.276 2.772a9.115 9.115 0 0 1-2.268.476c-.747.056-1.419-.051-2.016-.322-.597-.27-1.083-.747-1.456-1.428-.373-.681-.56-1.638-.56-2.87V9.313h-2.226V6.356h.609c.727 0 1.376-.177 1.834-.916.194-.313.22-.633.243-1.502V2.913h2.332v3.443h2.749v2.957h-2.75l-.075 6.635c0 .448.051.803.154 1.064.103.261.275.457.518.588.243.13.56.196.952.196.392 0 .868-.037 1.428-.112l.532 1.988zM69.676 8.78l-.392-.168a5.38 5.38 0 0 0-.392-.112 1.957 1.957 0 0 0-.476-.056c-.541 0-1.045.089-1.512.266a3.849 3.849 0 0 0-1.204.714 3.372 3.372 0 0 0-.798 1.05 2.866 2.866 0 0 0-.294 1.274L64.58 20h-2.716V6.288h2.156l.56 1.484a4.134 4.134 0 0 1 1.47-1.302c.607-.327 1.367-.49 2.282-.49.597 0 1.279.084 2.044.252l-.7 2.548zm7.048 11.256c-.97 0-1.88-.182-2.73-.546a7.032 7.032 0 0 1-2.226-1.498 6.99 6.99 0 0 1-1.498-2.24 6.957 6.957 0 0 1-.546-2.744c0-.97.173-1.885.518-2.744a7.226 7.226 0 0 1 1.4-2.24A6.526 6.526 0 0 1 73.7 6.526a5.91 5.91 0 0 1 2.52-.546c.915 0 1.76.159 2.534.476A5.203 5.203 0 0 1 80.77 7.94c.57.672 1.013 1.526 1.33 2.562.317 1.036.476 2.273.476 3.71h-9.968c.13.485.336.938.616 1.358.28.42.611.784.994 1.092.383.308.812.546 1.288.714.476.168.975.252 1.498.252.71 0 1.367-.13 1.974-.392a4.925 4.925 0 0 0 1.554-1.036l1.68 1.68c-.653.653-1.451 1.176-2.394 1.568-.943.392-1.974.588-3.094.588zM76.22 8.444c-.43 0-.835.084-1.218.252a3.89 3.89 0 0 0-1.064.7 4.32 4.32 0 0 0-.84 1.064c-.233.41-.406.859-.518 1.344h7.084a4.331 4.331 0 0 0-.308-1.288 3.311 3.311 0 0 0-1.75-1.806c-.401-.177-.863-.266-1.386-.266zm20.9-2.156V20h-2.296l-.42-1.84a4.424 4.424 0 0 1-1.792 1.4 5.49 5.49 0 0 1-2.212.476 6.326 6.326 0 0 1-2.618-.546 6.712 6.712 0 0 1-2.128-1.498 7.162 7.162 0 0 1-1.442-2.24 7.116 7.116 0 0 1-.532-2.744c0-.97.177-1.885.532-2.744a7.162 7.162 0 0 1 1.442-2.24 6.712 6.712 0 0 1 2.128-1.498A6.326 6.326 0 0 1 90.4 5.98c.747 0 1.465.145 2.156.434.69.29 1.307.742 1.848 1.358l.42-1.484h2.296zm-6.72 11.34c.541 0 1.055-.121 1.54-.364a3.94 3.94 0 0 0 1.26-.994c.355-.42.635-.91.84-1.47.205-.56.308-1.157.308-1.792s-.103-1.232-.308-1.792a4.834 4.834 0 0 0-.84-1.47 3.94 3.94 0 0 0-1.26-.994 3.398 3.398 0 0 0-1.54-.364c-.541 0-1.055.121-1.54.364a3.94 3.94 0 0 0-1.26.994c-.355.42-.635.91-.84 1.47a5.164 5.164 0 0 0-.308 1.792c0 .635.103 1.232.308 1.792.205.56.485 1.05.84 1.47.355.42.775.751 1.26.994s.999.364 1.54.364zM101.808 20h-2.716V6.288h2.156l.56 1.148a5.135 5.135 0 0 1 1.204-1.022c.467-.29 1.036-.434 1.708-.434.261 0 .555.033.882.098.327.065.663.177 1.008.336a4.3 4.3 0 0 1 .994.644c.317.27.588.62.812 1.05.317-.579.798-1.078 1.442-1.498.644-.42 1.33-.63 2.058-.63.485 0 .999.075 1.54.224.541.15 1.045.43 1.512.84.467.41.85.98 1.148 1.708.299.728.448 1.67.448 2.828V20h-2.548v-8.448c0-1.157-.238-1.965-.714-2.422-.476-.457-1.106-.686-1.89-.686-.597 0-1.12.252-1.568.756-.448.504-.672 1.297-.672 2.38V20h-2.548v-8.448c0-1.157-.238-1.965-.714-2.422-.476-.457-1.106-.686-1.89-.686-.56 0-1.05.215-1.47.644-.42.43-.667 1.101-.742 2.016V20z",
      fill: "#fff"
    }), /*#__PURE__*/createElement("path", {
      className: "stream-mark",
      d: "M26.15 6.428l12.802-.908a1 1 0 0 1 .883 1.581L30.88 19.576a1 1 0 0 1-.812.417H9.982a1 1 0 0 1-.811-.416L.19 7.102a1 1 0 0 1 .882-1.582l12.764.908L19.29.333a1 1 0 0 1 1.496.006l5.364 6.09zm2.68 11.587l-8.309-3.105v3.105h8.31zm-9.309 0V14.91l-8.309 3.105h8.31zm-.959-3.847l-8.489 3.17-6.246-8.682 14.735 5.512zm2.9 0l8.49 3.17 6.246-8.682-14.735 5.512zm-1.933-.724V2.994l-6.941 7.837 6.941 2.613zm.992 0V2.996l6.942 7.835-6.942 2.613zm-9.969-3.336l1.597-1.794-7.802-.56 6.205 2.354zm18.863 0l-1.597-1.794 7.803-.56-6.206 2.354z",
      fill: "#fff"
    }))))))));
  };

  StreamApp.defaultProps = {
    sharedFeeds: [{
      feedGroup: 'notification',
      notify: true,
      options: {
        mark_seen: true
      }
    }],
    defaultUserData: {
      name: 'Unknown'
    },
    errorHandler: handleError
  };

  StreamApp.Consumer = function StreamAppConsumer(props) {
    return /*#__PURE__*/createElement(StreamContext.Consumer, null, function (appCtx) {
      if (!props.children || !props.children.length) {
        return null;
      }

      if (!appCtx.client || !appCtx.user) {
        throw new Error('This component should be a child of a StreamApp component');
      }

      var Child = props.children;
      return Child(appCtx);
    });
  };

  StreamApp.initClientState = function (props, state) {
    var e_2, _a;

    var client = stream.connect(props.apiKey, props.token, props.appId.toString(), props.options || {});
    var analyticsClient;

    if (props.analyticsToken) {
      analyticsClient = new StreamAnalytics({
        apiKey: props.apiKey,
        token: props.analyticsToken
      });
      analyticsClient.setUser(client.userId);
    }

    var newState = __assign(__assign({}, state), {
      client: client,
      user: client.currentUser,
      userData: undefined,
      // TODO type issue: was client.currentUser.data - seems wrong?
      analyticsClient: analyticsClient,
      sharedFeedManagers: {},
      errorHandler: props.errorHandler,
      apiKey: props.apiKey,
      token: props.token,
      appId: props.appId
    });

    try {
      for (var _b = __values(props.sharedFeeds), _c = _b.next(); !_c.done; _c = _b.next()) {
        var feedProps = _c.value;
        var manager = new FeedManager(__assign(__assign({}, feedProps), newState));
        newState.sharedFeedManagers[feedProps.feedGroup] = manager;
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return newState;
  };

  return StreamApp;
}(Component);

var FeedContext = /*#__PURE__*/createContext({});

var Feed =
/** @class */
function (_super) {
  __extends(Feed, _super);

  function Feed() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // Used to avoid unmount-remount behaviour, which causes
    // unsubscribe-subscribe behaviour.


    _this._appCtxWrapperFunc = function (appCtx) {
      return /*#__PURE__*/createElement(FeedInner, _extends({}, _this.props, appCtx));
    };

    return _this;
  }

  Feed.prototype.render = function () {
    return /*#__PURE__*/createElement(StreamApp.Consumer, null, this._appCtxWrapperFunc);
  };

  return Feed;
}(Component);

var FeedInner =
/** @class */
function (_super) {
  __extends(FeedInner, _super);

  function FeedInner(props) {
    var _this = _super.call(this, props) || this;

    _this.boundForceUpdate = function () {
      return _this.forceUpdate();
    };

    _this.getCtx = function () {
      var manager = _this.state.manager;
      var state = manager.state;
      return {
        getActivityPath: manager.getActivityPath,
        onToggleReaction: manager.onToggleReaction,
        onAddReaction: manager.onAddReaction,
        onRemoveReaction: manager.onRemoveReaction,
        onToggleChildReaction: manager.onToggleChildReaction,
        onAddChildReaction: manager.onAddChildReaction,
        onRemoveChildReaction: manager.onRemoveChildReaction,
        onRemoveActivity: manager.onRemoveActivity,
        onMarkAsRead: manager.onMarkAsRead,
        onMarkAsSeen: manager.onMarkAsSeen,
        hasDoneRequest: state.lastResponse != null,
        refresh: manager.refresh,
        refreshUnreadUnseen: manager.refreshUnreadUnseen,
        loadNextReactions: manager.loadNextReactions,
        loadNextPage: manager.loadNextPage,
        hasNextPage: manager.hasNextPage(),
        loadReverseNextPage: manager.loadReverseNextPage,
        hasReverseNextPage: manager.hasReverseNextPage(),
        feedGroup: _this.props.feedGroup,
        userId: _this.props.userId,
        activityOrder: state.activityOrder,
        activities: state.activities,
        realtimeAdds: state.realtimeAdds,
        realtimeDeletes: state.realtimeDeletes,
        refreshing: state.refreshing,
        unread: state.unread,
        unseen: state.unseen,
        feedManager: manager
      };
    };

    var feedId = props.feedGroup;
    var manager = props.sharedFeedManagers[feedId];

    if (!manager) {
      manager = new FeedManager(props);
    }

    _this.state = {
      manager: manager
    };
    return _this;
  }

  FeedInner.prototype.componentDidMount = function () {
    return this.state.manager.register(this.boundForceUpdate);
  };

  FeedInner.prototype.componentDidUpdate = function (prevProps) {
    var clientDifferent = this.props.client !== prevProps.client;
    var notifyDifferent = this.props.notify !== prevProps.notify;
    var feedDifferent = this.props.userId !== prevProps.userId || this.props.feedGroup !== prevProps.feedGroup;
    var optionsDifferent = !_isEqual(this.props.options, prevProps.options);
    var doFeedRequestDifferent = this.props.doFeedRequest !== prevProps.doFeedRequest;
  };

  FeedInner.prototype.componentWillUnmount = function () {
    return this.state.manager.unregister(this.boundForceUpdate);
  };

  FeedInner.prototype.render = function () {
    return /*#__PURE__*/createElement(FeedContext.Provider, {
      value: this.getCtx()
    }, this.props.children);
  };

  return FeedInner;
}(Component);

var Audio =
/** @class */
function (_super) {
  __extends(Audio, _super);

  function Audio(props) {
    var _this = _super.call(this, props) || this;

    _this.playAudio = function () {
      if (_this.audioRef.current !== null) {
        _this.audioRef.current.pause();

        _this.updateProgress();

        _this.setState({
          playing: true,
          updateProgress: setInterval(_this.updateProgress, 500)
        });

        _this.audioRef.current.play();
      }
    };

    _this.pauseAudio = function () {
      if (_this.audioRef.current !== null) {
        _this.audioRef.current.pause();
      }

      _this.setState({
        playing: false
      });

      window.clearInterval(_this.state.updateProgress);
    };

    _this.updateProgress = function () {
      if (_this.audioRef.current !== null) {
        var position = _this.audioRef.current.currentTime;
        var duration = _this.audioRef.current.duration;
        var progress = 100 / duration * position;

        _this.setState({
          progress: progress
        });

        if (position === duration) {
          _this.pauseAudio();
        }
      }
    };

    _this._handleClose = function (e) {
      if (_this.props.handleClose) {
        _this.props.handleClose(e);
      }
    };

    _this.state = {
      open: false,
      playing: false,
      progress: 0,
      updateProgress: null
    };
    _this.audioRef = /*#__PURE__*/createRef();
    return _this;
  }

  Audio.prototype.componentWillUnmount = function () {
    window.clearInterval(this.state.updateProgress);
  };

  Audio.prototype.render = function () {
    var _this = this;

    var og = this.props.og;
    var svg = '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M465 5c5.53 0 10 4.47 10 10s-4.47 10-10 10-10-4.47-10-10 4.47-10 10-10zm3.59 5L465 13.59 461.41 10 460 11.41l3.59 3.59-3.59 3.59 1.41 1.41 3.59-3.59 3.59 3.59 1.41-1.41-3.59-3.59 3.59-3.59-1.41-1.41z" id="b"/><filter x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(-451 -1)" fill-rule="nonzero" fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#b"/></g></svg>';
    var audio = og.audios[0];
    var url = sanitizeURL(audio.secure_url || audio.audio);
    var image = ((og.images || [])[0] || {}).image;
    return /*#__PURE__*/createElement("div", {
      className: "raf-audio"
    }, /*#__PURE__*/createElement("div", {
      className: "raf-audio__wrapper"
    }, /*#__PURE__*/createElement("audio", {
      ref: this.audioRef
    }, /*#__PURE__*/createElement("source", {
      src: url,
      type: "audio/mp3"
    })), /*#__PURE__*/createElement("div", {
      className: "raf-audio__image"
    }, /*#__PURE__*/createElement("div", {
      className: "raf-audio__image--overlay"
    }, !this.state.playing ? /*#__PURE__*/createElement("div", {
      onClick: function onClick() {
        return _this.playAudio();
      },
      className: "raf-audio__image--button"
    }, /*#__PURE__*/createElement(FontAwesomeIcon, {
      icon: faPlayCircle
    })) : /*#__PURE__*/createElement("div", {
      onClick: function onClick() {
        return _this.pauseAudio();
      },
      className: "raf-audio__image--button"
    }, /*#__PURE__*/createElement(FontAwesomeIcon, {
      icon: faPauseCircle
    }))), /*#__PURE__*/createElement("img", {
      src: image,
      alt: "" + og.description
    })), /*#__PURE__*/createElement("div", {
      className: "raf-audio__content"
    }, /*#__PURE__*/createElement("span", {
      className: "raf-audio__content--title"
    }, /*#__PURE__*/createElement("strong", null, og.title)), /*#__PURE__*/createElement("span", {
      className: "raf-audio__content--subtitle"
    }, og.description), /*#__PURE__*/createElement("div", {
      className: "raf-audio__content--progress"
    }, /*#__PURE__*/createElement("div", {
      style: {
        width: this.state.progress + "%"
      }
    }))), this.props.handleClose ? /*#__PURE__*/createElement(IconButton, {
      onClick: function onClick(e) {
        return _this._handleClose(e);
      }
    }, /*#__PURE__*/createElement("div", {
      dangerouslySetInnerHTML: {
        __html: svg
      }
    })) : null));
  };

  return Audio;
}(Component);

var placeholder = "1519fc1dc6e473ee.png";

/**
 * Component is described here.
 *
 * @example ./examples/Card.md
 */

var Card =
/** @class */
function (_super) {
  __extends(Card, _super);

  function Card() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.trimUrl = function (url) {
      var trimmedUrl;

      if (url !== undefined || url !== null) {
        trimmedUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
      }

      return trimmedUrl;
    };

    _this._handleClose = function (e) {
      if (_this.props.handleClose) {
        _this.props.handleClose(e);
      }
    };

    return _this;
  }

  Card.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        alt = _a.alt,
        images = _a.images,
        handleClose = _a.handleClose,
        nolink = _a.nolink;
    var image = this.props.image;

    if (!image && images && images.length) {
      image = images[0].image;
    }

    var url = sanitizeURL(this.props.url);
    var svg = '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M465 5c5.53 0 10 4.47 10 10s-4.47 10-10 10-10-4.47-10-10 4.47-10 10-10zm3.59 5L465 13.59 461.41 10 460 11.41l3.59 3.59-3.59 3.59 1.41 1.41 3.59-3.59 3.59 3.59 1.41-1.41-3.59-3.59 3.59-3.59-1.41-1.41z" id="b"/><filter x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(-451 -1)" fill-rule="nonzero" fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#b"/></g></svg>';
    return /*#__PURE__*/React.createElement("a", {
      href: !nolink ? url : null,
      target: "blank",
      rel: "noopener",
      className: "raf-card " + (image !== undefined ? 'raf-card--with-image' : '')
    }, handleClose && image ? /*#__PURE__*/React.createElement(IconButton, {
      onClick: function onClick(e) {
        return _this._handleClose(e);
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: svg
      }
    })) : null, image !== undefined && /*#__PURE__*/React.createElement("div", {
      className: "raf-card__image"
    }, /*#__PURE__*/React.createElement("img", {
      src: image == null ? placeholder : image,
      alt: alt || this.props.title || this.props.description || ''
    })), /*#__PURE__*/React.createElement("div", {
      className: "raf-card__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "raf-card__content-left"
    }, /*#__PURE__*/React.createElement("p", {
      className: "raf-card__title"
    }, this.props.title), /*#__PURE__*/React.createElement("p", {
      className: "raf-card__url"
    }, this.trimUrl(url || '')), /*#__PURE__*/React.createElement("p", {
      className: "raf-card__description"
    }, this.props.description)), handleClose && image === undefined ? /*#__PURE__*/React.createElement("div", {
      className: "raf-card__content-right"
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: function onClick(e) {
        return _this._handleClose(e);
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: svg
      }
    }))) : null));
  };

  return Card;
}(React.Component);

/**
 * Component is described here.
 *
 * @example ./examples/Gallery.md
 */

var Gallery =
/** @class */
function (_super) {
  __extends(Gallery, _super);

  function Gallery(props) {
    var _this = _super.call(this, props) || this;

    _this.gotoPrevious = function () {
      _this.setState({
        currentImage: _this.state.currentImage - 1
      });
    };

    _this.gotoNext = function () {
      _this.setState({
        currentImage: _this.state.currentImage + 1
      });
    };

    _this.openLightbox = function (image) {
      _this.setState({
        lightboxIsOpen: true,
        currentImage: image
      });
    };

    _this.closeLightbox = function () {
      _this.setState({
        lightboxIsOpen: false,
        currentImage: 0
      });
    };

    _this.getImages = function (images) {
      return images.map(function (item) {
        return {
          src: item
        };
      });
    };

    _this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
    return _this;
  } //  TODO: Provide way to add alt tags.


  Gallery.prototype.render = function () {
    var _this = this;

    var images = this.props.images;
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
      className: "raf-gallery"
    }, images.slice(0, 5).map(function (image, i) {
      return /*#__PURE__*/createElement("div", {
        className: "img " + (i === 4 && images.length > 5 ? 'img--last' : ''),
        onClick: function onClick() {
          return _this.openLightbox(i);
        },
        key: "image-" + i
      }, /*#__PURE__*/createElement("img", {
        src: image,
        className: "raf-gallery__image ",
        alt: ""
      }), /*#__PURE__*/createElement(Fragment, null, i === 4 && images.length > 5 ? /*#__PURE__*/createElement("p", null, images.length - 4, " more") : null));
    }), /*#__PURE__*/createElement(Lightbox, {
      backdropClosesModal: true,
      images: this.getImages(images),
      isOpen: this.state.lightboxIsOpen,
      onClickPrev: this.gotoPrevious,
      onClickNext: this.gotoNext,
      onClose: this.closeLightbox,
      currentImage: this.state.currentImage
    })));
  };

  return Gallery;
}(Component);

/**
 *
 * @example ./examples/Avatar.md
 */

var Avatar =
/** @class */
function (_super) {
  __extends(Avatar, _super);

  function Avatar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Avatar.prototype.render = function () {
    var _a = this.props,
        size = _a.size,
        image = _a.image,
        alt = _a.alt,
        rounded = _a.rounded,
        circle = _a.circle;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      style: size ? {
        width: size + "px",
        height: size + "px"
      } : {},
      className: "raf-avatar " + (rounded ? 'raf-avatar--rounded' : '') + " " + (circle ? 'raf-avatar--circle' : ''),
      onClick: this.props.onClick,
      src: image ? image : placeholder,
      alt: alt || ''
    }));
  };

  return Avatar;
}(React.PureComponent);

/**
 * Component is described here.
 *
 * @example ./examples/UserBar.md
 */

var UserBar =
/** @class */
function (_super) {
  __extends(UserBar, _super);

  function UserBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  UserBar.prototype.render = function () {
    var tDateTimeParser = this.props.tDateTimeParser;
    var time = this.props.time;

    if (time === undefined && this.props.timestamp != null) {
      time = humanizeTimestamp(this.props.timestamp, tDateTimeParser);
    }

    var timestamp = (this.props.timestamp || '').toString();
    return /*#__PURE__*/createElement("div", {
      className: "raf-user-bar"
    }, this.props.avatar ? /*#__PURE__*/createElement(Avatar, {
      onClick: this.props.onClickUser,
      size: 50,
      circle: true,
      image: this.props.avatar
    }) : null, /*#__PURE__*/createElement("div", {
      className: "raf-user-bar__details"
    }, /*#__PURE__*/createElement("p", {
      className: "raf-user-bar__username",
      onClick: this.props.onClickUser
    }, this.props.username), this.props.AfterUsername, this.props.icon !== undefined ? /*#__PURE__*/createElement("img", {
      src: this.props.icon,
      alt: "icon"
    }) : null, this.props.subtitle ? /*#__PURE__*/createElement("p", {
      className: "raf-user-bar__subtitle"
    }, /*#__PURE__*/createElement("time", {
      dateTime: timestamp,
      title: timestamp
    }, this.props.subtitle)) : null), /*#__PURE__*/createElement(Fragment, null, smartRender(this.props.Right, {}, function () {
      return /*#__PURE__*/createElement("p", {
        className: "raf-user-bar__extra"
      }, /*#__PURE__*/createElement("time", {
        dateTime: timestamp,
        title: timestamp
      }, time));
    })));
  };

  return UserBar;
}(Component);

var UserBar$1 = withTranslationContext(UserBar);

/**
 * Component for rendering an Youtube or Vimeo embedded player
 * @example ./examples/Video.md
 */

var Video =
/** @class */
function (_super) {
  __extends(Video, _super);

  function Video() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._handleClose = function (e) {
      if (_this.props.handleClose) {
        _this.props.handleClose(e);
      }
    };

    return _this;
  }

  Video.prototype.render = function () {
    var e_1, _a;

    var _this = this;

    var _b = this.props.og,
        videos = _b.videos,
        _c = _b.images,
        images = _c === void 0 ? [] : _c;
    var video = {};
    var svg = '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M465 5c5.53 0 10 4.47 10 10s-4.47 10-10 10-10-4.47-10-10 4.47-10 10-10zm3.59 5L465 13.59 461.41 10 460 11.41l3.59 3.59-3.59 3.59 1.41 1.41 3.59-3.59 3.59 3.59 1.41-1.41-3.59-3.59 3.59-3.59-1.41-1.41z" id="b"/><filter x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(-451 -1)" fill-rule="nonzero" fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#b"/></g></svg>';
    var CloseButton = Boolean(this.props.handleClose) && /*#__PURE__*/React.createElement(IconButton, {
      onClick: function onClick(e) {
        return _this._handleClose(e);
      }
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: svg
      }
    }));

    for (var i = 0; i < videos.length; i++) {
      if (videos[i].type === 'text/html' || videos[i].type === 'video/mp4') {
        video = videos[i];
        break;
      }
    }

    var url = sanitizeURL(video.secure_url || video.video);

    if (video.type === 'text/html') {
      return /*#__PURE__*/React.createElement("div", {
        className: "raf-video__frame"
      }, CloseButton, /*#__PURE__*/React.createElement("iframe", {
        title: 'embedded player',
        id: "ytplayer",
        itemType: video.type // TODO was type=, is this right?
        ,
        width: video.width,
        height: video.height,
        src: url,
        frameBorder: "0"
      }));
    } else {
      var videoProps = {
        controls: true,
        // Try fetching length of video etc
        preload: 'metadata',
        poster: '',
        autoPlay: false,
        muted: false,
        loop: false,
        playsInline: false,
        'webkit-playsinline': ''
      };

      if (images[0]) {
        if (images[0].secure_url) videoProps.poster = images[0].secure_url;else if (images[0].image) videoProps.poster = images[0].image;
      }

      var parsedUrl = new URL(url);

      try {
        for (var _d = __values(this.props.urlsThatAreGifs), _e = _d.next(); !_e.done; _e = _d.next()) {
          var gifUrl = _e.value;

          if (gifUrl === parsedUrl.host) {
            videoProps = {
              // Load the video right away
              preload: 'auto',
              // Display it like it's a gif
              autoPlay: true,
              muted: true,
              loop: true,
              controls: false,
              // On mobile don't open video fullscreen
              playsInline: true,
              'webkit-playsinline': 'webkit-playsinline',
              poster: ''
            };
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "raf-video__video"
      }, /*#__PURE__*/React.createElement("video", _extends({
        className: "raf-video__video--video"
      }, videoProps), /*#__PURE__*/React.createElement("source", {
        src: url,
        type: video.type
      })), /*#__PURE__*/React.createElement("div", {
        className: "raf-video__video--content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "raf-video__video--title"
      }, this.props.og.title), /*#__PURE__*/React.createElement("div", {
        className: "raf-video__video--description"
      }, this.props.og.description), /*#__PURE__*/React.createElement("div", {
        className: "raf-video__video--link"
      }, /*#__PURE__*/React.createElement("a", {
        href: sanitizeURL(this.props.og.url),
        target: "blank"
      }, this.props.og.site_name))), CloseButton);
    }
  };

  Video.defaultProps = {
    urlsThatAreGifs: ['i.giphy.com', 'i.imgur.com', 'media.giphy.com']
  };
  return Video;
}(React.Component);

/**
 * Component is described here.
 *
 * @example ./examples/Activity.md
 */

var Activity =
/** @class */
function (_super) {
  __extends(Activity, _super);

  function Activity() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.renderHeader = function () {
      var tDateTimeParser = _this.props.tDateTimeParser;
      var actor = userOrDefault(_this.props.activity.actor);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 16px'
        }
      }, /*#__PURE__*/React.createElement(UserBar$1, {
        username: actor.data.name,
        avatar: actor.data.profileImage,
        onClickUser: _this._getOnClickUser(),
        subtitle: _this.props.HeaderRight != null ? humanizeTimestamp(_this.props.activity.time, tDateTimeParser) : undefined,
        timestamp: _this.props.activity.time,
        icon: _this.props.icon,
        Right: _this.props.HeaderRight
      }));
    };

    _this.onClickUser = function () {
      var onClickUser = _this.props.onClickUser;

      if (onClickUser) {
        return onClickUser(userOrDefault(_this.props.activity.actor));
      }
    };

    _this.renderContent = function () {
      var text = _this.props.activity.text;

      if (text === undefined) {
        if (typeof _this.props.activity.object === 'string') {
          text = _this.props.activity.object;
        } else {
          text = '';
        }
      }

      text = text.trim();
      var _a = _this.props.activity.attachments,
          attachments = _a === void 0 ? {} : _a;
      return /*#__PURE__*/React.createElement("div", {
        className: "raf-activity__content"
      }, !!text && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 16px'
        }
      }, /*#__PURE__*/React.createElement("p", null, textRenderer(text, 'raf-activity', _this.props.onClickMention, _this.props.onClickHashtag))), _this.props.activity.verb === 'repost' && _this.props.activity.object instanceof Object && /*#__PURE__*/React.createElement(Card, _this.props.activity.object.data), attachments && attachments.og && Object.keys(attachments.og).length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 16px'
        }
      }, attachments.og.videos ? /*#__PURE__*/React.createElement(Video, {
        og: attachments.og
      }) : attachments.og.audios ? /*#__PURE__*/React.createElement(Audio, {
        og: attachments.og
      }) : /*#__PURE__*/React.createElement(Card, attachments.og)), Boolean(_this.props.activity.image) && _this.props.activity.image !== undefined ? /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 0'
        }
      }, /*#__PURE__*/React.createElement(Gallery, {
        images: [_this.props.activity.image] // resizeMethod="resize"

      })) : null, attachments.images && Boolean(attachments.images.length) && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 0'
        }
      }, /*#__PURE__*/React.createElement(Gallery, {
        images: attachments.images
      })), attachments.files && Boolean(attachments.files.length) && /*#__PURE__*/React.createElement("ol", {
        className: "raf-activity__attachments"
      }, attachments.files.map(function (_a, i) {
        var name = _a.name,
            url = _a.url,
            mimeType = _a.mimeType;
        return /*#__PURE__*/React.createElement("a", {
          href: sanitizeURL(url),
          download: true,
          key: i
        }, /*#__PURE__*/React.createElement("li", {
          className: "raf-activity__file"
        }, /*#__PURE__*/React.createElement(FileIcon, {
          mimeType: mimeType,
          filename: name
        }), " ", name));
      })));
    };

    _this.renderFooter = function () {
      return null;
    };

    return _this;
  }

  Activity.prototype._getOnClickUser = function () {
    return this.props.onClickUser ? this.onClickUser : undefined;
  };

  Activity.prototype.render = function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-activity"
    }, /*#__PURE__*/React.createElement(React.Fragment, null, smartRender(this.props.Header, {}, this.renderHeader), smartRender(this.props.Content, {}, this.renderContent), smartRender(this.props.Footer, {}, this.renderFooter)));
  };

  return Activity;
}(React.Component);

var Activity$1 = withTranslationContext(Activity);

var FeedPlaceholder =
/** @class */
function (_super) {
  __extends(FeedPlaceholder, _super);

  function FeedPlaceholder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FeedPlaceholder.prototype.render = function () {
    var _a = this.props,
        t = _a.t,
        text = _a.text;
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-feed-placeholder"
    }, /*#__PURE__*/React.createElement("p", null, text || t('No data to display...')));
  };

  return FeedPlaceholder;
}(React.Component);

var FeedPlaceholder$1 = withTranslationContext(FeedPlaceholder);

/**
 *
 * @example ./examples/Button.md
 */

var Button =
/** @class */
function (_super) {
  __extends(Button, _super);

  function Button() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Button.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        buttonStyle = _a.buttonStyle;
    return /*#__PURE__*/createElement("button", {
      className: "raf-button" + (buttonStyle ? ' raf-button--' + buttonStyle : ''),
      onClick: this.props.onClick,
      onKeyPress: this.props.onKeyPress,
      type: this.props.type,
      disabled: this.props.disabled
    }, !this.props.loading ? children : /*#__PURE__*/createElement(LoadingIndicator, {
      backgroundColor: "rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,0.4)"
    }));
  };

  Button.defaultProps = {
    buttonStyle: 'info',
    type: 'button',
    disabled: false,
    loading: false
  };
  return Button;
}(Component);

var LoadMoreButton =
/** @class */
function (_super) {
  __extends(LoadMoreButton, _super);

  function LoadMoreButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LoadMoreButton.prototype.render = function () {
    var t = this.props.t;
    return /*#__PURE__*/createElement("div", {
      className: "raf-load-more-button"
    }, /*#__PURE__*/createElement(Button, {
      onClick: this.props.onClick,
      buttonStyle: "info",
      disabled: this.props.refreshing,
      loading: this.props.refreshing
    }, this.props.children ? this.props.children : t('Load more')));
  };

  return LoadMoreButton;
}(Component);

var LoadMoreButton$1 = withTranslationContext(LoadMoreButton);

var LoadMorePaginator =
/** @class */
function (_super) {
  __extends(LoadMorePaginator, _super);

  function LoadMorePaginator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LoadMorePaginator.prototype.render = function () {
    return /*#__PURE__*/createElement(Fragment, null, !this.props.reverse && this.props.children, this.props.hasNextPage ? smartRender(this.props.LoadMoreButton, {
      refreshing: this.props.refreshing,
      onClick: this.props.loadNextPage
    }) : null, this.props.reverse && this.props.children);
  };

  LoadMorePaginator.defaultProps = {
    LoadMoreButton: LoadMoreButton$1
  };
  return LoadMorePaginator;
}(Component);

/**
 *
 * @example ./examples/Link.md
 */

var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Link.prototype.render = function () {
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("a", {
      href: this.props.to,
      className: "raf-link",
      onClick: this.props.onClick
    }, this.props.children));
  };

  return Link;
}(Component);

/**
 * Component is described here.
 *
 * @example ./examples/NewActivitiesNotification.md
 */

var NewActivitiesNotification =
/** @class */
function (_super) {
  __extends(NewActivitiesNotification, _super);

  function NewActivitiesNotification() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._labelFunction = function () {
      var _a = _this.props,
          adds = _a.adds,
          deletes = _a.deletes,
          labelSingle = _a.labelSingle,
          labelPlural = _a.labelPlural,
          labelFunction = _a.labelFunction,
          t = _a.t;
      var addCount = (adds || []).length;
      var deleteCount = (deletes || []).length;
      var count = addCount + deleteCount;

      if (labelFunction) {
        return labelFunction({
          count: count,
          addCount: addCount,
          deleteCount: deleteCount,
          labelSingle: labelSingle,
          labelPlural: labelPlural
        });
      }

      if (addCount === 0) {
        return null;
      }

      var singleNotificationText = '';
      var pluralNotificationText = '';

      if (labelSingle) {
        singleNotificationText = "You have 1 new " + labelSingle;
      } else {
        singleNotificationText = t('You have 1 new notification');
      }

      if (labelPlural) {
        pluralNotificationText = "You have " + addCount + " new " + labelPlural;
      } else {
        pluralNotificationText = t('You have {{ notificationCount }} new notifications', {
          notificationCount: addCount
        });
      }

      return addCount > 1 ? pluralNotificationText : singleNotificationText;
    };

    return _this;
  }

  NewActivitiesNotification.prototype.render = function () {
    var label = this._labelFunction();

    if (label === null) {
      return null;
    }

    return /*#__PURE__*/React.createElement("button", {
      className: "raf-new-activities-notification",
      type: "button",
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement(Link, null, label));
  };

  NewActivitiesNotification.defaultProps = {
    adds: [],
    deletes: []
  };
  return NewActivitiesNotification;
}(React.Component);

var NewActivitiesNotification$1 = withTranslationContext(NewActivitiesNotification);

/**
 * Renders a feed of activities, this component is a StreamApp consumer
 * and must always be a child of the `<StreamApp>` element
 * @example ./examples/FlatFeed.md
 */

var FlatFeed =
/** @class */
function (_super) {
  __extends(FlatFeed, _super);

  function FlatFeed() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FlatFeed.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/createElement(Feed, {
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      options: this.props.options,
      notify: this.props.notify,
      doFeedRequest: this.props.doFeedRequest,
      doActivityDeleteRequest: this.props.doActivityDeleteRequest,
      doReactionAddRequest: this.props.doReactionAddRequest,
      doReactionDeleteRequest: this.props.doReactionDeleteRequest,
      doChildReactionAddRequest: this.props.doChildReactionAddRequest,
      doChildReactionDeleteRequest: this.props.doChildReactionDeleteRequest,
      doReactionsFilterRequest: this.props.doReactionsFilterRequest
    }, /*#__PURE__*/createElement(FeedContext.Consumer, null, function (feedCtx) {
      return /*#__PURE__*/createElement(FlatFeedInner, _extends({}, _this.props, feedCtx));
    }));
  };

  FlatFeed.defaultProps = {
    feedGroup: 'timeline',
    notify: false,
    Activity: Activity$1,
    Notifier: function Notifier(props) {
      return /*#__PURE__*/createElement(NewActivitiesNotification$1, _extends({
        labelPlural: "activities",
        labelSingle: "activity"
      }, props));
    },
    Placeholder: FeedPlaceholder$1,
    Paginator: LoadMorePaginator,
    LoadingIndicator: LoadingIndicator
  };
  return FlatFeed;
}(Component);

var FlatFeedInner =
/** @class */
function (_super) {
  __extends(FlatFeedInner, _super);

  function FlatFeedInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.listRef = /*#__PURE__*/createRef();

    _this._refresh = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var ref;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.props.refresh(this.props.options)];

            case 1:
              _a.sent();

              ref = this.listRef;

              if (ref && ref.current && ref.current.scrollToOffset) {
                // TODO scrollToOffset? should this be scrollTop = 0?
                ref.current.scrollToOffset({
                  offset: 0
                });
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._renderWrappedActivity = function (_a) {
      var item = _a.item;
      return /*#__PURE__*/createElement(ImmutableItemWrapper, {
        renderItem: _this._renderActivity,
        item: item,
        feedGroup: _this.props.feedGroup,
        userId: _this.props.userId,
        key: item.get('id')
      });
    };

    _this._childProps = function () {
      return {
        onToggleReaction: _this.props.onToggleReaction,
        onAddReaction: _this.props.onAddReaction,
        onRemoveReaction: _this.props.onRemoveReaction,
        onToggleChildReaction: _this.props.onToggleChildReaction,
        onAddChildReaction: _this.props.onAddChildReaction,
        onRemoveChildReaction: _this.props.onRemoveChildReaction,
        onRemoveActivity: _this.props.onRemoveActivity,
        feedGroup: _this.props.feedGroup,
        userId: _this.props.userId
      };
    };

    _this._renderActivity = function (item) {
      var args = __assign({
        activity: item
      }, _this._childProps());

      return smartRender(_this.props.Activity, __assign({}, args));
    };

    return _this;
  }

  FlatFeedInner.prototype.componentDidMount = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this._refresh()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  FlatFeedInner.prototype.render = function () {
    var _this = this;

    var notifierProps = {
      adds: this.props.realtimeAdds,
      deletes: this.props.realtimeDeletes,
      onClick: this._refresh,
      labelFunction: undefined
    };
    var _a = this.props,
        loadNextPage = _a.loadNextPage,
        hasNextPage = _a.hasNextPage,
        refreshing = _a.refreshing,
        hasDoneRequest = _a.hasDoneRequest,
        loadReverseNextPage = _a.loadReverseNextPage,
        hasReverseNextPage = _a.hasReverseNextPage,
        t = _a.t;

    if (hasReverseNextPage) {
      notifierProps.onClick = loadReverseNextPage;

      notifierProps.labelFunction = function () {
        return t('Load activities');
      };
    }

    if (this.props.activities.size === 0 && this.props.hasDoneRequest) {
      return /*#__PURE__*/createElement(Fragment, null, smartRender(this.props.Notifier, notifierProps), smartRender(this.props.Placeholder));
    }

    if (refreshing && !hasDoneRequest) {
      return /*#__PURE__*/createElement("div", {
        className: "raf-loading-indicator"
      }, smartRender(this.props.LoadingIndicator, {}));
    }

    return /*#__PURE__*/createElement(Fragment, null, smartRender(this.props.Notifier, notifierProps), smartRender(this.props.Paginator, {
      loadNextPage: loadNextPage,
      hasNextPage: hasNextPage,
      refreshing: refreshing,
      children: this.props.activityOrder.map(function (id) {
        return _this._renderWrappedActivity({
          item: _this.props.activities.get(id)
        });
      })
    }));
  };

  return FlatFeedInner;
}(Component);

var ImmutableItemWrapper =
/** @class */
function (_super) {
  __extends(ImmutableItemWrapper, _super);

  function ImmutableItemWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ImmutableItemWrapper.prototype.render = function () {
    return this.props.renderItem(this.props.item.toJS());
  };

  return ImmutableItemWrapper;
}(PureComponent);

var FlatFeed$1 = withTranslationContext(FlatFeed);

/**
 * Component is described here.
 *
 * @example ./examples/AvatarGroup.md
 */

var AvatarGroup =
/** @class */
function (_super) {
  __extends(AvatarGroup, _super);

  function AvatarGroup() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onClickUser = function (e, user) {
      var onClickUser = _this.props.onClickUser;

      if (onClickUser) {
        e.stopPropagation();
        return onClickUser(userOrDefault(user));
      }
    };

    return _this;
  }

  AvatarGroup.prototype._getOnClickUser = function (user) {
    var _this = this;

    return this.props.onClickUser ? function (e) {
      return _this.onClickUser(e, user);
    } : undefined;
  };

  AvatarGroup.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "raf-avatar-group"
    }, this.props.users && this.props.users.slice(0, this.props.limit).map(function (user, i) {
      return /*#__PURE__*/React.createElement("div", {
        className: "raf-avatar-group__avatar",
        key: "avatar-" + i
      }, /*#__PURE__*/React.createElement(Avatar, {
        onClick: _this._getOnClickUser(user),
        image: user && user.data.profileImage,
        size: _this.props.avatarSize,
        circle: true
      }));
    }));
  };

  AvatarGroup.defaultProps = {
    avatarSize: 30,
    limit: 5
  };
  return AvatarGroup;
}(React.Component);

/**
 * Component is described here.
 *
 * @example ./examples/AttachedActivity.md
 */

var AttachedActivity =
/** @class */
function (_super) {
  __extends(AttachedActivity, _super);

  function AttachedActivity() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AttachedActivity.prototype.render = function () {
    var activity = this.props.activity;
    var images = activity.attachments !== undefined && activity.attachments.images !== undefined ? activity.attachments.images : [];
    var actor = userOrDefault(activity.actor);

    if (activity.verb === 'repost' || activity.verb === 'post' || activity.verb === 'comment') {
      return /*#__PURE__*/React.createElement("div", {
        className: "raf-attached-activity"
      }, images.length === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        className: "raf-attached-activity__author"
      }, /*#__PURE__*/React.createElement("strong", null, actor.data.name)), /*#__PURE__*/React.createElement("p", {
        className: "raf-attached-activity__content"
      }, activity.object)), images.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "raf-attached-activity__images"
      }, images.slice(0, 5).map(function (image, i) {
        return /*#__PURE__*/React.createElement(Thumbnail, {
          image: image,
          size: 50,
          key: "image-" + i
        });
      })));
    }

    return null;
  };

  return AttachedActivity;
}(React.Component);

/**
 * Simple wrapper for a small dropdown.
 *
 * @example ./examples/Dropdown.md
 */

var Dropdown =
/** @class */
function (_super) {
  __extends(Dropdown, _super);

  function Dropdown(props) {
    var _this = _super.call(this, props) || this;

    _this.hideMenu = function (e) {
      if (!_this.dropdownBox.current.contains(e.target)) {
        _this.setState({
          open: false
        }, function () {
          document.removeEventListener('click', _this.hideMenu);
        });
      }
    };

    _this.showMenu = function (e) {
      e.stopPropagation();

      _this.setState({
        open: true
      }, function () {
        document.addEventListener('click', _this.hideMenu);
      });
    };

    _this.showMenu = _this.showMenu.bind(_this);
    _this.hideMenu = _this.hideMenu.bind(_this);
    _this.dropdownBox = /*#__PURE__*/createRef();
    _this.state = {
      open: false
    };
    return _this;
  }

  Dropdown.prototype.componentWillUnmount = function () {
    document.removeEventListener('click', this.hideMenu);
  };

  Dropdown.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-dropdown"
    }, /*#__PURE__*/createElement(IconButton, {
      onClick: this.showMenu
    }, /*#__PURE__*/createElement("svg", {
      className: "raf-dropdown__button",
      width: "12",
      height: "8",
      viewBox: "0 0 12 8",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/createElement("path", {
      d: "M1.41 0L6 4.77 10.59 0 12 1.469l-6 6.25-6-6.25z",
      fill: "#A0B2B8",
      fillRule: "evenodd"
    }))), this.state.open && /*#__PURE__*/createElement("div", {
      className: "raf-dropdown__box",
      ref: this.dropdownBox
    }, this.props.children));
  };

  return Dropdown;
}(Component);

/**
 * Component is described here.
 *
 * @example ./examples/Notification.md
 */

var Notification =
/** @class */
function (_super) {
  __extends(Notification, _super);

  function Notification() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.getUsers = function (activities) {
      return activities.map(function (item) {
        return userOrDefault(item.actor);
      });
    };

    _this.onClickUser = function (e, actor) {
      var onClickUser = _this.props.onClickUser;

      if (onClickUser) {
        e.stopPropagation();
        return onClickUser(userOrDefault(actor));
      }
    };

    _this.onClickNotification = function (e) {
      var onClickNotification = _this.props.onClickNotification;

      if (onClickNotification) {
        e.stopPropagation();
        return onClickNotification(_this.props.activityGroup);
      }
    };

    return _this;
  }

  Notification.prototype._getOnClickUser = function (actor) {
    var _this = this;

    return this.props.onClickUser ? function (e) {
      return _this.onClickUser(e, actor);
    } : undefined;
  };

  Notification.prototype._getOnClickNotification = function () {
    return this.props.onClickNotification ? this.onClickNotification : undefined;
  };

  Notification.prototype.render = function () {
    var headerText, headerSubtext;
    var _a = this.props,
        activityGroup = _a.activityGroup,
        onMarkAsRead = _a.onMarkAsRead,
        t = _a.t,
        tDateTimeParser = _a.tDateTimeParser;
    var activities = activityGroup.activities;
    var latestActivity = activities[0];
    var lastActor = userOrDefault(latestActivity.actor);

    if (typeof latestActivity.object === 'string') {
      return null;
    }

    if (activities.length === 1) {
      switch (latestActivity.verb) {
        case 'like':
          headerText = t('{{ actorName }} liked your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'repost':
          headerText = t('{{ actorName }} reposted your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'follow':
          headerText = t('{{ actorName }} followed you', {
            actorName: lastActor.data.name
          });
          break;

        case 'comment':
          headerText = t('{{ actorName }} commented on your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        default:
          console.warn('No notification styling found for your verb, please create your own custom Notification group.');
      }
    } else if (activities.length > 1 && activities.length < 1 + 1 + 1) {
      switch (latestActivity.verb) {
        case 'like':
          headerText = t('{{ actorName }} and 1 other liked your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'repost':
          headerText = t('{{ actorName }} and 1 other reposted your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'follow':
          headerText = t('{{ actorName }} and 1 other followed you', {
            actorName: lastActor.data.name
          });
          break;

        case 'comment':
          headerText = t('{{ actorName }} and 1 other commented on your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        default:
          console.warn('No notification styling found for your verb, please create your own custom Notification group.');
      }
    } else {
      switch (latestActivity.verb) {
        case 'like':
          headerText = t('{{ actorName }} and {{ countOtherActors }} others liked your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'repost':
          headerText = t('{{ actorName }} and {{ countOtherActors }} others reposted your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        case 'follow':
          headerText = t('{{ actorName }} and {{ countOtherActors }} others followed you', {
            actorName: lastActor.data.name
          });
          break;

        case 'comment':
          headerText = t('{{ actorName }} and {{ countOtherActors }} others commented on your {{ activityVerb }}', {
            actorName: lastActor.data.name,
            activityVerb: latestActivity.object.verb
          });
          break;

        default:
          console.warn('No notification styling found for your verb, please create your own custom Notification group.');
      }
    }

    return /*#__PURE__*/React.createElement("div", {
      onClick: this._getOnClickNotification(),
      className: 'raf-notification' + (activityGroup.is_read ? ' raf-notification--read' : '')
    }, /*#__PURE__*/React.createElement(Avatar, {
      onClick: this._getOnClickUser(lastActor),
      image: lastActor.data.profileImage,
      circle: true,
      size: 30
    }), /*#__PURE__*/React.createElement("div", {
      className: "raf-notification__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "raf-notification__header"
    }, /*#__PURE__*/React.createElement("strong", null, headerText), " ", headerSubtext, !activityGroup.is_read && onMarkAsRead && /*#__PURE__*/React.createElement(Dropdown, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
      onClick: function onClick(e) {
        e.stopPropagation();
        onMarkAsRead(activityGroup);
      }
    }, "Mark\xA0as\xA0read")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, humanizeTimestamp(latestActivity.time, tDateTimeParser))), latestActivity.verb !== 'follow' ? /*#__PURE__*/React.createElement(AttachedActivity, {
      activity: latestActivity.object
    }) : null), /*#__PURE__*/React.createElement("div", {
      className: "raf-notification__extra"
    }, activities.length > 1 && latestActivity.verb === 'follow' ? /*#__PURE__*/React.createElement(AvatarGroup, {
      onClickUser: this.props.onClickUser,
      avatarSize: 30,
      users: this.getUsers(activities.slice(1, activities.length))
    }) : null));
  };

  return Notification;
}(React.Component);

var Notification$1 = withTranslationContext(Notification);

/**
 * Renders a notificationfeed, this component is a StreamApp consumer and must
 * always be a child of the `<StreamApp>` element.
 * @example ./examples/NotificationFeed.md
 */

var NotificationFeed =
/** @class */
function (_super) {
  __extends(NotificationFeed, _super);

  function NotificationFeed() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  NotificationFeed.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/createElement(Feed, {
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      options: makeDefaultOptions(this.props.options),
      notify: this.props.notify,
      doFeedRequest: this.props.doFeedRequest,
      doActivityDeleteRequest: this.props.doActivityDeleteRequest,
      doReactionAddRequest: this.props.doReactionAddRequest,
      doReactionDeleteRequest: this.props.doReactionDeleteRequest,
      doChildReactionAddRequest: this.props.doChildReactionAddRequest,
      doChildReactionDeleteRequest: this.props.doChildReactionDeleteRequest
    }, /*#__PURE__*/createElement(FeedContext.Consumer, null, function (feedCtx) {
      return /*#__PURE__*/createElement(NotificationFeedInner, _extends({}, _this.props, feedCtx));
    }));
  };

  NotificationFeed.defaultProps = {
    feedGroup: 'notification',
    Group: Notification$1,
    notify: false,
    Notifier: NewActivitiesNotification$1,
    Paginator: LoadMorePaginator,
    Placeholder: FeedPlaceholder$1
  };
  return NotificationFeed;
}(Component);

var makeDefaultOptions = function makeDefaultOptions(options) {
  var copy = __assign({}, options);

  if (copy.mark_seen === undefined) {
    copy.mark_seen = true;
  }

  return copy;
};

var NotificationFeedInner =
/** @class */
function (_super) {
  __extends(NotificationFeedInner, _super);

  function NotificationFeedInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.listRef = /*#__PURE__*/createRef();

    _this._refresh = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var ref;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.props.refresh(makeDefaultOptions(this.props.options))];

            case 1:
              _a.sent();

              ref = this.listRef;

              if (ref && ref.current && ref.current.scrollToOffset) {
                // TODO scrollToOffset? should this be scrollTop = 0?
                ref.current.scrollToOffset({
                  offset: 0
                });
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._renderWrappedGroup = function (_a) {
      var item = _a.item;
      return /*#__PURE__*/createElement(ImmutableItemWrapper$1, {
        renderItem: _this._renderGroup,
        item: item,
        feedGroup: _this.props.feedGroup,
        userId: _this.props.userId,
        key: item.get('id')
      });
    };

    _this._renderGroup = function (item) {
      var args = {
        activityGroup: item,
        feedGroup: _this.props.feedGroup,
        userId: _this.props.userId,
        onToggleReaction: _this.props.onToggleReaction,
        onAddReaction: _this.props.onAddReaction,
        onRemoveReaction: _this.props.onRemoveReaction,
        onToggleChildReaction: _this.props.onToggleChildReaction,
        onAddChildReaction: _this.props.onAddChildReaction,
        onRemoveChildReaction: _this.props.onRemoveChildReaction,
        onRemoveActivity: _this.props.onRemoveActivity,
        onMarkAsRead: _this.props.onMarkAsRead,
        onMarkAsSeen: _this.props.onMarkAsSeen
      };
      return smartRender(_this.props.Group, args);
    };

    return _this;
  }

  NotificationFeedInner.prototype.componentDidMount = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this._refresh()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NotificationFeedInner.prototype.componentWillUnmount = function () {
    this.props.activities.clear();
    this.props.activityOrder.splice(0, this.props.activityOrder.length);
  };

  NotificationFeedInner.prototype.render = function () {
    var _this = this;

    var notifierProps = {
      adds: this.props.realtimeAdds,
      deletes: this.props.realtimeDeletes,
      onClick: this._refresh
    };
    var _a = this.props,
        loadNextPage = _a.loadNextPage,
        hasNextPage = _a.hasNextPage,
        refreshing = _a.refreshing,
        hasDoneRequest = _a.hasDoneRequest;

    if (this.props.activities.size === 0 && hasDoneRequest) {
      return /*#__PURE__*/createElement(Fragment, null, smartRender(this.props.Notifier, notifierProps), smartRender(this.props.Placeholder));
    }

    if (refreshing && !hasDoneRequest) {
      return /*#__PURE__*/createElement("div", {
        style: {
          padding: 40,
          backgroundColor: 'rgb(247, 247, 247'
        }
      }, /*#__PURE__*/createElement(LoadingIndicator, null));
    }

    return /*#__PURE__*/createElement(Fragment, null, smartRender(this.props.Notifier, notifierProps), smartRender(this.props.Paginator, {
      loadNextPage: loadNextPage,
      hasNextPage: hasNextPage,
      refreshing: refreshing,
      children: this.props.activityOrder.map(function (id) {
        return _this._renderWrappedGroup({
          item: _this.props.activities.get(id)
        });
      })
    }));
  };

  return NotificationFeedInner;
}(Component);

var ImmutableItemWrapper$1 =
/** @class */
function (_super) {
  __extends(ImmutableItemWrapper, _super);

  function ImmutableItemWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ImmutableItemWrapper.prototype.render = function () {
    return this.props.renderItem(this.props.item.toJS());
  };

  return ImmutableItemWrapper;
}(PureComponent);

/**
 * Shows the detail of a single activity
 * @example ./examples/SinglePost.md
 */

var SinglePost =
/** @class */
function (_super) {
  __extends(SinglePost, _super);

  function SinglePost() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SinglePost.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlatFeed$1, {
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      options: __assign({
        withRecentReactions: true
      }, this.props.options),
      analyticsLocation: this.props.analyticsLocation,
      Activity: this.props.Activity,
      doFeedRequest: function doFeedRequest(client, feedGroup, userId, options) {
        return client.feed(feedGroup, userId).getActivityDetail(_this.props.activityId, options);
      },
      doActivityDeleteRequest: this.props.doActivityDeleteRequest,
      doReactionAddRequest: this.props.doReactionAddRequest,
      doReactionDeleteRequest: this.props.doReactionDeleteRequest,
      doChildReactionAddRequest: this.props.doChildReactionAddRequest,
      doChildReactionDeleteRequest: this.props.doChildReactionDeleteRequest,
      doReactionsFilterRequest: this.props.doReactionsFilterRequest
    }));
  };

  return SinglePost;
}(React.Component);

/**
 * Component is described here.
 *
 * @example ./examples/EmojiPicker.md
 */

var EmojiPicker =
/** @class */
function (_super) {
  __extends(EmojiPicker, _super);

  function EmojiPicker() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.emojiPicker = /*#__PURE__*/React.createRef();
    _this.state = {
      open: false
    };

    _this.hideMenu = function (e) {
      var current = _this.emojiPicker.current;

      if (current && !current.contains(e.target)) {
        _this.setState({
          open: false
        }, function () {
          document.removeEventListener('click', _this.hideMenu);
        });
      }
    };

    _this.showMenu = function (e) {
      e.preventDefault();

      _this.setState({
        open: true
      }, function () {
        document.addEventListener('click', _this.hideMenu);
      });
    };

    return _this;
  }

  EmojiPicker.prototype.componentWillUnmount = function () {
    document.removeEventListener('click', this.hideMenu);
  };

  EmojiPicker.prototype.render = function () {
    var t = this.props.t;
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-emoji-picker"
    }, ' ', this.state.open && /*#__PURE__*/React.createElement("div", {
      className: "raf-emoji-picker__container",
      ref: this.emojiPicker
    }, /*#__PURE__*/React.createElement(Picker, {
      emoji: "point_up",
      title: t('Pick your emoji'),
      onSelect: this.props.onSelect
    })), /*#__PURE__*/React.createElement("div", {
      role: "button",
      onClick: this.showMenu,
      className: "raf-emoji-picker__button"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 15.498c2.33 0 4.304-1.456 5.106-3.5H4.892c.802 2.044 2.777 3.5 5.107 3.5zm-3.5-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-3.5 9a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm-.006-18C4.467-.002 0 4.475 0 9.998s4.468 10 9.995 10c5.526 0 10.005-4.477 10.005-10s-4.479-10-10.005-10z",
      fill: "#A0B2B8",
      fillRule: "nonzero"
    }))));
  };

  return EmojiPicker;
}(React.Component);

var EmojiPicker$1 = withTranslationContext(EmojiPicker);

/**
 * Simple Components that renders a panel. To be combined with PanelHeader, PanelContent, PanelFooter. Used by the library to render the B2BActivity and StatusUpdateForm
 *
 * @example ./examples/Panel.md
 */

var Panel =
/** @class */
function (_super) {
  __extends(Panel, _super);

  function Panel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Panel.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-panel raf-panel--" + this.props.panelStyle
    }, this.props.children);
  };

  Panel.defaultProps = {
    panelStyle: 'rounded'
  };
  return Panel;
}(Component);

var PanelContent =
/** @class */
function (_super) {
  __extends(PanelContent, _super);

  function PanelContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PanelContent.prototype.render = function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-panel-content"
    }, this.props.children);
  };

  return PanelContent;
}(React.Component);

var PanelFooter =
/** @class */
function (_super) {
  __extends(PanelFooter, _super);

  function PanelFooter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PanelFooter.prototype.render = function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-panel-footer"
    }, this.props.children);
  };

  return PanelFooter;
}(React.Component);

var PanelHeading =
/** @class */
function (_super) {
  __extends(PanelHeading, _super);

  function PanelHeading() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PanelHeading.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-panel-header"
    }, this.props.children);
  };

  return PanelHeading;
}(Component);

var AutocompleteItem = function AutocompleteItem(_a) {
  var _b = _a.entity,
      id = _b.id,
      _native = _b["native"];
  return /*#__PURE__*/createElement("div", null, _native, " ", id);
};
/**
 * Component is described here.
 *
 * @example ./examples/Textarea.md
 */


var Textarea =
/** @class */
function (_super) {
  __extends(Textarea, _super);

  function Textarea() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Textarea.prototype.render = function () {
    var _a = this.props,
        innerRef = _a.innerRef,
        trigger = _a.trigger;
    return /*#__PURE__*/createElement(ReactTextareaAutocomplete, {
      loadingComponent: LoadingIndicator,
      trigger: __assign({
        ':': {
          dataProvider: function dataProvider(token) {
            var emojis = emojiIndex.search(token) || [];
            return emojis.slice(0, 10);
          },
          component: AutocompleteItem,
          output: function output(item) {
            return {
              key: item.id,
              text: item["native"],
              caretPosition: 'next'
            };
          }
        }
      }, trigger),
      innerRef: innerRef,
      rows: this.props.rows,
      maxLength: this.props.maxLength,
      className: "raf-textarea__textarea",
      containerClassName: "raf-textarea",
      dropdownClassName: "raf-emojisearch",
      listClassName: "raf-emojisearch__list",
      itemClassName: "raf-emojisearch__item",
      placeholder: this.props.placeholder,
      onChange: this.props.onChange,
      onSelect: this.props.onChange,
      onPaste: this.props.onPaste,
      value: this.props.value
    });
  };

  Textarea.defaultProps = {
    rows: 3,
    placeholder: 'Share your opinion',
    trigger: {}
  };
  return Textarea;
}(Component);

/**
 * Component is described here.
 *
 * @example ./examples/Title.md
 */

var Title =
/** @class */
function (_super) {
  __extends(Title, _super);

  function Title() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Title.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-title",
      style: {
        fontSize: this.props.size
      }
    }, this.props.children);
  };

  Title.defaultProps = {
    size: 18
  };
  return Title;
}(Component);

/**
 * Component is described here.
 *
 * @example ./examples/StatusUpdateForm.md
 */

var StatusUpdateForm =
/** @class */
function (_super) {
  __extends(StatusUpdateForm, _super);

  function StatusUpdateForm() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  StatusUpdateForm.prototype.render = function () {
    var _a = this.props,
        t = _a.t,
        Header = _a.Header;
    var HeaderComponent = Header ? Header : /*#__PURE__*/createElement(Title, null, t('New Post'));

    var forwardedProps = __assign(__assign({}, this.props), {
      Header: HeaderComponent
    });

    return /*#__PURE__*/createElement(StreamApp.Consumer, null, function (appCtx) {
      return /*#__PURE__*/createElement(StatusUpdateFormInner, _extends({}, forwardedProps, appCtx));
    });
  };

  StatusUpdateForm.defaultProps = {
    feedGroup: 'user',
    activityVerb: 'post',
    modifyActivityData: function modifyActivityData(d) {
      return d;
    }
  };
  return StatusUpdateForm;
}(Component);

var StatusUpdateFormInner =
/** @class */
function (_super) {
  __extends(StatusUpdateFormInner, _super);

  function StatusUpdateFormInner(props) {
    var _this = _super.call(this, props) || this;

    _this.textInputRef = null;

    _this.attachTextInputRef = function (el) {
      _this.textInputRef = el;

      if (!!_this.props.innerRef) {
        _this.props.innerRef(el);
      }
    };

    _this.state = {
      text: '',
      imageUploads: {},
      imageOrder: [],
      fileUploads: {},
      fileOrder: [],
      ogUrlOrder: [],
      ogStateByUrl: {},
      ogActiveUrl: null,
      submitting: false
    };

    _this._dismissOg = function (og) {
      if (og && og.url != null) {
        _this.setState(function (prevState) {
          var ogStateByUrl = prevState.ogStateByUrl;

          for (var url in ogStateByUrl) {
            ogStateByUrl[url].dismissed = true;
          }

          return {
            ogActiveUrl: null,
            ogStateByUrl: ogStateByUrl
          };
        });
      }
    };

    _this._text = function () {
      return _this.state.text.trim();
    };

    _this._object = function () {
      var e_1, _a;

      try {
        for (var _b = __values(_this._orderedImages()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var image = _c.value;

          if (image.url) {
            return image.url;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return _this._text();
    };

    _this._orderedImages = function () {
      return _this.state.imageOrder.map(function (id) {
        return _this.state.imageUploads[id];
      });
    };

    _this._uploadedImages = function () {
      return _this._orderedImages().filter(function (upload) {
        return upload.url;
      });
    };

    _this._orderedFiles = function () {
      return _this.state.fileOrder.map(function (id) {
        return _this.state.fileUploads[id];
      });
    };

    _this._uploadedFiles = function () {
      return _this._orderedFiles().filter(function (upload) {
        return upload.url;
      });
    };

    _this._orderedOgStates = function () {
      return _this.state.ogUrlOrder.map(function (url) {
        return _this.state.ogStateByUrl[url];
      }).filter(Boolean);
    };

    _this._isOgScraping = function () {
      return _this._orderedOgStates().some(function (state) {
        return state.scrapingActive;
      });
    };

    _this._availableOg = function () {
      return _this._orderedOgStates().map(function (state) {
        return state.data;
      }).filter(Boolean);
    };

    _this._activeOg = function () {
      var ogActiveUrl = _this.state.ogActiveUrl;

      if (ogActiveUrl) {
        return _this.state.ogStateByUrl[ogActiveUrl].data;
      }
    };

    _this._canSubmit = function () {
      return Boolean(_this._object()) && _this._orderedImages().every(function (upload) {
        return upload.state !== 'uploading';
      }) && _this._orderedFiles().every(function (upload) {
        return upload.state !== 'uploading';
      }) && !_this._isOgScraping() && !_this.state.submitting;
    };

    _this.onSubmitForm = function (e) {
      return __awaiter(_this, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              e.preventDefault();
              this.setState({
                submitting: true
              });
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , this.addActivity()];

            case 2:
              response = _a.sent();
              return [3
              /*break*/
              , 4];

            case 3:
              e_2 = _a.sent();
              this.setState({
                submitting: false
              });
              this.props.errorHandler(e_2, 'add-activity', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 4:
              this.setState({
                text: '',
                imageUploads: {},
                imageOrder: [],
                fileUploads: {},
                fileOrder: [],
                ogUrlOrder: [],
                ogStateByUrl: {},
                ogActiveUrl: null,
                submitting: false
              });

              if (this.props.onSuccess) {
                this.props.onSuccess(response);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._getTextAreaElement = function () {
      return _this.textInputRef;
    };

    _this._onSelectEmoji = function (emoji) {
      return _this._insertText(emoji["native"]);
    };

    _this._insertText = function (insertedText) {
      return __awaiter(_this, void 0, void 0, function () {
        var newCursorPosition, textareaElement;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                var prevText = prevState.text;

                var textareaElement = _this._getTextAreaElement();

                if (!textareaElement) {
                  return {
                    text: prevText + insertedText
                  };
                } // Insert emoji at previous cursor position


                var selectionStart = textareaElement.selectionStart,
                    selectionEnd = textareaElement.selectionEnd;
                newCursorPosition = selectionStart + insertedText.length;
                return {
                  text: prevText.slice(0, selectionStart) + insertedText + prevText.slice(selectionEnd)
                };
              })];

            case 1:
              _a.sent();

              textareaElement = this._getTextAreaElement();

              if (!textareaElement || newCursorPosition == null) {
                return [2
                /*return*/
                ];
              } // Update cursorPosition


              textareaElement.selectionStart = newCursorPosition;
              textareaElement.selectionEnd = newCursorPosition;
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._uploadNewFiles = function (files) {
      var e_3, _a;

      try {
        for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
          var file = files_1_1.value;

          if (file.type.startsWith('image/')) {
            _this._uploadNewImage(file);
          } else if (file instanceof File) {
            _this._uploadNewFile(file);
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (files_1_1 && !files_1_1.done && (_a = files_1["return"])) _a.call(files_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };

    _this._uploadNewImage = function (file) {
      return __awaiter(_this, void 0, void 0, function () {
        var id, reader;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              id = generateRandomId();
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                prevState.imageUploads[id] = {
                  id: id,
                  file: file,
                  state: 'uploading'
                };
                return {
                  imageOrder: prevState.imageOrder.concat(id),
                  imageUploads: prevState.imageUploads
                };
              })];

            case 1:
              _a.sent();

              if (FileReader) {
                reader = new FileReader();

                reader.onload = function (event) {
                  _this.setState(function (prevState) {
                    prevState.imageUploads[id].previewUri = event.target.result.toString();
                    return {
                      imageUploads: prevState.imageUploads
                    };
                  });
                };

                reader.readAsDataURL(file);
              }

              return [2
              /*return*/
              , this._uploadImage(id)];
          }
        });
      });
    };

    _this._uploadNewFile = function (file) {
      return __awaiter(_this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              id = generateRandomId();
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                prevState.fileUploads[id] = {
                  id: id,
                  file: file,
                  state: 'uploading'
                };
                return {
                  fileOrder: prevState.fileOrder.concat(id),
                  fileUploads: prevState.fileUploads
                };
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              , this._uploadFile(id)];
          }
        });
      });
    };

    _this._uploadImage = function (id) {
      return __awaiter(_this, void 0, void 0, function () {
        var img, file, response, e_4, alreadyRemoved_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              img = this.state.imageUploads[id];

              if (!img) {
                return [2
                /*return*/
                ];
              }

              file = img.file;
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                prevState.imageUploads[id].state = 'uploading';
                return {
                  imageUploads: prevState.imageUploads
                };
              })];

            case 1:
              _a.sent();

              response = {};
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 6]);

              return [4
              /*yield*/
              , this.props.client.images.upload(file)];

            case 3:
              response = _a.sent();
              return [3
              /*break*/
              , 6];

            case 4:
              e_4 = _a.sent();
              console.warn(e_4);
              alreadyRemoved_1 = false;
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                var image = prevState.imageUploads[id];

                if (!image) {
                  alreadyRemoved_1 = true;
                  return {};
                }

                image.state = 'failed';
                return {
                  imageUploads: prevState.imageUploads
                };
              })];

            case 5:
              _a.sent();

              if (!alreadyRemoved_1) {
                this.props.errorHandler(e_4, 'upload-image', {
                  feedGroup: this.props.feedGroup,
                  userId: this.props.userId
                });
              }

              return [2
              /*return*/
              ];

            case 6:
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                img.state = 'finished';
                img.url = response.file;
                return {
                  imageUploads: prevState.imageUploads
                };
              })];

            case 7:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._uploadFile = function (id) {
      return __awaiter(_this, void 0, void 0, function () {
        var upload, file, response, e_5;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              upload = this.state.fileUploads[id];

              if (!upload) {
                return [2
                /*return*/
                ];
              }

              file = upload.file;
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                prevState.fileUploads[id].state = 'uploading';
                return {
                  fileUploads: prevState.fileUploads
                };
              })];

            case 1:
              _a.sent();

              response = {};
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4,, 6]);

              return [4
              /*yield*/
              , this.props.client.files.upload(file)];

            case 3:
              response = _a.sent();
              return [3
              /*break*/
              , 6];

            case 4:
              e_5 = _a.sent();
              console.warn(e_5);
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                if (prevState.fileUploads[id]) {
                  prevState.fileUploads[id].state = 'failed';
                  return {
                    fileUploads: prevState.fileUploads
                  };
                }

                return {};
              })];

            case 5:
              _a.sent();

              this.props.errorHandler(e_5, 'upload-image', {
                feedGroup: this.props.feedGroup,
                userId: this.props.userId
              });
              return [2
              /*return*/
              ];

            case 6:
              return [4
              /*yield*/
              , this.setState(function (prevState) {
                if (prevState.fileUploads[id]) {
                  prevState.fileUploads[id].state = 'finished';
                  prevState.fileUploads[id].url = response.file;
                  return {
                    fileUploads: prevState.fileUploads
                  };
                }

                return {};
              })];

            case 7:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._removeImage = function (id) {
      // TODO: cancel upload if still uploading
      _this.setState(function (prevState) {
        var img = prevState.imageUploads[id];

        if (!img) {
          return {};
        }

        delete prevState.imageUploads[id];
        return {
          imageUploads: prevState.imageUploads,
          imageOrder: prevState.imageOrder.filter(function (_id) {
            return id !== _id;
          })
        };
      });
    };

    _this._removeFile = function (id) {
      // TODO: cancel upload if still uploading
      _this.setState(function (prevState) {
        var upload = prevState.fileUploads[id];

        if (!upload) {
          return {};
        }

        delete prevState.fileUploads[id];
        return {
          fileUploads: prevState.fileUploads,
          fileOrder: prevState.fileOrder.filter(function (_id) {
            return id !== _id;
          })
        };
      });
    };

    _this._onChange = function (event) {
      var text = inputValueFromEvent(event);

      if (text == null) {
        return;
      }

      _this.setState({
        text: text
      });

      _this._handleOgDebounced(text);
    };

    _this._handleOgDebounced = _debounce(_this.handleOG, 250, {
      leading: true,
      trailing: true
    });
    return _this;
  }

  StatusUpdateFormInner.prototype.handleOG = function (text) {
    var _this = this;

    var newUrls;
    var removedUrls;
    var urlInfos = anchorme(text, {
      list: true,
      exclude: function exclude(info) {
        return info.protocol !== 'https://' && info.protocol !== 'http://';
      }
    });

    var urls = _uniq(urlInfos.map(function (info) {
      return info.protocol + info.encoded;
    }));

    this.setState(function (prevState) {
      var e_6, _a, e_7, _b, e_8, _c;

      var oldUrls = prevState.ogUrlOrder;
      newUrls = _difference(urls, oldUrls);
      removedUrls = _difference(oldUrls, urls);
      var newState = {
        ogUrlOrder: urls
      };

      if (!_includes(urls, prevState.ogActiveUrl, undefined, undefined)) {
        // !urls.includes(prevState.ogActiveUrl) replaced with lodash
        newState.ogActiveUrl = null;

        try {
          for (var urls_1 = __values(urls), urls_1_1 = urls_1.next(); !urls_1_1.done; urls_1_1 = urls_1.next()) {
            var url = urls_1_1.value;
            var ogState = prevState.ogStateByUrl[url];

            if (ogState && ogState.data && !ogState.dismissed) {
              newState.ogActiveUrl = url;
              break;
            }
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (urls_1_1 && !urls_1_1.done && (_a = urls_1["return"])) _a.call(urls_1);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
      }

      try {
        for (var removedUrls_1 = __values(removedUrls), removedUrls_1_1 = removedUrls_1.next(); !removedUrls_1_1.done; removedUrls_1_1 = removedUrls_1.next()) {
          var url = removedUrls_1_1.value;
          delete prevState.ogStateByUrl[url];
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (removedUrls_1_1 && !removedUrls_1_1.done && (_b = removedUrls_1["return"])) _b.call(removedUrls_1);
        } finally {
          if (e_7) throw e_7.error;
        }
      }

      try {
        for (var newUrls_1 = __values(newUrls), newUrls_1_1 = newUrls_1.next(); !newUrls_1_1.done; newUrls_1_1 = newUrls_1.next()) {
          var url = newUrls_1_1.value;
          prevState.ogStateByUrl[url] = {
            scrapingActive: true,
            dismissed: false
          };
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (newUrls_1_1 && !newUrls_1_1.done && (_c = newUrls_1["return"])) _c.call(newUrls_1);
        } finally {
          if (e_8) throw e_8.error;
        }
      }

      newState.ogStateByUrl = prevState.ogStateByUrl;
      return newState;
    }, function () {
      newUrls.forEach(function (url) {
        return __awaiter(_this, void 0, void 0, function () {
          var resp, e_9;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2,, 3]);

                return [4
                /*yield*/
                , this.props.client.og(url)];

              case 1:
                resp = _a.sent();
                return [3
                /*break*/
                , 3];

              case 2:
                e_9 = _a.sent();
                console.warn(e_9);
                this.setState(function (prevState) {
                  prevState.ogStateByUrl[url] = {
                    scrapingActive: false,
                    dismissed: false
                  };
                  return {
                    ogStateByUrl: prevState.ogStateByUrl
                  };
                });
                return [2
                /*return*/
                ];

              case 3:
                resp.url = url;
                this.setState(function (prevState) {
                  prevState.ogStateByUrl[url] = {
                    scrapingActive: false,
                    data: resp,
                    dismissed: false
                  };
                  var newState = {
                    ogStateByUrl: prevState.ogStateByUrl
                  };

                  if (!prevState.ogActiveUrl) {
                    newState.ogActiveUrl = url;
                  }

                  return newState;
                });
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    });
  };

  StatusUpdateFormInner.prototype.addActivity = function () {
    return __awaiter(this, void 0, void 0, function () {
      var activity, uploadedImages, uploadedFiles, attachments, modifiedActivity, _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            activity = {
              actor: this.props.client.currentUser,
              verb: this.props.activityVerb,
              object: this._object()
            };
            uploadedImages = this._uploadedImages();
            uploadedFiles = this._uploadedFiles();
            attachments = {
              og: this._activeOg()
            };

            if (uploadedImages) {
              attachments.images = uploadedImages.map(function (image) {
                return image.url;
              }).filter(Boolean);
              activity.text = this._text();
            }

            if (uploadedFiles) {
              attachments.files = uploadedFiles.map(function (upload) {
                return {
                  // url will never actually be empty string because _uploadedFiles
                  // filters those out.
                  url: upload.url || '',
                  name: upload.file.name,
                  mimeType: upload.file.type
                };
              });
            }

            if (Object.keys(attachments).length > 0) {
              activity.attachments = attachments;
            }

            if (!this.props.modifyActivityDataAsync) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.props.modifyActivityDataAsync(activity, this.props.token)];
          // y'all

          case 1:
            _a = _b.sent(); // y'all

            return [3
            /*break*/
            , 3];

          case 2:
            _a = this.props.modifyActivityData(activity);
            _b.label = 3;

          case 3:
            modifiedActivity = _a;
            if (!this.props.doRequest) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , this.props.doRequest(modifiedActivity)];

          case 4:
            return [2
            /*return*/
            , _b.sent()];

          case 5:
            return [4
            /*yield*/
            , this.props.client.feed(this.props.feedGroup, this.props.userId).addActivity(modifiedActivity)];

          case 6:
            return [2
            /*return*/
            , _b.sent()];
          // TODO resolve custom type issue
        }
      });
    });
  };

  StatusUpdateFormInner.prototype.render = function () {
    var _this = this;

    var t = this.props.t;

    var activeOg = this._activeOg();

    var availableOg = this._availableOg();

    var userData = this.props.user.data || {}; // TODO resolve custom type issue

    return /*#__PURE__*/createElement(Panel, null, /*#__PURE__*/createElement("form", {
      onSubmit: this.onSubmitForm
    }, /*#__PURE__*/createElement(ImageDropzone, {
      handleFiles: this._uploadNewFiles
    }, /*#__PURE__*/createElement(PanelHeading, null, this.props.Header), /*#__PURE__*/createElement(PanelContent, null, /*#__PURE__*/createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/createElement(Fragment, null, userData.profileImage && /*#__PURE__*/createElement("div", {
      style: {
        marginRight: '16px'
      }
    }, /*#__PURE__*/createElement(Avatar, {
      image: userData.profileImage || 'https://placehold.it/100x100',
      size: 50,
      circle: true
    }))), /*#__PURE__*/createElement(Textarea, {
      innerRef: this.attachTextInputRef,
      placeholder: t('Type your post...'),
      value: this.state.text,
      onChange: this._onChange,
      trigger: this.props.trigger,
      onPaste: function onPaste(event) {
        return __awaiter(_this, void 0, void 0, function () {
          var items, plainTextPromise, _loop_1, _a, _b, _item, state_1, fileLikes, s;

          var e_10, _c;

          return __generator(this, function (_d) {
            switch (_d.label) {
              case 0:
                items = event.clipboardData.items;

                if (!dataTransferItemsHaveFiles(items)) {
                  return [2
                  /*return*/
                  ];
                }

                event.preventDefault();

                _loop_1 = function _loop_1(_item) {
                  var item = _item;

                  if (item.kind === 'string' && item.type === 'text/plain') {
                    plainTextPromise = new Promise(function (resolve) {
                      item.getAsString(function (s) {
                        resolve(s);
                      });
                    });
                    return "break";
                  }
                };

                try {
                  // TODO resolve type issue
                  for (_a = __values(items), _b = _a.next(); !_b.done; _b = _a.next()) {
                    _item = _b.value;
                    state_1 = _loop_1(_item);
                    if (state_1 === "break") break;
                  }
                } catch (e_10_1) {
                  e_10 = {
                    error: e_10_1
                  };
                } finally {
                  try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                  } finally {
                    if (e_10) throw e_10.error;
                  }
                }

                return [4
                /*yield*/
                , dataTransferItemsToFiles(items)];

              case 1:
                fileLikes = _d.sent();

                if (fileLikes.length) {
                  this._uploadNewFiles(fileLikes);

                  return [2
                  /*return*/
                  ];
                }

                if (!plainTextPromise) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , plainTextPromise];

              case 2:
                s = _d.sent();

                this._insertText(s);

                _d.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
    })), this._isOgScraping() && /*#__PURE__*/createElement("div", {
      className: "raf-status-update-form__og-loading"
    }, /*#__PURE__*/createElement(LoadingIndicator, null), " Getting website data..."), activeOg && /*#__PURE__*/createElement("div", {
      style: {
        margin: '8px 0'
      }
    }, !activeOg.videos && !activeOg.audios ? /*#__PURE__*/createElement(Card, _extends({}, activeOg, {
      // TODO resolve custom type issue
      nolink: true,
      handleClose: function handleClose(e) {
        e.preventDefault();

        _this._dismissOg(activeOg);
      }
    })) : /*#__PURE__*/createElement(Fragment, null, activeOg.videos ? /*#__PURE__*/createElement(Video, {
      og: activeOg,
      handleClose: function handleClose(e) {
        e.preventDefault();

        _this._dismissOg(activeOg);
      }
    }) : null, activeOg.audios ? /*#__PURE__*/createElement(Audio, {
      og: activeOg,
      handleClose: function handleClose(e) {
        e.preventDefault();

        _this._dismissOg(activeOg);
      }
    }) : null)), availableOg && availableOg.length > 1 && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("ol", {
      className: "raf-status-update-form__url-list"
    }, availableOg.map(function (_a) {
      var url = _a.url,
          title = _a.title;
      return /*#__PURE__*/createElement("li", {
        className: "raf-status-update-form__url-list-item" + (url === _this.state.ogActiveUrl ? ' raf-status-update-form__url-list-item--active' : ''),
        onClick: function onClick() {
          return _this.setState(function (prevState) {
            var ogState = prevState.ogStateByUrl[url];

            if (ogState) {
              ogState.dismissed = false;
            }

            return {
              ogActiveUrl: url,
              ogStateByUrl: prevState.ogStateByUrl
            };
          });
        },
        key: url
      }, /*#__PURE__*/createElement(FontAwesomeIcon, {
        icon: faBookmark
      }), ' ', title !== undefined ? title : url);
    }))), this.state.imageOrder.length > 0 && /*#__PURE__*/createElement(ImagePreviewer, {
      imageUploads: this.state.imageOrder.map(function (id) {
        return _this.state.imageUploads[id];
      }),
      handleRemove: this._removeImage,
      handleRetry: this._uploadImage,
      handleFiles: this._uploadNewFiles
    }), this.state.fileOrder.length > 0 && /*#__PURE__*/createElement(FilePreviewer, {
      uploads: this.state.fileOrder.map(function (id) {
        return _this.state.fileUploads[id];
      }),
      handleRemove: this._removeFile,
      handleRetry: this._uploadFile,
      handleFiles: this._uploadNewFiles
    })), /*#__PURE__*/createElement(PanelFooter, null, /*#__PURE__*/createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/createElement("div", {
      style: {
        marginRight: '32px',
        display: 'inline-block'
      }
    }, /*#__PURE__*/createElement(ImageUploadButton, {
      handleFiles: this._uploadNewFiles,
      multiple: true
    })), /*#__PURE__*/createElement("div", {
      style: {
        marginRight: '32px',
        display: 'inline-block'
      }
    }, /*#__PURE__*/createElement(FileUploadButton, {
      handleFiles: this._uploadNewFiles,
      multiple: true
    })), /*#__PURE__*/createElement(EmojiPicker$1, {
      onSelect: this._onSelectEmoji
    }), this.props.FooterItem), /*#__PURE__*/createElement(Button, {
      type: "submit",
      buttonStyle: "primary",
      loading: this.state.submitting,
      disabled: !this._canSubmit()
    }, t('Post')))))));
  };

  return StatusUpdateFormInner;
}(Component);

var StatusUpdateForm$1 = withTranslationContext(StatusUpdateForm);

/**
 * `DropdownPanel` is a more advanced component used to create a notification dropdown for instance, it comes with three parts: `Header`, `Content` and `Footer`. The content has a limited height and the `overflow` is set to `scroll`.
 *
 * @example ./examples/DropdownPanel.md
 */

var DropdownPanel =
/** @class */
function (_super) {
  __extends(DropdownPanel, _super);

  function DropdownPanel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DropdownPanel.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-dropdown-panel " + (this.props.arrow ? ' raf-dropdown-panel--arrow' : '') + " " + (this.props.right ? ' raf-dropdown-panel--right raf-dropdown-panel--arrow-right' : 'raf-dropdown-panel--left raf-dropdown-panel--arrow-left')
    }, this.props.Header != null && /*#__PURE__*/createElement("div", {
      className: "raf-dropdown-panel__header"
    }, smartRender(this.props.Header, {}, null)), /*#__PURE__*/createElement("div", {
      className: "raf-dropdown-panel__content"
    }, this.props.children), this.props.Footer != null && /*#__PURE__*/createElement("div", {
      className: "raf-dropdown-panel__footer"
    }, smartRender(this.props.Footer, {}, null)));
  };

  DropdownPanel.defaultProps = {
    arrow: false,
    left: true,
    right: false
  };
  return DropdownPanel;
}(Component);

/**
 *
 * @example ./examples/IconBadge.md
 */

var IconBadge =
/** @class */
function (_super) {
  __extends(IconBadge, _super);

  function IconBadge() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IconBadge.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-icon-badge",
      role: "button",
      onClick: this.props.onClick
    }, this.props.children ? this.props.children : /*#__PURE__*/createElement("svg", {
      width: "17",
      height: "20",
      viewBox: "0 0 17 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/createElement("path", {
      d: "M8.5 20c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6V8.5c0-3.07-2.13-5.64-5-6.32V1.5C10 .67 9.33 0 8.5 0S7 .67 7 1.5v.68c-2.87.68-5 3.25-5 6.32V14l-2 2v1h17v-1l-2-2zm-2 1H4V8.5C4 6.01 6.01 4 8.5 4S13 6.01 13 8.5V15z" // fill="#414D54"
      ,
      fillRule: "evenodd"
    })), !this.props.hidden && this.props.unseen > 0 ? /*#__PURE__*/createElement("div", {
      className: "raf-icon-badge__badge"
    }, this.props.showNumber ? /*#__PURE__*/createElement("p", null, this.props.unseen) : null) : null);
  };

  return IconBadge;
}(Component);

/**
 * IMPORTANT: Changing most of the props below doesn't result in the desired
 * effect. These settings related to feed management should be changed in the
 * `sharedFeeds` prop of the [`StreamApp`](#streamapp) component.
 * @example ./examples/NotificationDropdown.md
 */

var NotificationDropdown =
/** @class */
function (_super) {
  __extends(NotificationDropdown, _super);

  function NotificationDropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  NotificationDropdown.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/createElement(Feed, {
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      options: makeDefaultOptions$1({
        mark_seen: false
      }),
      doFeedRequest: this.props.doFeedRequest
    }, /*#__PURE__*/createElement(FeedContext.Consumer, null, function (feedCtx) {
      return /*#__PURE__*/createElement(NotificationDropdownInner, _extends({}, _this.props, feedCtx));
    }));
  };

  NotificationDropdown.defaultProps = {
    feedGroup: 'notification',
    Group: Notification$1,
    notify: true,
    Notifier: NewActivitiesNotification$1,
    Paginator: LoadMorePaginator,
    Placeholder: FeedPlaceholder$1,
    width: 475
  };
  return NotificationDropdown;
}(Component);

var NotificationDropdownInner =
/** @class */
function (_super) {
  __extends(NotificationDropdownInner, _super);

  function NotificationDropdownInner(props) {
    var _this = _super.call(this, props) || this;

    _this._refresh = function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.props.refresh(makeDefaultOptions$1(this.props.options))];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.openDropdown = function () {
      _this.setState({
        open: true
      }, function () {
        document.addEventListener('click', _this.closeDropdown, false);
      });
    };

    _this.closeDropdown = function (e) {
      if (_this.dropdownRef.current !== null && !_this.dropdownRef.current.contains(e.target)) {
        _this.setState({
          open: false
        }, function () {
          document.removeEventListener('click', _this.closeDropdown, false);
        });
      }
    };

    _this.state = {
      open: false
    };
    _this.dropdownRef = /*#__PURE__*/createRef();
    return _this;
  }

  NotificationDropdownInner.prototype.componentDidMount = function () {
    this.props.refreshUnreadUnseen();
  };

  NotificationDropdownInner.prototype.componentWillUnmount = function () {
    document.removeEventListener('click', this.closeDropdown, false);
  };

  NotificationDropdownInner.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      style: {
        position: 'relative',
        display: 'inline-block'
      }
    }, /*#__PURE__*/createElement(IconBadge, {
      unseen: this.props.unseen,
      onClick: this.openDropdown,
      showNumber: true,
      hidden: !this.props.notify
    }, this.props.Icon && smartRender(this.props.Icon, {}, null)), /*#__PURE__*/createElement("div", {
      ref: this.dropdownRef,
      style: {
        position: 'absolute',
        left: this.props.right ? '' : '-22px',
        right: this.props.right ? -29 : 0,
        top: 35,
        width: '100vw',
        maxWidth: this.props.width,
        zIndex: 9999,
        visibility: this.state.open ? 'visible' : 'hidden',
        transform: this.state.open ? 'translateY(0px)' : 'translateY(10px)',
        opacity: this.state.open ? '1' : '0',
        transition: 'all .2s ease-out'
      }
    }, this.state.open && /*#__PURE__*/createElement(DropdownPanel, {
      arrow: true,
      right: this.props.right,
      Header: this.props.Header,
      Footer: this.props.Footer
    }, /*#__PURE__*/createElement(NotificationFeed, {
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      options: this.props.options,
      Group: this.props.Group,
      notify: this.props.notify,
      Notifier: this.props.Notifier,
      Paginator: this.props.Paginator,
      Placeholder: this.props.Placeholder,
      doFeedRequest: this.props.doFeedRequest,
      doActivityDeleteRequest: this.props.doActivityDeleteRequest,
      doReactionAddRequest: this.props.doReactionAddRequest,
      doReactionDeleteRequest: this.props.doReactionDeleteRequest,
      doChildReactionAddRequest: this.props.doChildReactionAddRequest,
      doChildReactionDeleteRequest: this.props.doChildReactionDeleteRequest,
      analyticsLocation: this.props.analyticsLocation
    }))));
  };

  return NotificationDropdownInner;
}(Component);

var makeDefaultOptions$1 = function makeDefaultOptions(options) {
  var copy = __assign({}, options);

  if (copy.mark_seen === undefined) {
    copy.mark_seen = true;
  }

  return copy;
};

var InfiniteScroll =
/** @class */
function (_super) {
  __extends(InfiniteScroll, _super);

  function InfiniteScroll(props) {
    var _this = _super.call(this, props) || this;

    _this.pageLoaded = 0;
    _this.scrollListener = _this.scrollListener.bind(_this);
    return _this;
  }

  InfiniteScroll.prototype.componentDidMount = function () {
    this.pageLoaded = this.props.pageStart;
    this.attachScrollListener();
  };

  InfiniteScroll.prototype.componentDidUpdate = function () {
    this.attachScrollListener();
  };

  InfiniteScroll.prototype.componentWillUnmount = function () {
    this.detachScrollListener();
    this.detachMousewheelListener();
  }; // Set a defaut loader for all your `InfiniteScroll` components


  InfiniteScroll.prototype.setDefaultLoader = function (loader) {
    this.defaultLoader = loader;
  };

  InfiniteScroll.prototype.detachMousewheelListener = function () {
    var scrollEl = window;

    if (this.props.useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
  };

  InfiniteScroll.prototype.detachScrollListener = function () {
    var scrollEl = window;

    if (this.props.useWindow === false && this.props.getScrollParent) {
      scrollEl = this.props.getScrollParent().current;
    } else if (this.props.useWindow === false) {
      scrollEl = this.getParentElement(this.scrollComponent);
    }

    scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
    scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
  };

  InfiniteScroll.prototype.getParentElement = function (el) {
    return el && el.parentNode;
  };

  InfiniteScroll.prototype.filterProps = function (props) {
    return props;
  };

  InfiniteScroll.prototype.attachScrollListener = function () {
    if (!this.props.hasMore || this.props.isLoading || !this.getParentElement(this.scrollComponent)) {
      return;
    }

    var scrollEl = window;

    if (this.props.useWindow === false && this.props.getScrollParent) {
      scrollEl = this.props.getScrollParent().current;
    } else if (this.props.useWindow === false) {
      scrollEl = this.getParentElement(this.scrollComponent);
    }

    scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
    scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
    scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

    if (this.props.initialLoad) {
      this.scrollListener();
    }
  };

  InfiniteScroll.prototype.mousewheelListener = function (e) {
    // Prevents Chrome hangups
    // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
    if (e.deltaY === 1) {
      e.preventDefault();
    }
  };

  InfiniteScroll.prototype.scrollListener = function () {
    var el = this.scrollComponent;
    var scrollEl = window;
    var parentNode = this.getParentElement(el);
    var offset;

    if (this.props.useWindow) {
      var doc = document.documentElement || document.body.parentNode || document.body;
      var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;

      if (this.props.isReverse) {
        offset = scrollTop;
      } else {
        offset = this.calculateOffset(el, scrollTop);
      }
    } else if (this.props.isReverse) {
      offset = parentNode.scrollTop;
    } else {
      offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
    } // Here we make sure the element is visible as well as checking the offset


    if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
      this.detachScrollListener(); // Call loadMore after detachScrollListener to allow for non-async loadMore functions

      if (typeof this.props.loadMore === 'function') {
        this.props.loadMore(this.pageLoaded += 1);
      }
    }
  };

  InfiniteScroll.prototype.calculateOffset = function (el, scrollTop) {
    if (!el) {
      return 0;
    }

    return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
  };

  InfiniteScroll.prototype.calculateTopPosition = function (el) {
    if (!el) {
      return 0;
    }

    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  };

  InfiniteScroll.prototype.render = function () {
    var _this = this;

    var renderProps = this.filterProps(this.props);

    var children = renderProps.children,
        element = renderProps.element,
        hasMore = renderProps.hasMore,
        initialLoad = renderProps.initialLoad,
        isReverse = renderProps.isReverse,
        loader = renderProps.loader,
        loadMore = renderProps.loadMore,
        pageStart = renderProps.pageStart,
        ref = renderProps.ref,
        threshold = renderProps.threshold,
        useCapture = renderProps.useCapture,
        useWindow = renderProps.useWindow,
        isLoading = renderProps.isLoading,
        props = __rest(renderProps, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "isLoading"]);

    delete props.getScrollParent;

    props.ref = function (node) {
      _this.scrollComponent = node;

      if (ref) {
        ref(node);
      }
    };

    var childrenArray = [children];

    if (isLoading) {
      if (loader) {
        isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
      } else if (this.defaultLoader) {
        isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
      }
    }

    return /*#__PURE__*/React.createElement(element, props, childrenArray);
  };

  InfiniteScroll.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node,
    hasMore: PropTypes.bool,
    initialLoad: PropTypes.bool,
    isReverse: PropTypes.bool,
    loader: PropTypes.node,
    loadMore: PropTypes.func.isRequired,
    getScrollParent: PropTypes.func,
    pageStart: PropTypes.number,
    ref: PropTypes.func,
    threshold: PropTypes.number,
    useCapture: PropTypes.bool,
    useWindow: PropTypes.bool,
    isLoading: PropTypes.bool
  };
  InfiniteScroll.defaultProps = {
    element: 'div',
    hasMore: false,
    initialLoad: true,
    pageStart: 0,
    ref: null,
    threshold: 250,
    useWindow: true,
    isReverse: false,
    useCapture: false,
    loader: null,
    isLoading: false
  };
  return InfiniteScroll;
}(Component);

var InfiniteScrollPaginator =
/** @class */
function (_super) {
  __extends(InfiniteScrollPaginator, _super);

  function InfiniteScrollPaginator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InfiniteScrollPaginator.prototype.render = function () {
    return /*#__PURE__*/React.createElement(InfiniteScroll, {
      loadMore: this.props.loadNextPage,
      hasMore: this.props.hasNextPage,
      isLoading: this.props.refreshing,
      isReverse: this.props.reverse,
      threshold: this.props.threshold,
      getScrollParent: this.props.getScrollParent,
      useWindow: this.props.useWindow,
      loader: /*#__PURE__*/React.createElement(React.Fragment, {
        key: "loading-indicator"
      }, smartRender(this.props.Loader))
    }, this.props.children);
  };

  InfiniteScrollPaginator.defaultProps = {
    Loader: /*#__PURE__*/React.createElement(LoadingIndicator, null),
    threshold: 250,
    useWindow: true
  };
  return InfiniteScrollPaginator;
}(React.Component);

/**
 * Component is described here.
 *
 * @example ./examples/ReactionIcon.md
 */

var ReactionIcon =
/** @class */
function (_super) {
  __extends(ReactionIcon, _super);

  function ReactionIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ReactionIcon.prototype.render = function () {
    var _a = this.props,
        counts = _a.counts,
        kind = _a.kind,
        labelSingle = _a.labelSingle,
        labelPlural = _a.labelPlural,
        onPress = _a.onPress,
        icon = _a.icon,
        t = _a.t;
    var count = null;

    if (counts && kind) {
      count = counts[kind] || 0;
    }

    if (!count) count = 0;
    var label;

    if (labelSingle && labelPlural) {
      label = count === 1 ? "1 " + labelSingle : count + " " + labelPlural;
    }

    if (!labelSingle || !labelPlural) {
      switch (kind) {
        case 'like':
          label = count === 1 ? t('1 like') : t('{{ countLikes }} likes', {
            countLikes: count
          });
          break;

        case 'repost':
          label = count === 1 ? t('1 repost') : t('{{ countReposts }} reposts', {
            countReposts: count
          });
          break;

        case 'comment':
          label = count === 1 ? t('1 comment') : t('{{ countComments }} comments', {
            countComments: count
          });
          break;
      }
    }

    return /*#__PURE__*/createElement("div", {
      className: "raf-reaction-icon",
      onClick: onPress
    }, icon ? /*#__PURE__*/createElement("img", {
      className: "raf-reaction-icon__image",
      src: icon,
      alt: ""
    }) : null, count != null ? /*#__PURE__*/createElement("p", {
      className: "raf-reaction-icon__label"
    }, label) : null);
  };

  return ReactionIcon;
}(Component);

var ReactionIcon$1 = withTranslationContext(ReactionIcon);

/**
 * A generic component that can be used to toggle a reaction and display it's
 * current state. Mostly used for reactions such as like and repost.
 * The [source for
 * LikeButton](https://github.com/GetStream/react-activity-feed/blob/master/src/components/LikeButton.js)
 * is a good example of the usage of this component.
 *
 * @example ./examples/ReactionToggleIcon.md
 */

var ReactionToggleIcon =
/** @class */
function (_super) {
  __extends(ReactionToggleIcon, _super);

  function ReactionToggleIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ReactionToggleIcon.prototype.render = function () {
    var _a = this.props,
        inactiveIcon = _a.inactiveIcon,
        activeIcon = _a.activeIcon,
        own_reactions = _a.own_reactions,
        kind = _a.kind,
        restProps = __rest(_a, ["inactiveIcon", "activeIcon", "own_reactions", "kind"]);

    var icon = inactiveIcon;

    if (own_reactions && own_reactions[kind] && own_reactions[kind].length) {
      icon = activeIcon;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "raf-reaction-toggle-icon"
    }, /*#__PURE__*/React.createElement(ReactionIcon$1, _extends({
      icon: icon,
      kind: kind
    }, restProps)));
  };

  return ReactionToggleIcon;
}(React.Component);

var likebuttonActive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAAAXNSR0IArs4c6QAAAUxJREFUOBGtk89Kw0AQxudLi4Zmo1ARPIgtnvoAPfoCevZPn0LoG9QX8OBBvHtpohcP4s2zIsUHEMR4EPEgWGqFVDPORhaibGPFLCQzu/PNb3YzG6IJhxfct1UQdfLkyAuamAqjdWYKiRllB82XzVrPxLK2nJ3YfD+MVpKEDyWWFv4gR9l0es0ZF9Dr/vFDQ3Z0Iq6b6gCeUpXr1Le8xsLmw6eF5D0+Y+aqyQPzzfPaXN/Mf1orTEBqyG+nIq5/SwBZv5XRWBugulHIxBtGlGtBMQj7g61aG173jo34tVVP4V4QjaRzvzbH5Gk7PePPWo/5V5D0Od5erQ7ssGzJCXww3XaApBAYEy50zUJgJWlAUbDLfmvpqhiYU9rTID3+d0zQY2N58egLNQ4GDI0gz8plPeg1MTIa685kcYc0UH5s60NIAJy7bmXXgLT9BOn0XD2NtcXgAAAAAElFTkSuQmCC";

var likebuttonInactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAAAXNSR0IArs4c6QAAAUpJREFUOBGtk7FKA0EQhmeWLQSDiWKhnaVYH8TCUoiKptLKFPcKeQN9gRQpgmVUsDgrcwQ9BK9VRHwAwdpaJGACO85EllxkXS4kA8fMzv7z3ewsC5DT2p2kfh4nJz45+jbtHkMOOY6ICEFhEO5XXuxe1qvswhVfxPdbBHA5BLFAGSy4dJLzwq7iZN2AuQGiOREjIim98Cqxy/6FRd10pU90y6ClUSG91fY2P0fr8cgJi9K00DPfXZaujckJnLOyGucF8MBl2EdW5PMM6BNgK6xW6tju3PF8fy2s7gzhDBswTNt8Hq91qeg85qQg6e54t/zlhOXpJKshxHe+aTMTGN/4o8BnAtOgWwKbaMhS8Nf4eE+1g+1nyU/dGQI17Q+mgyF8bKwuX/thCD0r8HkEPAuCYGA1zs4UqFNgoDxs18fFhkEPpcX5hgWJ/wEycGS98JuJ8gAAAABJRU5ErkJggg==";

/**
 * Like button ready to be embedded as Activity footer
 * @example ./examples/LikeButton.md
 */

var LikeButton =
/** @class */
function (_super) {
  __extends(LikeButton, _super);

  function LikeButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._onPress = function () {
      var _a = _this.props,
          activity = _a.activity,
          reaction = _a.reaction,
          onToggleReaction = _a.onToggleReaction,
          onToggleChildReaction = _a.onToggleChildReaction;

      if (reaction && onToggleChildReaction) {
        return onToggleChildReaction('like', reaction, {}, {});
      }

      return onToggleReaction('like', activity, {}, {});
    };

    return _this;
  }

  LikeButton.prototype.render = function () {
    var _a = this.props,
        activity = _a.activity,
        reaction = _a.reaction;
    var counts, own_reactions;

    if (reaction && this.props.onToggleChildReaction) {
      counts = reaction.children_counts;
      own_reactions = reaction.own_children;
    } else {
      if (reaction) {
        console.warn('reaction is passed to the LikeButton but ' + 'onToggleChildReaction is not, falling back to liking the activity');
      }

      counts = activity.reaction_counts;
      own_reactions = activity.own_reactions;
    }

    return /*#__PURE__*/createElement(ReactionToggleIcon, {
      counts: counts,
      own_reactions: own_reactions,
      kind: "like",
      onPress: this._onPress,
      activeIcon: likebuttonActive,
      inactiveIcon: likebuttonInactive,
      labelSingle: "like",
      labelPlural: "likes"
    });
  };

  return LikeButton;
}(Component);

var repostButtonActive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAKlJREFUOBHdk8ENgzAMRTHqDXaArdptoNvAVrBDe071I/3oFwkhxzdysS0nz9+J0zSVq1/3WY+2Gnj8lNKksGoQiirMqKJbtkTfa83sHVKkBR8awP++xqLymNOYHUDN5znMIUWEoEA1SCEhENoB4IYLr8aXQ3t/l60j7+29gADByHsB3J9BUQhgFoXwJ5TWKLHW5n+lqljBC8yKMKUYee/h0/1Qdpq8SPwAJWhChOoqSnsAAAAASUVORK5CYII=";

var repostButtonInactive = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAKlJREFUOBHdk8ENgzAMRTHqbnCBFdpNoJvACnBpp0v1I/3oFwkhxzdysS0nz9+J0zSVa92/sx5tNfD4KaVJYdUgFFWYUcWyfRJ9rzWzd0iRFnxoAP819kXlMacxO4Ca59DNIUWEoEA1SCEhENoB4IYLr8aXQ3t/l60j7+29gADByHsB3J9BUQhgFoXwJ5TWKLHW5n+lqljBC8yKMKUYee/h0/1Qdpq8SPwAvNZE146X6PUAAAAASUVORK5CYII=";

/**
 * A repost button ready to be embedded as Activity footer
 * @example ./examples/RepostButton.md
 */

var RepostButton =
/** @class */
function (_super) {
  __extends(RepostButton, _super);

  function RepostButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RepostButton.prototype.render = function () {
    var _this = this;

    if (this.props.userId != null) {
      return /*#__PURE__*/createElement(RepostButtonInner, this.props); // TODO resolve type issue
    }

    return /*#__PURE__*/createElement(StreamApp.Consumer, null, function (appCtx) {
      return /*#__PURE__*/createElement(RepostButtonInner, _extends({}, _this.props, {
        userId: appCtx.user.id
      })) // TODO resolve custom type issue
      ;
    });
  };

  RepostButton.defaultProps = {
    feedGroup: 'user'
  };
  return RepostButton;
}(Component);

var RepostButtonInner =
/** @class */
function (_super) {
  __extends(RepostButtonInner, _super);

  function RepostButtonInner() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RepostButtonInner.prototype.render = function () {
    var _a = this.props,
        feedGroup = _a.feedGroup,
        userId = _a.userId,
        activity = _a.activity,
        onToggleReaction = _a.onToggleReaction;
    return /*#__PURE__*/createElement(ReactionToggleIcon, {
      counts: activity.reaction_counts,
      own_reactions: activity.own_reactions,
      kind: "repost",
      onPress: function onPress() {
        return onToggleReaction('repost', activity, {}, {
          targetFeeds: [feedGroup + ":" + userId]
        });
      },
      activeIcon: repostButtonActive,
      inactiveIcon: repostButtonInactive
    });
  };

  return RepostButtonInner;
}(Component);

var RepostButton$1 = withTranslationContext(RepostButton);

/**
 * Simple Flex wrapper for centering UI elements. To be expanded in the future.
 *
 * @example ./examples/Flex.md
 */

var Flex =
/** @class */
function (_super) {
  __extends(Flex, _super);

  function Flex() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Flex.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-flex",
      style: __assign({
        justifyContent: this.props.j,
        alignItems: this.props.a,
        justifySelf: this.props.js,
        flexDirection: this.props.d,
        flexWrap: this.props.w
      }, this.props.style)
    }, this.props.children);
  };

  Flex.defaultProps = {
    d: 'row',
    w: 'nowrap'
  };
  return Flex;
}(Component);

/**
 * Wrapper with LikeButton and Repost Button used by the Standard Activity.
 *
 * @example ./examples/ActivityFooter.md
 */

var ActivityFooter =
/** @class */
function (_super) {
  __extends(ActivityFooter, _super);

  function ActivityFooter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ActivityFooter.prototype.render = function () {
    var _a = this.props,
        activity = _a.activity,
        onToggleReaction = _a.onToggleReaction;
    return /*#__PURE__*/createElement("div", {
      className: "raf-activity-footer"
    }, /*#__PURE__*/createElement("div", {
      className: "raf-activity-footer__left"
    }), /*#__PURE__*/createElement("div", {
      className: "raf-activity-footer__right"
    }, /*#__PURE__*/createElement(Flex, {
      a: "center"
    }, /*#__PURE__*/createElement(LikeButton, {
      activity: activity,
      onToggleReaction: onToggleReaction
    }), /*#__PURE__*/createElement(RepostButton$1, this.props))));
  };

  ActivityFooter.defaultProps = {
    feedGroup: 'user'
  };
  return ActivityFooter;
}(Component);

/**
 * Component is described here.
 *
 * @example ./examples/FollowButton.md
 */

var FollowButton =
/** @class */
function (_super) {
  __extends(FollowButton, _super);

  function FollowButton(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      followed: _this.props.followed || false
    };
    return _this;
  }

  FollowButton.prototype.render = function () {
    var _a = this.props,
        onClick = _a.onClick,
        followed = _a.followed;
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-follow-button " + (followed ? 'raf-follow-button--active' : ''),
      role: "button",
      onClick: onClick
    }, followed ? 'Following' : 'Follow');
  };

  return FollowButton;
}(React.Component);

var ReactionList =
/** @class */
function (_super) {
  __extends(ReactionList, _super);

  function ReactionList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ReactionList.prototype.render = function () {
    var _this = this;

    return /*#__PURE__*/createElement(FeedContext.Consumer, null, function (appCtx) {
      return /*#__PURE__*/createElement(ReactionListInner, _extends({}, _this.props, appCtx));
    });
  };

  ReactionList.defaultProps = {
    Paginator: LoadMorePaginator,
    oldestToNewest: false,
    reverseOrder: false
  };
  return ReactionList;
}(PureComponent);

var ReactionListInner =
/** @class */
function (_super) {
  __extends(ReactionListInner, _super);

  function ReactionListInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.renderReaction = function (reaction) {
      var Reaction = _this.props.Reaction;
      return smartRender(Reaction, {
        reaction: reaction
      });
    };

    return _this;
  }

  ReactionListInner.prototype.componentDidMount = function () {
    var _a = this.props,
        activityId = _a.activityId,
        activities = _a.activities,
        reactionKind = _a.reactionKind,
        getActivityPath = _a.getActivityPath,
        oldestToNewest = _a.oldestToNewest;

    if (!oldestToNewest) {
      return;
    }

    var activityPath = this.props.activityPath || getActivityPath(activityId);
    var orderPrefix = 'oldest';
    var reactions_extra = activities.getIn(__spread(activityPath, [orderPrefix + '_reactions_extra']));

    if (reactions_extra) {
      return;
    }

    return this.props.loadNextReactions(activityId, reactionKind, activityPath, oldestToNewest);
  };

  ReactionListInner.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        activityId = _a.activityId,
        activities = _a.activities,
        reactionKind = _a.reactionKind,
        getActivityPath = _a.getActivityPath,
        oldestToNewest = _a.oldestToNewest,
        reverseOrder = _a.reverseOrder;
    var activityPath = this.props.activityPath || getActivityPath(activityId);
    var orderPrefix = 'latest';

    if (oldestToNewest) {
      orderPrefix = 'oldest';
    }

    var reactionsOfKind = activities.getIn(__spread(activityPath, [orderPrefix + '_reactions', reactionKind]), immutable.List());

    if (reverseOrder) {
      reactionsOfKind = reactionsOfKind.reverse();
    }

    var reactions_extra = activities.getIn(__spread(activityPath, [orderPrefix + '_reactions_extra']));
    var nextUrl = 'https://api.stream-io-api.com/';

    if (reactions_extra) {
      nextUrl = reactions_extra.getIn([reactionKind, 'next'], '');
    }

    var refreshing = activities.getIn(__spread(activityPath, [orderPrefix + '_reactions_extra', reactionKind, 'refreshing']), false);
    return smartRender(this.props.Paginator, {
      loadNextPage: function loadNextPage() {
        return _this.props.loadNextReactions(activityId, reactionKind, activityPath, oldestToNewest);
      },
      hasNextPage: Boolean(nextUrl),
      refreshing: refreshing,
      reverse: reverseOrder,
      children: /*#__PURE__*/createElement(Fragment, null, reactionsOfKind.map(function (reaction) {
        return /*#__PURE__*/createElement(ImmutableItemWrapper$2, {
          key: reaction.get('id'),
          item: reaction,
          renderItem: _this.renderReaction
        });
      }))
    });
  };

  return ReactionListInner;
}(Component);

var ImmutableItemWrapper$2 =
/** @class */
function (_super) {
  __extends(ImmutableItemWrapper, _super);

  function ImmutableItemWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ImmutableItemWrapper.prototype.render = function () {
    return this.props.renderItem(this.props.item.toJS());
  };

  return ImmutableItemWrapper;
}(PureComponent);

/**
 * Component is described here.
 *
 * @example ./examples/CommentItem.md
 */

var CommentItem =
/** @class */
function (_super) {
  __extends(CommentItem, _super);

  function CommentItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._user = function () {
      var user = _this.props.comment.user;
      return user;
    };

    _this.onClickUser = function () {
      var onClickUser = _this.props.onClickUser;

      if (onClickUser) {
        return onClickUser(_this._user());
      }
    };

    return _this;
  }

  CommentItem.prototype._getOnClickUser = function () {
    return this.props.onClickUser ? this.onClickUser : undefined;
  };

  CommentItem.prototype.render = function () {
    var _a = this.props,
        comment = _a.comment,
        tDateTimeParser = _a.tDateTimeParser;
    return /*#__PURE__*/React.createElement("div", {
      className: "raf-comment-item"
    }, /*#__PURE__*/React.createElement(Flex, {
      a: "flex-start",
      style: {
        padding: '8px 0'
      }
    }, comment.user.data.profileImage && /*#__PURE__*/React.createElement(Avatar, {
      onClick: this._getOnClickUser(),
      image: comment.user.data.profileImage,
      circle: true,
      size: 25
    })), /*#__PURE__*/React.createElement(Flex, {
      d: "column",
      style: {
        flex: 1,
        margin: '0 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "raf-comment-item__content"
    }, /*#__PURE__*/React.createElement("time", {
      dateTime: comment.created_at,
      title: comment.created_at
    }, /*#__PURE__*/React.createElement("small", null, humanizeTimestamp(comment.created_at, tDateTimeParser))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      onClick: this._getOnClickUser(),
      className: "raf-comment-item__author"
    }, comment.user.data.name), ' ', textRenderer(comment.data.text, 'raf-comment-item', this.props.onClickMention, this.props.onClickHashtag)))));
  };

  return CommentItem;
}(React.Component);

var CommentItem$1 = withTranslationContext(CommentItem);

/**
 * CommentList uses ReactionList under the hood to render a list of comments.
 *
 * @example ./examples/CommentList.md
 */

var CommentList =
/** @class */
function (_super) {
  __extends(CommentList, _super);

  function CommentList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._Reaction = function (_a) {
      var reaction = _a.reaction;
      return smartRender(_this.props.CommentItem, {
        comment: reaction
      });
    };

    return _this;
  }

  CommentList.prototype.render = function () {
    var _a = this.props,
        Paginator = _a.Paginator,
        activityId = _a.activityId,
        activityPath = _a.activityPath,
        oldestToNewest = _a.oldestToNewest,
        reverseOrder = _a.reverseOrder;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactionList, {
      Paginator: Paginator,
      activityId: activityId,
      reactionKind: 'comment',
      Reaction: this._Reaction,
      activityPath: activityPath,
      oldestToNewest: oldestToNewest,
      reverseOrder: reverseOrder
    }));
  };

  CommentList.defaultProps = {
    Paginator: LoadMorePaginator,
    CommentItem: CommentItem$1,
    oldestToNewest: false,
    reverseOrder: false
  };
  return CommentList;
}(React.PureComponent);

/**
 * Component is described here.
 *
 * @example ./examples/CommentField.md
 */

var CommentField =
/** @class */
function (_super) {
  __extends(CommentField, _super);

  function CommentField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.textAreaRef = null;
    _this.state = {
      text: ''
    };

    _this.attachTextAreaRef = function (el) {
      _this.textAreaRef = el;

      if (el) {
        el.addEventListener('keydown', function (e) {
          if (e.which === 13 && el && el.nextSibling === null) {
            _this.onSubmitForm(e);
          }
        });
      }
    };

    _this.onSubmitForm = function (e) {
      return __awaiter(_this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              e.preventDefault();
              if (!(this.state.text !== '')) return [3
              /*break*/
              , 5];
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , this.props.onAddReaction('comment', this.props.activity, {
                text: this.state.text
              })];

            case 2:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 3:
              e_1 = _a.sent();
              return [2
              /*return*/
              ];

            case 4:
              this.setState({
                text: ''
              });

              if (this.props.onSuccess) {
                this.props.onSuccess();
              }

              _a.label = 5;

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this._onChange = function (event) {
      var text = inputValueFromEvent(event);

      if (text == null) {
        return;
      }

      _this.setState({
        text: text
      });
    };

    return _this;
  }

  CommentField.prototype.render = function () {
    var _a = this.props,
        t = _a.t,
        placeholder = _a.placeholder;
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmitForm,
      className: "raf-comment-field"
    }, this.props.image ? /*#__PURE__*/React.createElement(Avatar, {
      image: this.props.image,
      circle: true,
      size: 39
    }) : null, /*#__PURE__*/React.createElement("div", {
      className: "raf-comment-field__group"
    }, /*#__PURE__*/React.createElement(Textarea, {
      rows: 1,
      value: this.state.text,
      placeholder: placeholder || t('Start Typing...'),
      onChange: this._onChange,
      trigger: this.props.trigger,
      onPaste: function onPaste() {
        return null;
      },
      maxLength: 280,
      innerRef: this.attachTextAreaRef
    }), /*#__PURE__*/React.createElement(Button, {
      buttonStyle: "primary",
      disabled: this.state.text === '',
      type: "submit"
    }, t('Post'))));
  };

  return CommentField;
}(React.Component);

var CommentField$1 = withTranslationContext(CommentField);

/**
 * Component is described here.
 *
 * @example ./examples/DataLabel.md
 */

var DataLabel =
/** @class */
function (_super) {
  __extends(DataLabel, _super);

  function DataLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DataLabel.prototype.render = function () {
    return /*#__PURE__*/createElement("div", {
      className: "raf-data-label"
    }, /*#__PURE__*/createElement("span", {
      className: "raf-data-label__label"
    }, this.props.label), /*#__PURE__*/createElement("span", {
      className: "raf-data-label__data"
    }, this.props.data));
  };

  DataLabel.defaultProps = {
    label: 'label',
    data: 'data'
  };
  return DataLabel;
}(Component);

export { Activity$1 as Activity, ActivityFooter, AttachedActivity, Audio, Avatar, AvatarGroup, Button, Card, CommentField$1 as CommentField, CommentItem$1 as CommentItem, CommentList, DataLabel, Dropdown, EmojiPicker$1 as EmojiPicker, Feed, FeedContext, FlatFeed$1 as FlatFeed, FollowButton, Gallery, IconBadge, InfiniteScrollPaginator, LikeButton, Link, LoadMorePaginator, NewActivitiesNotification$1 as NewActivitiesNotification, Notification$1 as Notification, NotificationDropdown, NotificationFeed, Panel, PanelContent, PanelFooter, PanelHeading, ReactionIcon$1 as ReactionIcon, ReactionList, ReactionToggleIcon, RepostButton$1 as RepostButton, SinglePost, StatusUpdateForm$1 as StatusUpdateForm, StreamApp, StreamContext, Streami18n, Textarea, Title, TranslationContext, UserBar$1 as UserBar, Video, enTranslations, frTranslations, hiTranslations, itTranslations, nlTranslations, ruTranslations, trTranslations, withTranslationContext };
//# sourceMappingURL=index.es.js.map
