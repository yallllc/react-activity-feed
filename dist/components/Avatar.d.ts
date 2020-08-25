import React from 'react';
export declare type Props = {
    size?: number;
    image?: string;
    alt?: string;
    rounded?: boolean;
    circle?: boolean;
    onClick?: (e: React.SyntheticEvent) => unknown;
};
/**
 *
 * @example ./examples/Avatar.md
 */
export default class Avatar extends React.PureComponent<Props> {
    render(): JSX.Element;
}
