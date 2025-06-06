/**
 * Hook that runs an effect only once based on a condition.
 *
 * @param {Function} effect - The effect callback function to run.
 * @param {boolean} condition - The condition that determines whether the effect should run.
 */
export declare const useEffectOnceCondition: (effect: () => void, condition: boolean) => void;
