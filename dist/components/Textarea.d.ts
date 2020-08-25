import * as React from 'react';
import { Trigger } from '../types';
export declare type Props = {
    rows: number;
    maxLength?: number;
    placeholder: string;
    onChange: (event: React.SyntheticEvent<HTMLTextAreaElement> | Event) => unknown;
    onPaste: (event: React.ClipboardEvent<HTMLTextAreaElement>) => unknown;
    value?: string;
    /** A ref that is bound to the textarea element */
    innerRef?: React.RefCallback<HTMLTextAreaElement>;
    /** An extra trigger for ReactTextareaAutocomplete, this can be used to show
     * a menu when typing @xxx or #xxx, in addition to the emoji menu when typing
     * :xxx  */
    trigger?: Trigger;
};
/**
 * Component is described here.
 *
 * @example ./examples/Textarea.md
 */
export default class Textarea extends React.Component<Props> {
    static defaultProps: {
        rows: number;
        placeholder: string;
        trigger: {};
    };
    render(): JSX.Element;
}
