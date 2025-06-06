type Prop = {
    callback?: () => void;
    seconds: number;
};
export interface UseCountdown {
    remainingSeconds: number;
    startCountdown: () => void;
    stopCountdown: () => void;
}
export declare const useCountdown: ({ callback, seconds }: Prop) => UseCountdown;
export {};
