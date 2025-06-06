'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Icon = ({ children, className = '', color, size, }) => {
    const effectiveClassName = classNames.classNames(className, color ? `icon--color-${color}` : '', size ? `icon--size-${size}` : '');
    return React.cloneElement(children, { className: effectiveClassName });
};

exports.Icon = Icon;
