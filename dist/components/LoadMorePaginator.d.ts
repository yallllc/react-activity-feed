import * as React from 'react';
import { Renderable } from '../types';
declare type Props = {
    /** The button the user should click to click to load more */
    LoadMoreButton: Renderable;
    /** callback to load the next page */
    loadNextPage: () => Promise<any>;
    /** indicates if there is a next page to load */
    hasNextPage: boolean;
    /** indicates if there there's currently any refreshing taking place */
    refreshing: boolean;
    /** display the items in opposite order */
    reverse: boolean;
    /** The paginated content to display */
    children: React.ReactNode;
};
export default class LoadMorePaginator extends React.Component<Props> {
    static defaultProps: {
        LoadMoreButton: React.FC<{
            onClick: () => unknown;
            refreshing: boolean;
            children: React.ReactNode;
        }>;
    };
    render(): JSX.Element;
}
export {};
