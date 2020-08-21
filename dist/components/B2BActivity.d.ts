import * as React from 'react';
import { Renderable } from '../types';
export declare type Props = {
    Header?: Renderable;
    Content?: Renderable;
    Footer?: Renderable;
    activity: any;
    onToggleReaction: any;
};
declare const _default: React.FC<Props>;
export default _default;
