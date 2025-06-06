import { exists } from '../runtime.js';

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
        'serverKeygenIds': !exists(json, 'serverKeygenIds') ? undefined : json['serverKeygenIds'],
        'newServerKeygenIds': !exists(json, 'newServerKeygenIds') ? undefined : json['newServerKeygenIds'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
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

export { OpenRoomResponseFromJSON, OpenRoomResponseFromJSONTyped, OpenRoomResponseToJSON };
