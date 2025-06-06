'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var deepMerge = require('../utils/deepMerge.cjs');

/**
 * Class representing metadata with support for nested keys and deep merging.
 */
class MetaData {
    constructor(meta = {}) {
        this.meta = {};
        this.meta = meta;
    }
    /**
     * Sets a value in the metadata using dot notation for nested keys.
     * @param {string} key - The key in dot notation (e.g., "a.b.c").
     * @param {unknown} value - The value to set.
     */
    set(key, value) {
        const data = {};
        key.split('.').reduce((acc, k, i, arr) => {
            if (i === arr.length - 1) {
                acc[k] = value;
            }
            else {
                if (!acc[k]) {
                    acc[k] = {};
                }
                return acc[k];
            }
        }, data);
        this.meta = deepMerge.deepMerge(this.meta, data);
    }
    /**
     * Retrieves the current metadata.
     * @returns {TMetaData} The metadata.
     */
    get() {
        return this.meta;
    }
    /**
     * Clears the metadata.
     */
    clear() {
        this.meta = {};
    }
    /**
     * Merges another MetaData instance into another MetaData instance.
     * @param {MetaData} meta - The MetaData instance to merge.
     * @returns {MetaData} A new MetaData instance with merged metadata.
     */
    merge(meta) {
        return new MetaData(deepMerge.deepMerge(this.get(), meta.get()));
    }
}

exports.MetaData = MetaData;
