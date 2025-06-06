'use client'
import { jsx } from 'react/jsx-runtime';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { SendBalanceView } from '../../../../views/SendBalanceView/SendBalanceView.js';

const SendBalanceWidgetView = () => {
    const { goToInitialDynamicWidgetView } = useWidgetContext();
    return (jsx("div", { className: 'send-balance-widget-view', children: jsx(SendBalanceView, { onClickBack: goToInitialDynamicWidgetView, onDone: goToInitialDynamicWidgetView }) }));
};

export { SendBalanceWidgetView };
