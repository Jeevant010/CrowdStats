'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { WebauthnNotSupportedError } from './lib/errors/WebauthnNotSupportedError.js';
export { createWebauthnCredential } from './lib/createWebauthnCredential.js';
export { authenticateWebauthnCredential } from './lib/authenticateWebauthnCredential.js';
export { convertTransportEnumToTurnkeyEnum } from './lib/adapters/convertTransportEnumToTurnkeyEnum.js';
export { convertAttestationResultToTurnkey, convertPublicKeyToWebauthn, getWebAuthnAttestationTurnkeyAdapter } from './lib/adapters/getWebAuthnAttestationTurnkeyAdapter.js';

assertPackageVersion('@dynamic-labs/webauthn', version);
