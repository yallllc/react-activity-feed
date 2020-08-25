import * as React from 'react';
import { Renderable } from '../types';
export declare type Props = {
    children?: React.ReactNode;
    Header?: Renderable;
    Footer?: Renderable;
    left: boolean;
    right: boolean;
    arrow: boolean;
};
/**
 * `DropdownPanel` is a more advanced component used to create a notification dropdown for instance, it comes with three parts: `Header`, `Content` and `Footer`. The content has a limited height and the `overflow` is set to `scroll`.
 *
 * @example ./examples/DropdownPanel.md
 */
export default class DropdownPanel extends React.Component<Props> {
    static defaultProps: {
        arrow: boolean;
        left: boolean;
        right: boolean;
    };
    render(): JSX.Element;
}
