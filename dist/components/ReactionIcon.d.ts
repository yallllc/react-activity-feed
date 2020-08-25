import * as React from 'react';
import { ReactionCounts } from '../getstreamCustomTypes';
declare type Props = {
    /** The icon to display */
    icon: string;
    /** The reaction counts for the activity */
    counts?: ReactionCounts;
    /** The kind of reaction that this displays */
    kind: string;
    /** The height of the icon */
    height?: number;
    /** The width of the icon */
    width?: number;
    /** Function to call when pressed, usually this should call `props.onToggleReaction` */
    onPress?: () => void;
    /** The label to display if the count is one (e.g "like") */
    labelSingle?: string;
    /** The label to display if the count is more than one (e.g "likes") */
    labelPlural?: string;
};
declare const _default: React.FC<Props>;
export default _default;
