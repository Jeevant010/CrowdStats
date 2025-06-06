import { exists } from '../runtime.js';
import { EmailVerificationCreateResponseFromJSON, EmailVerificationCreateResponseToJSON } from './EmailVerificationCreateResponse.js';
import { NextViewEnumFromJSON, NextViewEnumToJSON } from './NextViewEnum.js';
import { SmsVerificationCreateResponseFromJSON, SmsVerificationCreateResponseToJSON } from './SmsVerificationCreateResponse.js';

/* tslint:disable */
function UpdateSelfResponseAllOfFromJSON(json) {
    return UpdateSelfResponseAllOfFromJSONTyped(json);
}
function UpdateSelfResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nextView': NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponseFromJSON(json['emailVerification']),
        'smsVerification': !exists(json, 'smsVerification') ? undefined : SmsVerificationCreateResponseFromJSON(json['smsVerification']),
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
        'nextView': NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponseToJSON(value.emailVerification),
        'smsVerification': SmsVerificationCreateResponseToJSON(value.smsVerification),
    };
}

export { UpdateSelfResponseAllOfFromJSON, UpdateSelfResponseAllOfFromJSONTyped, UpdateSelfResponseAllOfToJSON };
