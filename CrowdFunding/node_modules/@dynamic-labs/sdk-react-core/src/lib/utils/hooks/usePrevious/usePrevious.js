'use client'
import { useRef, useEffect } from 'react';

/**
 * This is used to track a previous value of a variable.
 *
 * Example:
 *   const someHook = ({ value }) => {
 *     const previousValue = usePrevious(value);
 *     useEffect(() => {
 *      if (previousValue !== value) {
 *        // do something
 *      }
 *     }, [value, previousValue]);
 *   }
 *
 * When someHook is rendered for the first time with value = true, previousValue will be undefined
 * so the condition will be true and the effect will run. When someHook is rendered again with
 * value = true, previousValue will have been set to true so the condition will be false and the
 * effect will not run.
 */
const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};

export { usePrevious };
