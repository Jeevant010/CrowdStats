'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useCallback } from 'react';
import { logger } from '@dynamic-labs/wallet-connector-core';

const useMutation = (mutation, options = {}) => {
    const [state, setState] = useState({
        isLoading: false,
    });
    const mutate = useCallback((variables) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        let data;
        setState({
            isLoading: true,
        });
        try {
            const mutationResult = mutation(variables);
            if (mutationResult instanceof Promise) {
                data = yield mutationResult;
            }
            else {
                data = mutationResult;
            }
            setState({
                data,
                isLoading: false,
            });
            try {
                (_a = options === null || options === void 0 ? void 0 : options.onSuccess) === null || _a === void 0 ? void 0 : _a.call(options, data, variables);
            }
            catch (err) {
                logger.error(err);
            }
            return data;
        }
        catch (error) {
            setState({ error: error, isLoading: false });
            logger.error(error);
            try {
                (_b = options === null || options === void 0 ? void 0 : options.onFailure) === null || _b === void 0 ? void 0 : _b.call(options, error, variables);
            }
            catch (err) {
                logger.error(err);
            }
        }
        return undefined;
    }), [mutation, options]);
    return Object.assign(Object.assign({}, state), { hasData: Boolean(state.data), hasError: Boolean(state.error), mutate });
};

export { useMutation };
