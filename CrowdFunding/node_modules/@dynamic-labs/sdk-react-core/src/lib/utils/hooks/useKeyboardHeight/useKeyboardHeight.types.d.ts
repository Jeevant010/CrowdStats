export type WindowTarget = Pick<typeof window, 'innerHeight' | 'innerWidth' | 'addEventListener' | 'removeEventListener'>;
export type KeyboardHeightHookProps = {
    minHeightThreshold?: number;
    target?: WindowTarget;
};
export type KeyboardHeightHook = (props?: KeyboardHeightHookProps) => [number];
