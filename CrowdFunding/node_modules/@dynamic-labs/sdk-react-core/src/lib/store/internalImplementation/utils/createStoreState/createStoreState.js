'use client'
import { useStoreWithSelector } from '../useStoreWithSelector/useStoreWithSelector.js';
import { getStore } from '../../store.js';

const createStoreState = (variable) => {
    const capitalizedName = variable[0].toUpperCase() + variable.slice(1);
    const useValue = () => useStoreWithSelector(getStore(), (state) => state[variable]);
    const setValue = (value) => getStore().setState(Object.assign(Object.assign({}, getStore().getState()), { [variable]: value }));
    const getValue = () => getStore().getState()[variable];
    const resetValue = () => setValue(getStore().getInitialState()[variable]);
    return {
        [`use${capitalizedName}`]: useValue,
        [`get${capitalizedName}`]: getValue,
        [`set${capitalizedName}`]: setValue,
        [`reset${capitalizedName}`]: resetValue,
    };
};

export { createStoreState };
