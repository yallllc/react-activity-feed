import React, { RefObject } from 'react';
import { Renderable } from '../types';
declare type Props = {
    /** callback to load the next page */
    loadNextPage: () => Promise<any>;
    getScrollParent: () => RefObject<HTMLElement>;
    /** indicates if there is a next page to load */
    hasNextPage: boolean;
    /** indicates if there there's currently any refreshing taking place */
    refreshing: boolean;
    /** display the items in opposite order */
    reverse: boolean;
    /** threshold to trigger the loadNextPage */
    threshold: number;
    /** The paginated content to display */
    children: React.ReactNode;
    /** Component to show when paginator is loading **/
    Loader: Renderable;
    /** If false, scroll listeners will be attached to the parent element instead of the window  **/
    useWindow: boolean;
};
export default class InfiniteScrollPaginator extends React.Component<Props> {
    static defaultProps: {
        Loader: JSX.Element;
        threshold: number;
        useWindow: boolean;
    };
    render(): JSX.Element;
}
export {};
