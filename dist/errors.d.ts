import { FlowRequestTypes } from './types';
export declare const handleError: (error: Error, type: FlowRequestTypes, detail: any) => void;
export declare const getErrorMessage: (error: any, type: FlowRequestTypes, detail: any) => string;
export declare const fallbackErrorMessage: (error: Error, type: FlowRequestTypes, detail: any) => string;
