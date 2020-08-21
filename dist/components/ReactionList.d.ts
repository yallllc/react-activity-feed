import * as React from 'react';
import LoadMorePaginator from './LoadMorePaginator';
import { Renderable } from '../types';
declare type Props = {
    /** The ID of the activity for which these reactions are */
    activityId: string;
    /** The reaction kind that you want to display in this list, e.g `like` or
     * `comment` */
    reactionKind: string;
    /** The component that should render the reaction */
    Reaction: Renderable;
    /** By default pagination is done with a "Load more" button, you can use
     * InifiniteScrollPaginator to enable infinite scrolling */
    Paginator: Renderable;
    /** Only needed for reposted activities where you want to show the reactions
     * of the original activity, not of the repost */
    activityPath?: string[];
    /** Show and load reactions starting with the oldest reaction first, instead
     * of the default where reactions are displayed and loaded most recent first.
     * */
    oldestToNewest: boolean;
    /** Reverse the order the reactions are displayed in. */
    reverseOrder: boolean;
};
export default class ReactionList extends React.PureComponent<Props> {
    static defaultProps: {
        Paginator: typeof LoadMorePaginator;
        oldestToNewest: boolean;
        reverseOrder: boolean;
    };
    render(): JSX.Element;
}
export {};
