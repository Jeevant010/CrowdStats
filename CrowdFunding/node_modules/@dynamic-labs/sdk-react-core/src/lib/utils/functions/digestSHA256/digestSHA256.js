'use client'
const digestSHA256 = (str) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return window.crypto.subtle.digest('SHA-256', data);
};

export { digestSHA256 };
