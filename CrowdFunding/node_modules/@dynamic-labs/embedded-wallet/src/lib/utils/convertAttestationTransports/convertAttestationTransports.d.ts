import { AuthenticatorTransportProtocol } from '@dynamic-labs/sdk-api-core';
type AttestationTransports = 'AUTHENTICATOR_TRANSPORT_BLE' | 'AUTHENTICATOR_TRANSPORT_INTERNAL' | 'AUTHENTICATOR_TRANSPORT_NFC' | 'AUTHENTICATOR_TRANSPORT_HYBRID' | 'AUTHENTICATOR_TRANSPORT_USB';
export declare const convertAttestationTransports: (attestationTransports: AttestationTransports[]) => AuthenticatorTransportProtocol[];
export {};
