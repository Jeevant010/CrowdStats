export interface ICanceller {
    id: number;
}
export declare const animationFrameTimeout: (callback: () => void, duration: number) => ICanceller;
export declare const clearAnimationFrameTimeout: (canceller: ICanceller) => void;
