'use client'
/* eslint-disable arrow-body-style */
// This method needs to be wrapped correctly to avoid bundler issues
// that may update process.env variable via custom configs in customers apps
const DEFAULT_ICONIC_SPRITE_URL = 'https://iconic.dynamic-static-assets.com/icons/sprite.svg';
const getIconicSpriteUrl = () => {
    var _a, _b, _c;
    if (typeof process !== 'undefined' && process.env) {
        return ((_c = (_b = (_a = process.env['ICONIC_SPRITE_CDN_URL']) !== null && _a !== void 0 ? _a : process.env['NEXT_PUBLIC_ICONIC_SPRITE_CDN_URL']) !== null && _b !== void 0 ? _b : process.env['REACT_APP_ICONIC_SPRITE_CDN_URL']) !== null && _c !== void 0 ? _c : DEFAULT_ICONIC_SPRITE_URL);
    }
    return DEFAULT_ICONIC_SPRITE_URL;
};

export { getIconicSpriteUrl };
