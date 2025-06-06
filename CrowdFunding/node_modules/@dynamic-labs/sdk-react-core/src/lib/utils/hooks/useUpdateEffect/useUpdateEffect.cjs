'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useIsFirstRender = require('../useIsFirstRender/useIsFirstRender.cjs');

const useUpdateEffect = (effect, deps) => {
    const isFirst = useIsFirstRender.useIsFirstRender();
    React.useEffect(() => {
        if (!isFirst) {
            return effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

exports.useUpdateEffect = useUpdateEffect;
