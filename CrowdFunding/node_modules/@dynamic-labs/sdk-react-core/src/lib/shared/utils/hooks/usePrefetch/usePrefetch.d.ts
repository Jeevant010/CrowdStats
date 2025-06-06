type PrefetchProps = {
    href: string;
    as: string;
    type: string;
    id: string;
};
/**
 * Prefetches a resource
 * Adds a link element to the head of the document with the provided attributes
 * when the element is not already present
 * @param {PrefetchProps} prefetchProps
 * @returns {void}
 *
 * @example
 * usePrefetch({
 *  href: 'https://example.com/image.jpg',
 *  as: 'image',
 *  type: 'image/jpeg',
 *  id: 'image-prefetch',
 * });
 */
export declare const usePrefetch: ({ as, href, id, type }: PrefetchProps) => void;
export {};
