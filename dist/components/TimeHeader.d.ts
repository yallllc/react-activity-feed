import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
};
/**
 * Renders a header with a line. Does not neccesarily need a time stamp.
 *
 * @example ./examples/TimeHeader.md
 */
export default class TimeHeader extends React.Component<Props> {
    render(): JSX.Element;
}
