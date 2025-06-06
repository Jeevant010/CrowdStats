'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ErrorBoundaryBase = require('./ErrorBoundaryBase.cjs');

class ErrorBoundaryInclude extends ErrorBoundaryBase.ErrorBoundaryBase {
    render() {
        const { children } = this.props;
        return this.renderOrError(children, {
            isDynamicSdkError: true,
        });
    }
}

exports.ErrorBoundaryInclude = ErrorBoundaryInclude;
