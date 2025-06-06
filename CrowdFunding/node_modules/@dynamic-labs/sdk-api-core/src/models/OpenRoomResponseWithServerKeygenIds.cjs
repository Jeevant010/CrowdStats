'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OpenRoomResponseWithServerKeygenIdsFromJSON(json) {
    return OpenRoomResponseWithServerKeygenIdsFromJSONTyped(json);
}
function OpenRoomResponseWithServerKeygenIdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomId': json['roomId'],
        'serverKeygenIds': json['serverKeygenIds'],
        'newServerKeygenIds': !runtime.exists(json, 'newServerKeygenIds') ? undefined : json['newServerKeygenIds'],
        'walletId': !runtime.exists(json, 'walletId') ? undefined : json['walletId'],
    };
}
function OpenRoomResponseWithServerKeygenIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomId': value.roomId,
        'serverKeygenIds': value.serverKeygenIds,
        'newServerKeygenIds': value.newServerKeygenIds,
        'walletId': value.walletId,
    };
}

exports.OpenRoomResponseWithServerKeygenIdsFromJSON = OpenRoomResponseWithServerKeygenIdsFromJSON;
exports.OpenRoomResponseWithServerKeygenIdsFromJSONTyped = OpenRoomResponseWithServerKeygenIdsFromJSONTyped;
exports.OpenRoomResponseWithServerKeygenIdsToJSON = OpenRoomResponseWithServerKeygenIdsToJSON;
