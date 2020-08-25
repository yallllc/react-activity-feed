import React from 'react';
export declare type Props = {
    image?: string | null | undefined;
    images?: Array<{
        image: string;
    }>;
    alt?: string | null | undefined;
    title?: string | null | undefined;
    url?: string;
    nolink?: boolean;
    description?: string | null | undefined;
    handleClose?: (e: React.SyntheticEvent) => unknown;
};
/**
 * Component is described here.
 *
 * @example ./examples/Card.md
 */
export default class Card extends React.Component<Props> {
    trimUrl: (url: string) => any;
    _handleClose: (e: React.SyntheticEvent) => void;
    render(): JSX.Element;
}
