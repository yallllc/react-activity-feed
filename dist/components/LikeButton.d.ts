import * as React from 'react';
import { BaseActivityResponse, BaseReaction, ToggleReactionCallbackFunction, ToggleChildReactionCallbackFunction } from '../types';
declare type Props = {
    /** The activity received from stream that should be liked when pressing the
     * LikeButton. */
    activity: BaseActivityResponse;
    /** The reaction received from stream that should be liked when pressing the
     * LikeButton. Liking a reaction requires to pass both this field and
     * the `onToggleChildReaction` as well. */
    reaction?: BaseReaction;
    /** The function that toggles reactions on activities. */
    onToggleReaction: ToggleReactionCallbackFunction;
    /** The function that toggles reactions on reactions. */
    onToggleChildReaction?: ToggleChildReactionCallbackFunction;
};
/**
 * Like button ready to be embedded as Activity footer
 * @example ./examples/LikeButton.md
 */
export default class LikeButton extends React.Component<Props> {
    _onPress: () => void | Promise<any>;
    render(): JSX.Element;
}
export {};
