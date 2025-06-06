import { CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped, CreateTurnkeyEmbeddedWalletSpecificOptsToJSON } from './CreateTurnkeyEmbeddedWalletSpecificOpts.js';

/* tslint:disable */
function CreateEmbeddedWalletSpecificOptsFromJSON(json) {
    return CreateEmbeddedWalletSpecificOptsFromJSONTyped(json);
}
function CreateEmbeddedWalletSpecificOptsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json));
}
function CreateEmbeddedWalletSpecificOptsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign({}, CreateTurnkeyEmbeddedWalletSpecificOptsToJSON(value));
}

export { CreateEmbeddedWalletSpecificOptsFromJSON, CreateEmbeddedWalletSpecificOptsFromJSONTyped, CreateEmbeddedWalletSpecificOptsToJSON };
