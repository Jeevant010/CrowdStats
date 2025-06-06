'use client'
import { WebauthnStamper } from '@turnkey/webauthn-stamper';
import { getWebAuthnAttestationTurnkeyAdapter } from '@dynamic-labs/webauthn';

const createTurnkeyPasskeyService = () => ({
    createWebauthnStamper: (config) => new WebauthnStamper(config),
    getWebAuthnAttestation: getWebAuthnAttestationTurnkeyAdapter,
});

export { createTurnkeyPasskeyService };
