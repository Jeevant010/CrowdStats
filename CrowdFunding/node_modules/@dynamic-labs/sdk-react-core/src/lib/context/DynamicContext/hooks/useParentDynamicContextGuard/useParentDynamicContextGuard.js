'use client'
import { useContext } from 'react';
import { DynamicContext } from '../../DynamicContext.js';

const useParentDynamicContextGuard = () => {
    const context = useContext(DynamicContext);
    if (context) {
        throw new Error('DynamicContextProvider should not be nested. Please wrap your application in a single DynamicContextProvider.');
    }
};

export { useParentDynamicContextGuard };
