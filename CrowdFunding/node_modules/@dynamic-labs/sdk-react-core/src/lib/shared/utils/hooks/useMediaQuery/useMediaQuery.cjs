'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// This hook is based on https://usehooks-ts.com/react-hook/use-media-query
const useMediaQuery = (query) => {
    const getMatches = (query) => {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    };
    const [matches, setMatches] = React.useState(getMatches(query));
    const handleChange = () => setMatches(getMatches(query));
    React.useEffect(() => {
        const matchMedia = window.matchMedia(query);
        // Triggered at the first client-side load and if query changes
        handleChange();
        matchMedia.addEventListener('change', handleChange);
        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    return matches;
};

exports.useMediaQuery = useMediaQuery;
