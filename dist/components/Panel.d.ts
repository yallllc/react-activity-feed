import * as React from 'react';
declare type PanelStyle = 'rounded' | 'square';
export declare type Props = {
    panelStyle: PanelStyle;
    children: React.ReactNode;
};
/**
 * Simple Components that renders a panel. To be combined with PanelHeader, PanelContent, PanelFooter. Used by the library to render the B2BActivity and StatusUpdateForm
 *
 * @example ./examples/Panel.md
 */
export default class Panel extends React.Component<Props> {
    static defaultProps: {
        panelStyle: string;
    };
    render(): JSX.Element;
}
export {};
