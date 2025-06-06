'use client'
import { Buffer } from 'buffer/index.js';

/* eslint-disable */
/**
 * This is needed for the browser to work with buffer
 */
if (typeof window !== 'undefined') {
    window.global = globalThis;
    if (!window.Buffer && typeof window.Buffer === 'undefined') {
        Object.assign(window, { Buffer });
    }
}
