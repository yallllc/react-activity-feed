import * as React from 'react';
import { Streami18Ctx } from '../Context';
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
} & Streami18Ctx;
declare const _default: {
    (props: any): JSX.Element;
    displayName: any;
};
export default _default;
