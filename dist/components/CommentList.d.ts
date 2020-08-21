import React from 'react';
import LoadMorePaginator from './LoadMorePaginator';
import { Renderable } from '../types';
export declare type Props = {
    /** The ID of the activity for which these comments are */
    activityId: string;
    /** The component that should render the comment */
    CommentItem: Renderable;
    /** By default pagination is done with a "Load more" button, you can use
     * InifiniteScrollPaginator to enable infinite scrolling */
    Paginator: Renderable;
    /** Only needed for reposted activities where you want to show the comments
     * of the original activity, not of the repost */
    activityPath?: string[];
    /** Show and load comments starting with the oldest reaction first, instead
     * of the default where comments are displayed and loaded most recent first.
     */
    oldestToNewest: boolean;
    /** Reverse the order the comments are displayed in. */
    reverseOrder: boolean;
};
/**
 * CommentList uses ReactionList under the hood to render a list of comments.
 *
 * @example ./examples/CommentList.md
 */
export default class CommentList extends React.PureComponent<Props> {
    static defaultProps: {
        Paginator: typeof LoadMorePaginator;
        CommentItem: {
            (props: any): JSX.Element;
            displayName: any;
        };
        oldestToNewest: boolean;
        reverseOrder: boolean;
    };
    _Reaction: Renderable;
    render(): JSX.Element;
}
