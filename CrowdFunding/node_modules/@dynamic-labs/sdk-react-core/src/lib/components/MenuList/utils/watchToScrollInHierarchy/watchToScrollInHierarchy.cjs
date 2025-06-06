'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isScrollable = require('../../../Popper/utils/isScrollable/isScrollable.cjs');

// eslint-disable-next-line multiline-comment-style
/** Listens for scroll events in all elements in the hierarchy range between the root and the element,
 * and executes the callback whenever it is triggered.
 * @returns A callback to clean up all event listeners created
 */
const watchToScrollInHierarchy = (root, element, callback) => {
    const elementsWithListener = [];
    let currentElement = element;
    while (currentElement !== null) {
        const reachedRoot = currentElement === root;
        if (isScrollable.isScrollable(currentElement)) {
            currentElement.addEventListener('scroll', callback);
            elementsWithListener.push(currentElement);
        }
        currentElement = currentElement.parentElement;
        if (reachedRoot) {
            break;
        }
    }
    return () => elementsWithListener.forEach((element) => element.removeEventListener('scroll', callback));
};

exports.watchToScrollInHierarchy = watchToScrollInHierarchy;
