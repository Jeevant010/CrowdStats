'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OpenRoomResponseFromJSON(json) {
    return OpenRoomResponseFromJSONTyped(json);
}
function OpenRoomResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomId': json['roomId'],
        'serverKeygenIds': !runtime.exists(json, 'serverKeygenIds') ? undefined : json['serverKeygenIds'],
        'newServerKeygenIds': !runtime.exists(json, 'newServerKeygenIds') ? undefined : json['newServerKeygenIds'],
        'walletId': !runtime.exists(json, 'walletId') ? undefined : json['walletId'],
    };
}
function OpenRoomResponseToJSON(value) {
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

exports.OpenRoomResponseFromJSON = OpenRoomResponseFromJSON;
exports.OpenRoomResponseFromJSONTyped = OpenRoomResponseFromJSONTyped;
exports.OpenRoomResponseToJSON = OpenRoomResponseToJSON;
