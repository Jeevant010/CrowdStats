'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const Image = ({ src, alt = '', fallback, className, dataTestId, }) => {
    const [error, setError] = React.useState(false);
    const handleError = () => {
        setError(true);
    };
    return src && !error ? (jsxRuntime.jsx("img", { src: src, alt: alt, onError: handleError, className: className, "data-testid": dataTestId })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: fallback }));
};

exports.Image = Image;
