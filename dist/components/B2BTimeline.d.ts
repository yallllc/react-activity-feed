import * as React from 'react';
/**
 * This component takes a list of activities and icons and transforms it into a timeline. Aimed at making B2B timelines easier. Does require a more custom data structure.
 *
 * @example ./examples/B2BTimeline.md
 */
export default class B2BTimeline extends React.Component<any> {
    sortByYearMonth(activities: any): {};
    timeline: (activities: any, icons: any, Activity: any) => JSX.Element[][];
    render(): JSX.Element;
}
