'use client'
const DEFAULT_BREAKPOINT = 12;
const DEFAULT_CUT_END = 4;
const DEFAULT_CUT_START = 4;
const shortenString = (str, start, end) => str.replace(str.substring(start, end), '...');
const shortenEmail = (email, options) => {
    if (!email)
        return '';
    const breakpoint = (options === null || options === void 0 ? void 0 : options.breakpoint) || DEFAULT_BREAKPOINT;
    const cutStart = (options === null || options === void 0 ? void 0 : options.cutStart) || DEFAULT_CUT_START;
    const cutEnd = (options === null || options === void 0 ? void 0 : options.cutEnd) || DEFAULT_CUT_END;
    let [username, domain] = email.split('@');
    const shouldShortenUsername = (username === null || username === void 0 ? void 0 : username.length) > breakpoint;
    if (shouldShortenUsername) {
        username = shortenString(username, cutStart, username.length - cutEnd);
    }
    const shouldShortenDomain = (domain === null || domain === void 0 ? void 0 : domain.length) > breakpoint;
    if (shouldShortenDomain) {
        domain = shortenString(domain, cutStart, domain.length - cutEnd);
    }
    return `${username}@${domain}`;
};

export { shortenEmail };
