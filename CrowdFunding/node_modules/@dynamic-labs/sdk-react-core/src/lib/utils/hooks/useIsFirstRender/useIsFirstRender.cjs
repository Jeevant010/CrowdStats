'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useIsFirstRender = () => {
    const isFirst = React.useRef(true);
    // force it to be false on second client render only avoiding SSR issues
    React.useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
        }
    }, []);
    return isFirst.current;
};

exports.useIsFirstRender = useIsFirstRender;
