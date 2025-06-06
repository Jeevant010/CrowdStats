'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useViewController = (initialView) => {
    const [_view, setView] = React.useState(null);
    const goToInitialView = () => setView(null);
    return {
        goToInitialView,
        setView: setView,
        view: _view || initialView,
    };
};

exports.useViewController = useViewController;
