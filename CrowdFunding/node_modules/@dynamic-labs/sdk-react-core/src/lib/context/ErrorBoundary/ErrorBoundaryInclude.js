'use client'
import { ErrorBoundaryBase } from './ErrorBoundaryBase.js';

class ErrorBoundaryInclude extends ErrorBoundaryBase {
    render() {
        const { children } = this.props;
        return this.renderOrError(children, {
            isDynamicSdkError: true,
        });
    }
}

export { ErrorBoundaryInclude };
