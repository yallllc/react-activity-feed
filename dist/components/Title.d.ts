import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    size: number;
};
/**
 * Component is described here.
 *
 * @example ./examples/Title.md
 */
export default class Title extends React.Component<Props> {
    static defaultProps: {
        size: number;
    };
    render(): JSX.Element;
}
