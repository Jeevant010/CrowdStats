'use client'
import { __rest } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const TextButton = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return (jsx("button", Object.assign({ className: classNames('text-button', className) }, props)));
};

export { TextButton };
