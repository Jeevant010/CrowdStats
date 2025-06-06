'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
