import * as React from 'react';
declare type Align = 'center' | 'flex-start' | 'flex-end';
declare type Justify = 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
declare type JustifySelf = 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'stretch';
declare type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
declare type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
declare type Props = {
    children: React.ReactNode;
    a?: Align;
    j?: Justify;
    js?: JustifySelf;
    d: Direction;
    w: Wrap;
    style?: any;
};
/**
 * Simple Flex wrapper for centering UI elements. To be expanded in the future.
 *
 * @example ./examples/Flex.md
 */
export default class Flex extends React.Component<Props> {
    static defaultProps: {
        d: string;
        w: string;
    };
    render(): JSX.Element;
}
export {};
