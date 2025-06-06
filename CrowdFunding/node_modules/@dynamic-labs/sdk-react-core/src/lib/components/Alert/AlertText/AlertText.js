'use client'
import { jsx, Fragment } from 'react/jsx-runtime';
import { Typography } from '../../Typography/Typography.js';

const AlertText = ({ content, contentDataTestId, }) => {
    if (typeof content === 'string')
        return (jsx(Typography, { variant: 'body_small', color: 'current-color', "data-testid": contentDataTestId, children: content }));
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsx(Fragment, { children: content });
};

export { AlertText };
