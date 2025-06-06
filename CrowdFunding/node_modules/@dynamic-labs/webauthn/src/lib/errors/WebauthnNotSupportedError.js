'use client'
class WebauthnNotSupportedError extends Error {
    constructor() {
        super('Webauthn is not supported on this device');
    }
}

export { WebauthnNotSupportedError };
