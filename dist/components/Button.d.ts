import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    buttonStyle: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: (input: React.SyntheticEvent<HTMLButtonElement>) => unknown;
    onKeyPress?: (input: React.SyntheticEvent<HTMLButtonElement>) => unknown;
    disabled: boolean;
    loading: boolean;
};
/**
 *
 * @example ./examples/Button.md
 */
export default class Button extends React.Component<Props> {
    static defaultProps: {
        buttonStyle: string;
        type: string;
        disabled: boolean;
        loading: boolean;
    };
    render(): JSX.Element;
}
