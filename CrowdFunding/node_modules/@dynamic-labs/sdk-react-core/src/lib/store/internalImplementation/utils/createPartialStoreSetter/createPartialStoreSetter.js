'use client'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createPartialStoreSetter = ({ get, set }) => (key, value) => set(Object.assign(Object.assign({}, get()), { [key]: value }));

export { createPartialStoreSetter };
