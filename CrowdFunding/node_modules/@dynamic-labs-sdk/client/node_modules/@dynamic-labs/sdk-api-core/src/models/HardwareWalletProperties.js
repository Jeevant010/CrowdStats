import { exists } from '../runtime.js';
import { HardwareWalletEnumFromJSON, HardwareWalletEnumToJSON } from './HardwareWalletEnum.js';

/* tslint:disable */
function HardwareWalletPropertiesFromJSON(json) {
    return HardwareWalletPropertiesFromJSONTyped(json);
}
function HardwareWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hardwareWallet': !exists(json, 'hardwareWallet') ? undefined : HardwareWalletEnumFromJSON(json['hardwareWallet']),
    };
}
function HardwareWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hardwareWallet': HardwareWalletEnumToJSON(value.hardwareWallet),
    };
}

export { HardwareWalletPropertiesFromJSON, HardwareWalletPropertiesFromJSONTyped, HardwareWalletPropertiesToJSON };
