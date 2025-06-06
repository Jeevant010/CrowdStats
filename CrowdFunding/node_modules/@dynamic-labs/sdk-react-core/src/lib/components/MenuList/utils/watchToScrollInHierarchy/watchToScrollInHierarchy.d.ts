/** Listens for scroll events in all elements in the hierarchy range between the root and the element,
 * and executes the callback whenever it is triggered.
 * @returns A callback to clean up all event listeners created
 */
export declare const watchToScrollInHierarchy: (root: HTMLElement, element: HTMLElement, callback: () => void) => () => void;
