import { EffectCallback } from 'react';
/**
 * Runs an effect function only once during component initialization.
 *
 * @param {Function} effect - The effect function to be executed.
 * @returns {void}
 *
 * @example
 * function ExampleComponent() {
 *   useEffectOnce(() => {
 *     console.log('Effect executed once');
 *   });
 *
 *   return <div>Example Component</div>;
 * }
 */
export declare const useEffectOnce: (effect: EffectCallback) => void;
