import React from 'react';
import { AddReactionCallbackFunction, BaseActivityResponse, Trigger } from '../types';
export declare type Props = {
    activity: BaseActivityResponse;
    onAddReaction: AddReactionCallbackFunction;
    placeholder?: string;
    image?: string;
    onSuccess?: () => unknown;
    trigger?: Trigger;
};
declare const _default: React.FC<Props>;
export default _default;
