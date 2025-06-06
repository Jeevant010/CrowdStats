type TMetaData = Record<string, any>;
/**
 * Class representing metadata with support for nested keys and deep merging.
 */
export declare class MetaData {
    private meta;
    constructor(meta?: TMetaData);
    /**
     * Sets a value in the metadata using dot notation for nested keys.
     * @param {string} key - The key in dot notation (e.g., "a.b.c").
     * @param {unknown} value - The value to set.
     */
    set(key: string, value: unknown): void;
    /**
     * Retrieves the current metadata.
     * @returns {TMetaData} The metadata.
     */
    get(): TMetaData;
    /**
     * Clears the metadata.
     */
    clear(): void;
    /**
     * Merges another MetaData instance into another MetaData instance.
     * @param {MetaData} meta - The MetaData instance to merge.
     * @returns {MetaData} A new MetaData instance with merged metadata.
     */
    merge(meta: MetaData): MetaData;
}
export {};
