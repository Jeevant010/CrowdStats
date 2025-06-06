'use client'
import { cloneElement } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Icon = ({ children, className = '', color, size, }) => {
    const effectiveClassName = classNames(className, color ? `icon--color-${color}` : '', size ? `icon--size-${size}` : '');
    return cloneElement(children, { className: effectiveClassName });
};

export { Icon };
