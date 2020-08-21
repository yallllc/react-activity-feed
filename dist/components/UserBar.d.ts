import * as React from 'react';
import { Renderable } from '../types';
export declare type Props = {
    username: string | null | undefined;
    avatar?: string;
    subtitle?: string;
    time?: string;
    timestamp?: string | number;
    icon?: string;
    onClickUser?: () => unknown;
    follow?: boolean;
    Right?: Renderable;
    AfterUsername?: React.ReactNode;
};
declare const _default: React.FC<Props>;
export default _default;
