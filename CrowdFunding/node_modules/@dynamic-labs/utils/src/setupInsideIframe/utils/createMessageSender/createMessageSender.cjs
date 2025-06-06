'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const createMessageSender = (parentOrigin) => (eventName, ...args) => window.parent.postMessage({ args, eventName }, parentOrigin);

exports.createMessageSender = createMessageSender;
