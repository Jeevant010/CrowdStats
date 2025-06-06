'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { bufferToBase64URLString } from '@simplewebauthn/browser';
import { createWebauthnCredential } from '../createWebauthnCredential.js';
import { convertTransportEnumToTurnkeyEnum } from './convertTransportEnumToTurnkeyEnum.js';

// As part of migrating off of turnkey for passkeys, swap out the turnkey implementation of this
// with our own. Next we should move the PasskeyService out of embedded-wallets in favor of purely in
// the `passkey` package GVTY-2169
// for now continue to use the turnkey input and output types here to not make any breaking changes.
// input: turnkey type => convert to our type => create attestation => output: converted to turnkey type
const getWebAuthnAttestationTurnkeyAdapter = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.publicKey) {
        throw new Error('Invalid options. Public key attribute must be defined');
    }
    const attestation = yield createWebauthnCredential(convertPublicKeyToWebauthn(options.publicKey));
    return convertAttestationResultToTurnkey(attestation);
});
const convertAttestationResultToTurnkey = (attestation) => {
    var _a;
    return ({
        attestationObject: attestation.response.attestationObject,
        clientDataJson: attestation.response.clientDataJSON,
        credentialId: attestation.rawId,
        transports: ((_a = attestation.response.transports) === null || _a === void 0 ? void 0 : _a.map(convertTransportEnumToTurnkeyEnum)) ||
            [],
    });
};
const convertPublicKeyToWebauthn = (publicKey) => {
    var _a;
    return (Object.assign(Object.assign({}, publicKey), { challenge: bufferSourceToString(publicKey.challenge), excludeCredentials: (_a = publicKey.excludeCredentials) === null || _a === void 0 ? void 0 : _a.map((cred) => (Object.assign(Object.assign({}, cred), { id: bufferSourceToString(cred.id) }))), user: Object.assign(Object.assign({}, publicKey.user), { id: bufferSourceToString(publicKey.user.id) }) }));
};
const bufferSourceToString = (buf) => {
    if (buf instanceof ArrayBuffer) {
        return bufferToBase64URLString(buf);
    }
    else {
        const arr = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
        return bufferToBase64URLString(arr);
    }
};

export { convertAttestationResultToTurnkey, convertPublicKeyToWebauthn, getWebAuthnAttestationTurnkeyAdapter };
