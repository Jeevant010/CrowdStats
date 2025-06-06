'use client'
import { jsx } from 'react/jsx-runtime';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { mapViewToComponent } from './mapViewToComponent.js';

const DynamicWidgetViews = () => {
    const { dynamicWidgetView, viewProps } = useWidgetContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ViewComponent = mapViewToComponent[dynamicWidgetView] || mapViewToComponent.wallets;
    return jsx(ViewComponent, Object.assign({}, viewProps));
};

export { DynamicWidgetViews };
