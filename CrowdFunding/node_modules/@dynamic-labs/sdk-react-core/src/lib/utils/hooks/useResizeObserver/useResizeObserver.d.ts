import { RefObject } from 'react';
export interface ResizeObserverEntry {
    contentRect: DOMRectReadOnly;
    target: HTMLElement;
}
export declare const useResizeObserver: (ref: RefObject<HTMLElement>, callback?: (entry: DOMRectReadOnly) => void) => [DOMRectReadOnly | undefined];
