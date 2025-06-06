'use client'
const base64UrlEncode = (challenge) => Buffer.from(challenge)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

export { base64UrlEncode };
