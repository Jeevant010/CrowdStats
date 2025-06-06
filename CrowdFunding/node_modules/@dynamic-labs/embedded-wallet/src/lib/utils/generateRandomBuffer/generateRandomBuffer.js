'use client'
const generateRandomBuffer = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);
    return arr.buffer;
};

export { generateRandomBuffer };
