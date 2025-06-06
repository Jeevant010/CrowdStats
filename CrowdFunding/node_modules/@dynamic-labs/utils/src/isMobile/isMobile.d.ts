/**
 * Sourced from http://detectmobilebrowsers.com/
 */
export declare const isMobile: (maxTouchPointsOverride?: number) => boolean;
export declare const isIPhone: () => boolean;
export declare const isIPhone8OrEarlier: () => boolean;
/**
 * @param [optional] maxTouchPointsOverride - this is used for testing since
 * it seems that JSDOM doesn't support maxTouchPoints, so it was impossible
 * to mock it
 */
export declare const isIPad: (maxTouchPointsOverride?: number) => boolean;
export declare const isIOS: (maxTouchPointsOverride?: number) => boolean;
export declare const isAndroid: () => boolean;
export declare const isLegacySafari: () => boolean;
export declare const isSamsungBrowser: () => boolean;
export declare const isSafariBrowser: () => boolean;
export declare const isWindows: () => boolean;
export declare const getAndroidVersion: () => number | undefined;
