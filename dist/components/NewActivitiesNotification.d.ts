/// <reference types="react" />
import { Streami18Ctx } from '../Context';
export declare type Props = Streami18Ctx & {
    adds: Array<{}>;
    deletes: Array<{}>;
    labelSingle?: string;
    labelPlural?: string;
    /** A function that returns either the string to display or null in case no
     * notification should be displayed */
    labelFunction?: (input: {
        count: number;
        deleteCount: number;
        addCount: number;
        labelPlural?: string;
        labelSingle?: string;
    }) => string | null;
    onClick?: () => unknown;
};
declare const _default: {
    (props: any): JSX.Element;
    displayName: any;
};
export default _default;
