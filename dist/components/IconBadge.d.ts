import * as React from 'react';
export declare type Props = {
    children?: React.ReactNode;
    showNumber?: boolean;
    hidden?: boolean;
    feedGroup?: string;
    userId?: string;
    unseen: number;
    onClick?: () => unknown;
};
/**
 *
 * @example ./examples/IconBadge.md
 */
export default class IconBadge extends React.Component<Props> {
    render(): JSX.Element;
}
