import { exists } from '../runtime.js';

/* tslint:disable */
function OpenRoomResponseForReshareFromJSON(json) {
    return OpenRoomResponseForReshareFromJSONTyped(json);
}
function OpenRoomResponseForReshareFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomId': json['roomId'],
        'serverKeygenIds': json['serverKeygenIds'],
        'newServerKeygenIds': json['newServerKeygenIds'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}
function OpenRoomResponseForReshareToJSON(value) {
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

export { OpenRoomResponseForReshareFromJSON, OpenRoomResponseForReshareFromJSONTyped, OpenRoomResponseForReshareToJSON };
