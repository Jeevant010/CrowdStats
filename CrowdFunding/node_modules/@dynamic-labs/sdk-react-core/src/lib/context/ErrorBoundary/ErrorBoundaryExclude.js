'use client'
import { ErrorBoundaryBase } from './ErrorBoundaryBase.js';

class ErrorBoundaryExclude extends ErrorBoundaryBase {
    render() {
        const { children } = this.props;
        return this.renderOrError(children, {
            isDynamicSdkError: false,
        });
    }
}

export { ErrorBoundaryExclude };
