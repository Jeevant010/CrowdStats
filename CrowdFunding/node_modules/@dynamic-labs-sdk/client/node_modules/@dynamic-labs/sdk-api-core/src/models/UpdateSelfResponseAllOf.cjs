'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EmailVerificationCreateResponse = require('./EmailVerificationCreateResponse.cjs');
var NextViewEnum = require('./NextViewEnum.cjs');
var SmsVerificationCreateResponse = require('./SmsVerificationCreateResponse.cjs');

/* tslint:disable */
function UpdateSelfResponseAllOfFromJSON(json) {
    return UpdateSelfResponseAllOfFromJSONTyped(json);
}
function UpdateSelfResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nextView': NextViewEnum.NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !runtime.exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponse.EmailVerificationCreateResponseFromJSON(json['emailVerification']),
        'smsVerification': !runtime.exists(json, 'smsVerification') ? undefined : SmsVerificationCreateResponse.SmsVerificationCreateResponseFromJSON(json['smsVerification']),
    };
}
function UpdateSelfResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nextView': NextViewEnum.NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponse.EmailVerificationCreateResponseToJSON(value.emailVerification),
        'smsVerification': SmsVerificationCreateResponse.SmsVerificationCreateResponseToJSON(value.smsVerification),
    };
}

exports.UpdateSelfResponseAllOfFromJSON = UpdateSelfResponseAllOfFromJSON;
exports.UpdateSelfResponseAllOfFromJSONTyped = UpdateSelfResponseAllOfFromJSONTyped;
exports.UpdateSelfResponseAllOfToJSON = UpdateSelfResponseAllOfToJSON;
