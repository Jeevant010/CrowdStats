import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { OauthProviderRequestFromJSON, OauthProviderRequestToJSON } from './OauthProviderRequest.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';
import { WalletAdditionalAddressFromJSON, WalletAdditionalAddressToJSON } from './WalletAdditionalAddress.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

/* tslint:disable */
function VerifyRequestFromJSON(json) {
    return VerifyRequestFromJSONTyped(json);
}
function VerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'oauth': !exists(json, 'oauth') ? undefined : OauthProviderRequestFromJSON(json['oauth']),
        'signedMessage': json['signedMessage'],
        'messageToSign': json['messageToSign'],
        'publicWalletAddress': json['publicWalletAddress'],
        'chain': ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'walletProvider': WalletProviderEnumFromJSON(json['walletProvider']),
        'skipEmptyAccountCheck': !exists(json, 'skipEmptyAccountCheck') ? undefined : json['skipEmptyAccountCheck'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'additionalWalletAddresses': !exists(json, 'additionalWalletAddresses') ? undefined : (json['additionalWalletAddresses'].map(WalletAdditionalAddressFromJSON)),
        'backup': !exists(json, 'backup') ? undefined : json['backup'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'passwordSource': !exists(json, 'passwordSource') ? undefined : PasswordSourceTypeEnumFromJSON(json['passwordSource']),
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function VerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'oauth': OauthProviderRequestToJSON(value.oauth),
        'signedMessage': value.signedMessage,
        'messageToSign': value.messageToSign,
        'publicWalletAddress': value.publicWalletAddress,
        'chain': ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'walletProvider': WalletProviderEnumToJSON(value.walletProvider),
        'skipEmptyAccountCheck': value.skipEmptyAccountCheck,
        'captchaToken': value.captchaToken,
        'network': value.network,
        'additionalWalletAddresses': value.additionalWalletAddresses === undefined ? undefined : (value.additionalWalletAddresses.map(WalletAdditionalAddressToJSON)),
        'backup': value.backup,
        'password': value.password,
        'passwordSource': PasswordSourceTypeEnumToJSON(value.passwordSource),
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { VerifyRequestFromJSON, VerifyRequestFromJSONTyped, VerifyRequestToJSON };
