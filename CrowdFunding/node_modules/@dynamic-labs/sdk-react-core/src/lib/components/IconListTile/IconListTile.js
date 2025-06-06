'use client'
import { __rest } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { ListTile } from '../ListTile/ListTile.js';

const IconListTile = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (jsx(ListTile, Object.assign({}, props, { className: classNames(className, 'icon-list-tile'), children: jsx("div", { className: 'icon-list-tile--children', children: children }) })));
};

export { IconListTile };
