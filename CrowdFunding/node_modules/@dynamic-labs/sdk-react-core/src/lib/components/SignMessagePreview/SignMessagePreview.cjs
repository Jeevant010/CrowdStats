'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var Typography = require('../Typography/Typography.cjs');
var isSignTypedData = require('./utils/isSignTypedData/isSignTypedData.cjs');
var isRawMessage = require('./utils/isRawMessage/isRawMessage.cjs');
var SignTypedDataPreview = require('./components/SignTypedDataPreview/SignTypedDataPreview.cjs');
var containsSpecialCharacters = require('./utils/containsSpecialCharacters/containsSpecialCharacters.cjs');
var safeJsonParse = require('./utils/safeJsonParse/safeJsonParse.cjs');

const SignMessagePreview = ({ message, }) => {
    const jsonMessage = React.useMemo(() => {
        try {
            const json = safeJsonParse.safeJsonParse(message);
            return json;
        }
        catch (e) {
            return undefined;
        }
    }, [message]);
    const messageText = React.useMemo(() => {
        const text = isRawMessage.isRawMessage(jsonMessage) ? jsonMessage.raw : message;
        let readableText = utils.isHex(text) ? utils.hexToString(text) : text;
        // If the text is still hex, try to convert it to a string
        if (utils.isHex(readableText)) {
            readableText = utils.hexToString(readableText);
        }
        return !containsSpecialCharacters.containsSpecialCharacters(readableText) ? readableText : text;
    }, [jsonMessage, message]);
    if (isSignTypedData.isSignTypedData(jsonMessage)) {
        return (jsxRuntime.jsx(SignTypedDataPreview.SignTypedDataPreview, { currentType: jsonMessage.primaryType, types: jsonMessage.types, showTypeName: true, data: jsonMessage.message }));
    }
    return (jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_normal', children: jsxRuntime.jsx("span", { style: { whiteSpace: 'pre-line' }, children: messageText }) }));
};

exports.SignMessagePreview = SignMessagePreview;
