import * as React from 'react';
declare type Props = {
    label: string;
    data: string | number;
};
/**
 * Component is described here.
 *
 * @example ./examples/DataLabel.md
 */
export default class DataLabel extends React.Component<Props> {
    static defaultProps: {
        label: string;
        data: string;
    };
    render(): JSX.Element;
}
export {};
