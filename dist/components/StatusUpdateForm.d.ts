import * as React from 'react';
import { ActivityArgData } from '../getstreamCustomTypes';
import { BaseActivityResponse, Trigger } from '../types';
declare type Props = {
    /** The feed group part of the feed that the activity should be posted to */
    feedGroup?: string;
    /** The user_id part of the feed that the activity should be posted to  */
    userId?: string;
    /** The verb that should be used to post the activity */
    activityVerb?: string;
    /** If you want to change something about the activity data that this form
     * sends to stream you can do that with this function. This function gets the
     * activity data that the form would send normally and should return the
     * modified activity data that should be posted instead.
     *
     * For instance, this would add a target field to the activity:
     *
     * ```javascript
     * &lt;StatusUpdateForm
     *   modifyActivityData={(data) => ({...data, target: 'Group:1'})}
     * />
     * ```
     * */
    modifyActivityData?: (activityData: any) => ActivityArgData<any, any>;
    modifyActivityDataAsync?: (activityData: any) => Promise<ActivityArgData<any, any>>;
    /** Add extra footer item */
    FooterItem?: React.ReactNode;
    /** A callback to run after the activity is posted successfully */
    onSuccess?: (response: BaseActivityResponse) => unknown;
    /** Override Post request */
    doRequest?: (activityData: {}) => Promise<BaseActivityResponse>;
    /** An extra trigger for ReactTextareaAutocomplete, this can be used to show
     * a menu when typing @xxx or #xxx, in addition to the emoji menu when typing
     * :xxx  */
    trigger?: Trigger;
    /** A ref that is bound to the textarea element */
    innerRef?: React.RefCallback<HTMLTextAreaElement>;
    /** The header to display */
    Header?: React.ReactNode;
};
declare const _default: React.FC<Props>;
export default _default;
