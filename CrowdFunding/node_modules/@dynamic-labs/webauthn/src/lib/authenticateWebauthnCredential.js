'use client'
import { __awaiter } from '../../_virtual/_tslib.js';
import { browserSupportsWebAuthn, startAuthentication } from '@simplewebauthn/browser';
import { WebauthnNotSupportedError } from './errors/WebauthnNotSupportedError.js';
import { logger } from './logger.js';

const authenticateWebauthnCredential = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!browserSupportsWebAuthn()) {
        throw new WebauthnNotSupportedError();
    }
    let assertionResp;
    try {
        assertionResp = yield startAuthentication({
            optionsJSON: options,
        });
    }
    catch (error) {
        logger.debug('Failed to authenticate webauthn credential', error);
        throw error;
    }
    return assertionResp;
});

export { authenticateWebauthnCredential };
