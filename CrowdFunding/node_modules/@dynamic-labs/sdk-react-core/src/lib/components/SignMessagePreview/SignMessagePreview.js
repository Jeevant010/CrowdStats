'use client'
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { isHex, hexToString } from '@dynamic-labs/utils';
import { Typography } from '../Typography/Typography.js';
import { isSignTypedData } from './utils/isSignTypedData/isSignTypedData.js';
import { isRawMessage } from './utils/isRawMessage/isRawMessage.js';
import { SignTypedDataPreview } from './components/SignTypedDataPreview/SignTypedDataPreview.js';
import { containsSpecialCharacters } from './utils/containsSpecialCharacters/containsSpecialCharacters.js';
import { safeJsonParse } from './utils/safeJsonParse/safeJsonParse.js';

const SignMessagePreview = ({ message, }) => {
    const jsonMessage = useMemo(() => {
        try {
            const json = safeJsonParse(message);
            return json;
        }
        catch (e) {
            return undefined;
        }
    }, [message]);
    const messageText = useMemo(() => {
        const text = isRawMessage(jsonMessage) ? jsonMessage.raw : message;
        let readableText = isHex(text) ? hexToString(text) : text;
        // If the text is still hex, try to convert it to a string
        if (isHex(readableText)) {
            readableText = hexToString(readableText);
        }
        return !containsSpecialCharacters(readableText) ? readableText : text;
    }, [jsonMessage, message]);
    if (isSignTypedData(jsonMessage)) {
        return (jsx(SignTypedDataPreview, { currentType: jsonMessage.primaryType, types: jsonMessage.types, showTypeName: true, data: jsonMessage.message }));
    }
    return (jsx(Typography, { color: 'primary', variant: 'body_normal', children: jsx("span", { style: { whiteSpace: 'pre-line' }, children: messageText }) }));
};

export { SignMessagePreview };
