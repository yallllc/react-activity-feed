/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const styles: ({ space, fontFamily, fontSize, color }: {
    space: any;
    fontFamily: any;
    fontSize: any;
    color: any;
}) => {
    pathline: {
        fontFamily: any;
        fontSize: any;
        color: any;
        wordBreak: string;
    };
    copyButton: {
        marginLeft: any;
    };
};
export declare function PathlineRenderer({ classes, children }: {
    classes: any;
    children: any;
}): JSX.Element;
export declare namespace PathlineRenderer {
    var propTypes: {
        classes: PropTypes.Validator<object>;
        children: PropTypes.Requireable<string>;
    };
}
declare const _default: any;
export default _default;
