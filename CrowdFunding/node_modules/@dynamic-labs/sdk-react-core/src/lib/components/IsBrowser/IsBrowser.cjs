'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * This allows us to ignore nested IsBrowser components.
 */
const IsNestedBrowserContext = React.createContext(false);
const IsBrowser = ({ children }) => {
    const isNested = React.useContext(IsNestedBrowserContext);
    const [isBrowser, setIsBrowser] = React.useState(false);
    // this useEffect does not run during SSR
    React.useEffect(() => {
        setIsBrowser(true);
    }, []);
    if (isBrowser || isNested)
        return (jsxRuntime.jsx(IsNestedBrowserContext.Provider, { value: true, children: children }));
    // Justification: We specifically need to return an element instead of null
    // in order to have stable content during SSR
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

exports.IsBrowser = IsBrowser;
exports.IsNestedBrowserContext = IsNestedBrowserContext;
