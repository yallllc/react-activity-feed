import React from 'react';
import { UserResponse } from '../types';
export declare type Props = {
    users: UserResponse[];
    avatarSize: number;
    limit: number;
    onClickUser?: (input: UserResponse) => unknown;
};
/**
 * Component is described here.
 *
 * @example ./examples/AvatarGroup.md
 */
export default class AvatarGroup extends React.Component<Props> {
    static defaultProps: {
        avatarSize: number;
        limit: number;
    };
    _getOnClickUser(user: UserResponse): (e: React.SyntheticEvent) => unknown;
    onClickUser: (e: React.SyntheticEvent, user: UserResponse) => unknown;
    render(): JSX.Element;
}
