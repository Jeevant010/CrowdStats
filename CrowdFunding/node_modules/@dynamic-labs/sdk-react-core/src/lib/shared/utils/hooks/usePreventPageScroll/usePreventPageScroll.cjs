'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('@dynamic-labs/utils');

// This hook allows us to prevent page from scrolling ie. when a modal is open.
// It adds a class to the html and body elements which disables scrolling.
const usePreventPageScroll = (isOpen) => {
    const disableScroll = () => {
        var _a;
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        /* istanbul ignore next */
        if (!html || !body)
            return;
        // https://developer.mozilla.org/en-US/docs/Web/API/Screen/height
        const deviceScreenHeight = (_a = window === null || window === void 0 ? void 0 : window.screen) === null || _a === void 0 ? void 0 : _a.height;
        const isScrollable = body.scrollHeight > deviceScreenHeight;
        // Don't prevent scroll if the page is not scrollable
        // If we don't know the device screen height, we can't know if the page is scrollable
        /* istanbul ignore else */
        if (!isScrollable || deviceScreenHeight === 0)
            return;
        html.classList.add('dynamic-no-scroll');
        body.classList.add('dynamic-no-scroll');
    };
    const enableScroll = (userScrollCoordinatesBeforeLock) => {
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        /* istanbul ignore next */
        if (!html || !body)
            return;
        html.classList.remove('dynamic-no-scroll');
        body.classList.remove('dynamic-no-scroll');
        // Restore the scroll position when user is using IOS
        /* istanbul ignore else */
        if (utils.isIOS()) {
            window.scrollTo(userScrollCoordinatesBeforeLock.x, userScrollCoordinatesBeforeLock.y);
        }
    };
    React.useEffect(() => {
        if (!isOpen)
            return;
        const userScrollCoordinatesBeforeLock = {
            x: window.scrollX,
            y: window.scrollY,
        };
        disableScroll();
        return () => {
            enableScroll(userScrollCoordinatesBeforeLock);
        };
    }, [isOpen]);
};

exports.usePreventPageScroll = usePreventPageScroll;
