'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const useMutation = (mutation, options = {}) => {
    const [state, setState] = React.useState({
        isLoading: false,
    });
    const mutate = React.useCallback((variables) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
                walletConnectorCore.logger.error(err);
            }
            return data;
        }
        catch (error) {
            setState({ error: error, isLoading: false });
            walletConnectorCore.logger.error(error);
            try {
                (_b = options === null || options === void 0 ? void 0 : options.onFailure) === null || _b === void 0 ? void 0 : _b.call(options, error, variables);
            }
            catch (err) {
                walletConnectorCore.logger.error(err);
            }
        }
        return undefined;
    }), [mutation, options]);
    return Object.assign(Object.assign({}, state), { hasData: Boolean(state.data), hasError: Boolean(state.error), mutate });
};

exports.useMutation = useMutation;
