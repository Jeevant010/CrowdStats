import { exists } from '../runtime.js';
import { CreateEmbeddedWalletSpecificOptsFromJSON, CreateEmbeddedWalletSpecificOptsToJSON } from './CreateEmbeddedWalletSpecificOpts.js';
import { EmbeddedWalletChainEnumFromJSON, EmbeddedWalletChainEnumToJSON } from './EmbeddedWalletChainEnum.js';
import { EmbeddedWalletProviderEnumFromJSON, EmbeddedWalletProviderEnumToJSON } from './EmbeddedWalletProviderEnum.js';

/* tslint:disable */
function CreateEmbeddedWalletParamsFromJSON(json) {
    return CreateEmbeddedWalletParamsFromJSONTyped(json);
}
function CreateEmbeddedWalletParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chains': !exists(json, 'chains') ? undefined : (json['chains'].map(EmbeddedWalletChainEnumFromJSON)),
        'chain': !exists(json, 'chain') ? undefined : EmbeddedWalletChainEnumFromJSON(json['chain']),
        'embeddedWalletProvider': EmbeddedWalletProviderEnumFromJSON(json['embeddedWalletProvider']),
        'embeddedWalletSpecificOpts': !exists(json, 'embeddedWalletSpecificOpts') ? undefined : CreateEmbeddedWalletSpecificOptsFromJSON(json['embeddedWalletSpecificOpts']),
        'isAuthenticatorAttached': !exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
        'passkeyAlias': !exists(json, 'passkeyAlias') ? undefined : json['passkeyAlias'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function CreateEmbeddedWalletParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chains': value.chains === undefined ? undefined : (value.chains.map(EmbeddedWalletChainEnumToJSON)),
        'chain': EmbeddedWalletChainEnumToJSON(value.chain),
        'embeddedWalletProvider': EmbeddedWalletProviderEnumToJSON(value.embeddedWalletProvider),
        'embeddedWalletSpecificOpts': CreateEmbeddedWalletSpecificOptsToJSON(value.embeddedWalletSpecificOpts),
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
        'passkeyAlias': value.passkeyAlias,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { CreateEmbeddedWalletParamsFromJSON, CreateEmbeddedWalletParamsFromJSONTyped, CreateEmbeddedWalletParamsToJSON };
