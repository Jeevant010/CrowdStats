'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getDisplayErrorMessage = (fieldName, error) => {
    var _a;
    if (!error)
        return;
    const mapErrorToTemplate = {
        required: (fieldName) => `${fieldName} is required`,
    };
    return ((_a = mapErrorToTemplate[error]) === null || _a === void 0 ? void 0 : _a.call(mapErrorToTemplate, fieldName)) || error;
};

exports.getDisplayErrorMessage = getDisplayErrorMessage;
