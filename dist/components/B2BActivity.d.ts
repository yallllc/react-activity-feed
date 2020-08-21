/// <reference types="react" />
import { Renderable } from '../types';
import { Streami18Ctx } from '../Context';
export declare type Props = {
    Header?: Renderable;
    Content?: Renderable;
    Footer?: Renderable;
    activity: any;
    onToggleReaction: any;
} & Streami18Ctx;
declare const _default: {
    (props: any): JSX.Element;
    displayName: any;
};
export default _default;
