'use client'
const stringifyURIQuery = (obj) => {
    const str = [];
    for (const prop in obj) {
        str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
    }
    return str.join('&');
};

export { stringifyURIQuery };
