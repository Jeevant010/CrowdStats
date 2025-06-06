import { exists } from '../runtime.js';

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
        'newServerKeygenIds': !exists(json, 'newServerKeygenIds') ? undefined : json['newServerKeygenIds'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
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

export { OpenRoomResponseWithServerKeygenIdsFromJSON, OpenRoomResponseWithServerKeygenIdsFromJSONTyped, OpenRoomResponseWithServerKeygenIdsToJSON };
