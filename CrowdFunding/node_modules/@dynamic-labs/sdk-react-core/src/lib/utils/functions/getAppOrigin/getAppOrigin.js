'use client'
const getAppOrigin = () => {
    if (typeof window !== 'undefined') {
        // TODO: use PlatformService
        return window.location.origin;
    }
    return undefined;
};

export { getAppOrigin };
