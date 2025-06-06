'use client'
const encodeBase64URL = (str) => {
    const numberArray = [];
    new Uint8Array(str).forEach((item) => numberArray.push(item));
    return btoa(String.fromCharCode.apply(null, numberArray))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
};

export { encodeBase64URL };
