'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useForceUpdate = () => {
    const [, setValue] = React.useState(0);
    return () => setValue((value) => value + 1);
};

exports.useForceUpdate = useForceUpdate;
