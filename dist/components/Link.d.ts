import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    to?: string;
    onClick?: (input: React.SyntheticEvent) => unknown;
};
/**
 *
 * @example ./examples/Link.md
 */
export default class Link extends React.Component<Props> {
    render(): JSX.Element;
}
