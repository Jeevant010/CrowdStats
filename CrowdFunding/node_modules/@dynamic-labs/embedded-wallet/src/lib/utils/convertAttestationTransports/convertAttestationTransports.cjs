'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const transportMap = {
    AUTHENTICATOR_TRANSPORT_BLE: sdkApiCore.AuthenticatorTransportProtocol.Ble,
    AUTHENTICATOR_TRANSPORT_HYBRID: sdkApiCore.AuthenticatorTransportProtocol.Hybrid,
    AUTHENTICATOR_TRANSPORT_INTERNAL: sdkApiCore.AuthenticatorTransportProtocol.Internal,
    AUTHENTICATOR_TRANSPORT_NFC: sdkApiCore.AuthenticatorTransportProtocol.Nfc,
    AUTHENTICATOR_TRANSPORT_USB: sdkApiCore.AuthenticatorTransportProtocol.Usb,
};
const convertAttestationTransports = (attestationTransports) => attestationTransports.map((transport) => transportMap[transport]);

exports.convertAttestationTransports = convertAttestationTransports;
