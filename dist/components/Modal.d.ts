import React, { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => unknown;
};
/**
 * Component is described here.
 *
 * @example ./examples/Modal.md
 */
export default class Modal extends React.Component<Props> {
    modalRef: {
        current: null | HTMLDivElement;
    };
    constructor(props: Props);
    static defaultProps: {
        open: boolean;
        onClose: () => void;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleKeyUp: (e: any) => void;
    handleOutsideClick: (event: any) => void;
    setBodyStyle(): void;
    render(): JSX.Element;
}
export {};
