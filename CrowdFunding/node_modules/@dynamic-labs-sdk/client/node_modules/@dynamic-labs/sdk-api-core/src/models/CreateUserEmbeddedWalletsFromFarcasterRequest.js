import { EmbeddedWalletChainEnumFromJSON, EmbeddedWalletChainEnumToJSON } from './EmbeddedWalletChainEnum.js';

/* tslint:disable */
function CreateUserEmbeddedWalletsFromFarcasterRequestFromJSON(json) {
    return CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped(json);
}
function CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'fid': json['fid'],
        'chains': (json['chains'].map(EmbeddedWalletChainEnumFromJSON)),
    };
}
function CreateUserEmbeddedWalletsFromFarcasterRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'fid': value.fid,
        'chains': (value.chains.map(EmbeddedWalletChainEnumToJSON)),
    };
}

export { CreateUserEmbeddedWalletsFromFarcasterRequestFromJSON, CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped, CreateUserEmbeddedWalletsFromFarcasterRequestToJSON };
