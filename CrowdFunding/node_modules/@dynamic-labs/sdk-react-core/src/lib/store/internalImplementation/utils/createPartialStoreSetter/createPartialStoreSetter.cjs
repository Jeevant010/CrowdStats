'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createPartialStoreSetter = ({ get, set }) => (key, value) => set(Object.assign(Object.assign({}, get()), { [key]: value }));

exports.createPartialStoreSetter = createPartialStoreSetter;
