'use client'
import { __rest } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const IconButton = forwardRef((_a, ref) => {
    var { className = '', color } = _a, props = __rest(_a, ["className", "color"]);
    return (jsx("button", Object.assign({}, props, { className: classNames('icon-button', className), ref: ref })));
});
IconButton.displayName = 'IconButton';

export { IconButton };
