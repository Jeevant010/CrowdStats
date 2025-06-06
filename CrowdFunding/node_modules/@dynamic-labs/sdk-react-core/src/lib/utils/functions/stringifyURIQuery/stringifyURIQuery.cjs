'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const stringifyURIQuery = (obj) => {
    const str = [];
    for (const prop in obj) {
        str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
    }
    return str.join('&');
};

exports.stringifyURIQuery = stringifyURIQuery;
