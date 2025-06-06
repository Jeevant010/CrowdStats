export type UseTransitionEvents = {
    onEntered?: () => void;
    onEntering?: () => void;
    onExiting?: () => void;
    onUnmount?: () => void;
};
export type UseTransitionProps = {
    animateOnMount?: boolean;
    duration?: number;
    inDuration?: number;
    inDelay?: number;
    isShown?: boolean;
    outDuration?: number;
    outDelay?: number;
    delay?: number;
};
export type Props = UseTransitionProps & UseTransitionEvents;
export type TransitionStage = 'ENTERED' | 'ENTERING' | 'EXITING' | 'UNMOUNT';
export type UseTransitionResult = {
    currentDuration: number;
    mount: boolean;
    stage: TransitionStage;
};
export type UseTransitionType = (props: Props) => UseTransitionResult;
export declare const DEFAULT_DURATION = 100;
export declare const useTransition: UseTransitionType;
