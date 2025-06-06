'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { createStore } from './lib/createStore/createStore.js';
export { persist } from './lib/persist/persist.js';
export { subscribeWithSelector } from './lib/subscribeWithSelector/subscribeWithSelector.js';

assertPackageVersion('@dynamic-labs/store', version);
