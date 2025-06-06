'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/* eslint-disable prefer-arrow/prefer-arrow-functions */
const ERROR_BOUNDARY_CONTEXT_NOT_FOUND = 'ERROR_BOUNDARY_CONTEXT_NOT_FOUND';
const ErrorBoundaryContext = React.createContext(null);
function assertErrorBoundaryContext(value) {
    if (value === null ||
        typeof value.hasError !== 'boolean' ||
        typeof value.error !== 'object' ||
        typeof value.isDynamicSdkError !== 'boolean') {
        const error = new Error('ErrorBoundaryContext not found');
        error.cause = ERROR_BOUNDARY_CONTEXT_NOT_FOUND;
        throw error;
    }
}

exports.ERROR_BOUNDARY_CONTEXT_NOT_FOUND = ERROR_BOUNDARY_CONTEXT_NOT_FOUND;
exports.ErrorBoundaryContext = ErrorBoundaryContext;
exports.assertErrorBoundaryContext = assertErrorBoundaryContext;
