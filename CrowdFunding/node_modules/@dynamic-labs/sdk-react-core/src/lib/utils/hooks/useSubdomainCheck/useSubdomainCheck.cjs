'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var user = require('../../../data/api/user/user.cjs');
var dynamicContextProps = require('../../../store/state/dynamicContextProps/dynamicContextProps.cjs');

exports.SubdomainCheckResponseError = void 0;
(function (SubdomainCheckResponseError) {
    SubdomainCheckResponseError[SubdomainCheckResponseError["CHECK_FAILED"] = 0] = "CHECK_FAILED";
})(exports.SubdomainCheckResponseError || (exports.SubdomainCheckResponseError = {}));
/** Hook to check if a subdomain is available */
const useSubdomainCheck = () => {
    const checkSubdomain = React.useCallback((_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ subdomain, }) {
        var _b;
        const environmentId = dynamicContextProps.getEnvironmentId();
        const response = yield user.getUserFieldsCheck({
            environmentId,
            filter: {
                field: sdkApiCore.UserFieldsCheckEnum.NameServiceSubdomainHandle,
                value: subdomain,
            },
        });
        if (!response) {
            return {
                available: false,
                error: exports.SubdomainCheckResponseError.CHECK_FAILED,
            };
        }
        return {
            available: (_b = response === null || response === void 0 ? void 0 : response.available) !== null && _b !== void 0 ? _b : false,
            error: undefined,
        };
    }), []);
    return checkSubdomain;
};

exports.useSubdomainCheck = useSubdomainCheck;
