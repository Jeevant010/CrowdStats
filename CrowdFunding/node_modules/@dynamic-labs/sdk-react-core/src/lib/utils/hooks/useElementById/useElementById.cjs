'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useElementById = () => {
    const targetElement = React.useRef(null);
    const createRootElement = React.useCallback((elementId = 'dynamic-modal', parentElementId) => {
        if (typeof window === 'undefined')
            return targetElement;
        const isElementCreated = window.document.getElementById(elementId);
        if (isElementCreated) {
            targetElement.current = isElementCreated;
            return targetElement;
        }
        const parentElement = parentElementId
            ? window.document.getElementById(parentElementId)
            : undefined;
        // creates div and attaches it to the body
        targetElement.current = window.document.createElement('div');
        targetElement.current.setAttribute('id', elementId);
        targetElement.current.setAttribute('class', elementId);
        targetElement.current.setAttribute('data-testid', elementId);
        /**
         * Setting the pointer-events to auto is necessary to allow the user to interact with the modal
         * when other packages that use a modal set the pointer-events to none on the body element.
         * For example: https://reservoir.tools/ use chakra-ui and sets the pointer-events to none on the body element.
         */
        targetElement.current.style.pointerEvents = 'auto';
        if (parentElement) {
            parentElement.appendChild(targetElement.current);
        }
        else {
            window.document.body.appendChild(targetElement.current);
        }
        return targetElement;
    }, []);
    return {
        createRootElement,
    };
};

exports.useElementById = useElementById;
