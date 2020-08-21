import * as React from 'react';
import { BaseActivityResponse, ToggleReactionCallbackFunction } from '../types';
declare type Props = {
    /** The feed group part of the feed that the activity should be reposted to,
     * e.g. `user` when posting to your own profile */
    feedGroup: string;
    /** The user_id part of the feed that the activity should be reposted to  */
    userId?: string;
    /** The activity received for stream for which to show the like buton. This is
     * used to initalize the toggle state and the counter. */
    activity: BaseActivityResponse;
    /** The function that toggles the reaction. */
    onToggleReaction: ToggleReactionCallbackFunction;
};
declare const _default: React.FC<Props>;
export default _default;
