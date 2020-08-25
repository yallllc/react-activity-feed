import React from 'react';
export declare type Props = {
    /** callback function used on click */
    onClick?: () => unknown;
    /** initial follow state */
    followed?: boolean;
};
export declare type State = {
    followed: boolean;
};
/**
 * Component is described here.
 *
 * @example ./examples/FollowButton.md
 */
export default class FollowButton extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
