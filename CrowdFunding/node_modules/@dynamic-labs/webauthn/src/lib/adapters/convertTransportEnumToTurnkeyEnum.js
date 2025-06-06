'use client'
const convertTransportEnumToTurnkeyEnum = (transportEnum) => {
    switch (transportEnum) {
        case 'internal': {
            return 'AUTHENTICATOR_TRANSPORT_INTERNAL';
        }
        case 'usb': {
            return 'AUTHENTICATOR_TRANSPORT_USB';
        }
        case 'nfc': {
            return 'AUTHENTICATOR_TRANSPORT_NFC';
        }
        case 'ble': {
            return 'AUTHENTICATOR_TRANSPORT_BLE';
        }
        case 'hybrid': {
            return 'AUTHENTICATOR_TRANSPORT_HYBRID';
        }
        default: {
            throw new Error('unsupported transport format ' + transportEnum);
        }
    }
};

export { convertTransportEnumToTurnkeyEnum };
