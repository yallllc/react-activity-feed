/// <reference types="react" />
import { AddReactionCallbackFunction, BaseActivityResponse, Trigger } from '../types';
import { Streami18Ctx } from '../Context';
export declare type Props = {
    activity: BaseActivityResponse;
    onAddReaction: AddReactionCallbackFunction;
    kind: string;
    placeholder: string;
    image?: string;
    onSuccess?: () => unknown;
    trigger?: Trigger;
} & Streami18Ctx;
declare const _default: {
    (props: any): JSX.Element;
    displayName: any;
};
export default _default;
