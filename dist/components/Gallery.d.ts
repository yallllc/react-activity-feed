import * as React from 'react';
export declare type Props = {
    images: string[];
};
export declare type State = {
    lightboxIsOpen: boolean;
    currentImage: number;
};
/**
 * Component is described here.
 *
 * @example ./examples/Gallery.md
 */
export default class Gallery extends React.Component<Props, State> {
    constructor(props: Props);
    gotoPrevious: () => void;
    gotoNext: () => void;
    openLightbox: (image?: number) => void;
    closeLightbox: () => void;
    getImages: (images: any) => any;
    render(): JSX.Element;
}
