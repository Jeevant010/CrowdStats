'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useStoreWithSelector = require('../useStoreWithSelector/useStoreWithSelector.cjs');
var store = require('../../store.cjs');

const createStoreState = (variable) => {
    const capitalizedName = variable[0].toUpperCase() + variable.slice(1);
    const useValue = () => useStoreWithSelector.useStoreWithSelector(store.getStore(), (state) => state[variable]);
    const setValue = (value) => store.getStore().setState(Object.assign(Object.assign({}, store.getStore().getState()), { [variable]: value }));
    const getValue = () => store.getStore().getState()[variable];
    const resetValue = () => setValue(store.getStore().getInitialState()[variable]);
    return {
        [`use${capitalizedName}`]: useValue,
        [`get${capitalizedName}`]: getValue,
        [`set${capitalizedName}`]: setValue,
        [`reset${capitalizedName}`]: resetValue,
    };
};

exports.createStoreState = createStoreState;
