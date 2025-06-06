'use client'
import { jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

const Image = ({ src, alt = '', fallback, className, dataTestId, }) => {
    const [error, setError] = useState(false);
    const handleError = () => {
        setError(true);
    };
    return src && !error ? (jsx("img", { src: src, alt: alt, onError: handleError, className: className, "data-testid": dataTestId })) : (jsx(Fragment, { children: fallback }));
};

export { Image };
