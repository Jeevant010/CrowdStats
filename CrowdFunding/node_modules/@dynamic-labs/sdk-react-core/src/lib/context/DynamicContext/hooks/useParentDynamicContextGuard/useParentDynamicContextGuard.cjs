'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DynamicContext = require('../../DynamicContext.cjs');

const useParentDynamicContextGuard = () => {
    const context = React.useContext(DynamicContext.DynamicContext);
    if (context) {
        throw new Error('DynamicContextProvider should not be nested. Please wrap your application in a single DynamicContextProvider.');
    }
};

exports.useParentDynamicContextGuard = useParentDynamicContextGuard;
