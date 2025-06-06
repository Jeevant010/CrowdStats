import { MutableRefObject } from 'react';
import { DeferredPromise } from '@dynamic-labs/utils';
export declare const resolvePromiseRef: <T>(promise: MutableRefObject<DeferredPromise<T> | null | undefined>, value: T) => void;
