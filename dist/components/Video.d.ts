import React from 'react';
import { OgData } from '../types';
declare type Props = {
    og: OgData;
    handleClose?: (e: React.SyntheticEvent) => unknown;
    urlsThatAreGifs: string[];
};
/**
 * Component for rendering an Youtube or Vimeo embedded player
 * @example ./examples/Video.md
 */
export default class Video extends React.Component<Props> {
    static defaultProps: {
        urlsThatAreGifs: string[];
    };
    _handleClose: (e: React.SyntheticEvent) => void;
    render(): JSX.Element;
}
export {};
