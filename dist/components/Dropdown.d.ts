import * as React from 'react';
export declare type Props = {
    children?: React.ReactNode;
};
export declare type State = {
    open: boolean;
};
/**
 * Simple wrapper for a small dropdown.
 *
 * @example ./examples/Dropdown.md
 */
export default class Dropdown extends React.Component<Props, State> {
    dropdownBox: {
        current: null | HTMLDivElement;
    };
    constructor(props: Props);
    componentWillUnmount(): void;
    hideMenu: (e: any) => void;
    showMenu: (e: any) => void;
    render(): JSX.Element;
}
