'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CreateTurnkeyEmbeddedWalletSpecificOpts = require('./CreateTurnkeyEmbeddedWalletSpecificOpts.cjs');

/* tslint:disable */
function CreateEmbeddedWalletSpecificOptsFromJSON(json) {
    return CreateEmbeddedWalletSpecificOptsFromJSONTyped(json);
}
function CreateEmbeddedWalletSpecificOptsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, CreateTurnkeyEmbeddedWalletSpecificOpts.CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json));
}
function CreateEmbeddedWalletSpecificOptsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign({}, CreateTurnkeyEmbeddedWalletSpecificOpts.CreateTurnkeyEmbeddedWalletSpecificOptsToJSON(value));
}

exports.CreateEmbeddedWalletSpecificOptsFromJSON = CreateEmbeddedWalletSpecificOptsFromJSON;
exports.CreateEmbeddedWalletSpecificOptsFromJSONTyped = CreateEmbeddedWalletSpecificOptsFromJSONTyped;
exports.CreateEmbeddedWalletSpecificOptsToJSON = CreateEmbeddedWalletSpecificOptsToJSON;
