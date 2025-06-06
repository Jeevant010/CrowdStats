'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { UserFieldsCheckEnum } from '@dynamic-labs/sdk-api-core';
import { getUserFieldsCheck } from '../../../data/api/user/user.js';
import { getEnvironmentId } from '../../../store/state/dynamicContextProps/dynamicContextProps.js';

var SubdomainCheckResponseError;
(function (SubdomainCheckResponseError) {
    SubdomainCheckResponseError[SubdomainCheckResponseError["CHECK_FAILED"] = 0] = "CHECK_FAILED";
})(SubdomainCheckResponseError || (SubdomainCheckResponseError = {}));
/** Hook to check if a subdomain is available */
const useSubdomainCheck = () => {
    const checkSubdomain = useCallback((_a) => __awaiter(void 0, [_a], void 0, function* ({ subdomain, }) {
        var _b;
        const environmentId = getEnvironmentId();
        const response = yield getUserFieldsCheck({
            environmentId,
            filter: {
                field: UserFieldsCheckEnum.NameServiceSubdomainHandle,
                value: subdomain,
            },
        });
        if (!response) {
            return {
                available: false,
                error: SubdomainCheckResponseError.CHECK_FAILED,
            };
        }
        return {
            available: (_b = response === null || response === void 0 ? void 0 : response.available) !== null && _b !== void 0 ? _b : false,
            error: undefined,
        };
    }), []);
    return checkSubdomain;
};

export { SubdomainCheckResponseError, useSubdomainCheck };
