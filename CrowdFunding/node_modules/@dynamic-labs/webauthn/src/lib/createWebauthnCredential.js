'use client'
import { __awaiter } from '../../_virtual/_tslib.js';
import { browserSupportsWebAuthn, startRegistration } from '@simplewebauthn/browser';
import { WebauthnNotSupportedError } from './errors/WebauthnNotSupportedError.js';
import { logger } from './logger.js';

const createWebauthnCredential = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!browserSupportsWebAuthn()) {
        throw new WebauthnNotSupportedError();
    }
    let attestationResp;
    try {
        attestationResp = yield startRegistration({
            optionsJSON: options,
        });
    }
    catch (error) {
        logger.debug('Failed to create webauthn credential', error);
        throw error;
    }
    return attestationResp;
});

export { createWebauthnCredential };
