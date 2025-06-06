'use client'
import { AuthenticatorTransportProtocol } from '@dynamic-labs/sdk-api-core';

const transportMap = {
    AUTHENTICATOR_TRANSPORT_BLE: AuthenticatorTransportProtocol.Ble,
    AUTHENTICATOR_TRANSPORT_HYBRID: AuthenticatorTransportProtocol.Hybrid,
    AUTHENTICATOR_TRANSPORT_INTERNAL: AuthenticatorTransportProtocol.Internal,
    AUTHENTICATOR_TRANSPORT_NFC: AuthenticatorTransportProtocol.Nfc,
    AUTHENTICATOR_TRANSPORT_USB: AuthenticatorTransportProtocol.Usb,
};
const convertAttestationTransports = (attestationTransports) => attestationTransports.map((transport) => transportMap[transport]);

export { convertAttestationTransports };
