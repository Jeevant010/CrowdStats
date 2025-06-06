'use client'
const createMessageSender = (parentOrigin) => (eventName, ...args) => window.parent.postMessage({ args, eventName }, parentOrigin);

export { createMessageSender };
