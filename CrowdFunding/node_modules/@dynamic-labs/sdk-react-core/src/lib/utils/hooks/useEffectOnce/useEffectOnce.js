'use client'
import { useEffect } from 'react';

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
const useEffectOnce = (effect) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
};

export { useEffectOnce };
