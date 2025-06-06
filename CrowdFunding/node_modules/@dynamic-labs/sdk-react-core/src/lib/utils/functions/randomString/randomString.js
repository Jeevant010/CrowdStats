'use client'
const randomString = (length) => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let result = '';
    for (let i = length; i > 0; --i) {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return result;
};

export { randomString };
