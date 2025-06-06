'use client'
import { jsx, Fragment } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect } from 'react';

/**
 * This allows us to ignore nested IsBrowser components.
 */
const IsNestedBrowserContext = createContext(false);
const IsBrowser = ({ children }) => {
    const isNested = useContext(IsNestedBrowserContext);
    const [isBrowser, setIsBrowser] = useState(false);
    // this useEffect does not run during SSR
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    if (isBrowser || isNested)
        return (jsx(IsNestedBrowserContext.Provider, { value: true, children: children }));
    // Justification: We specifically need to return an element instead of null
    // in order to have stable content during SSR
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsx(Fragment, {});
};

export { IsBrowser, IsNestedBrowserContext };
