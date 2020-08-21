/// <reference types="node" />
import * as React from 'react';
import { OgData } from '../types';
declare type Props = {
    og: OgData;
    handleClose?: (e: React.SyntheticEvent) => unknown;
};
declare type State = {
    open: boolean;
    playing: boolean;
    progress: number;
    updateProgress?: NodeJS.Timeout | null;
};
export default class Audio extends React.Component<Props, State> {
    audioRef: {
        current: HTMLAudioElement | null;
    };
    constructor(props: Props);
    playAudio: () => void;
    pauseAudio: () => void;
    updateProgress: () => void;
    componentWillUnmount(): void;
    _handleClose: (e: React.SyntheticEvent) => void;
    render(): JSX.Element;
}
export {};
