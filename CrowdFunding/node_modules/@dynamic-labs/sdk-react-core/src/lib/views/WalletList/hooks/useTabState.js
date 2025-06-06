'use client'
import { useState, useCallback } from 'react';
import { dynamicEvents } from '../../../events/dynamicEvents.js';
import { logger } from '../../../shared/logger.js';

const useTabState = ({ settingsOverrides, }) => {
    var _a, _b, _c, _d;
    const walletListViewSettings = (_a = settingsOverrides === null || settingsOverrides === void 0 ? void 0 : settingsOverrides.views) === null || _a === void 0 ? void 0 : _a.find((view) => view.type === 'wallet-list');
    const [selectedTabIndex, _setSelectedTabIndex] = useState(0);
    const setSelectedTabIndex = useCallback((value) => {
        const validateSelectedTabIndex = (index) => {
            var _a, _b;
            const tab = (_a = walletListViewSettings === null || walletListViewSettings === void 0 ? void 0 : walletListViewSettings.tabs) === null || _a === void 0 ? void 0 : _a.items[index];
            if (!tab) {
                logger.error(`Tab with index ${index} not found. Available tabs: ${JSON.stringify((_b = walletListViewSettings === null || walletListViewSettings === void 0 ? void 0 : walletListViewSettings.tabs) === null || _b === void 0 ? void 0 : _b.items)}`);
                return;
            }
            dynamicEvents.emit('walletTabSelected', { index, tab });
            return index;
        };
        if (typeof value === 'number') {
            const newIndex = validateSelectedTabIndex(value);
            if (newIndex !== undefined)
                _setSelectedTabIndex(newIndex);
            return;
        }
        _setSelectedTabIndex((current) => {
            var _a;
            const newIndex = value(current);
            return (_a = validateSelectedTabIndex(newIndex)) !== null && _a !== void 0 ? _a : current;
        });
    }, [(_b = walletListViewSettings === null || walletListViewSettings === void 0 ? void 0 : walletListViewSettings.tabs) === null || _b === void 0 ? void 0 : _b.items]);
    const selectedTabSettings = selectedTabIndex === null
        ? undefined
        : (_c = walletListViewSettings === null || walletListViewSettings === void 0 ? void 0 : walletListViewSettings.tabs) === null || _c === void 0 ? void 0 : _c.items[selectedTabIndex];
    return {
        selectedTabIndex,
        selectedTabSettings,
        setSelectedTabIndex,
        tabsItems: (_d = walletListViewSettings === null || walletListViewSettings === void 0 ? void 0 : walletListViewSettings.tabs) === null || _d === void 0 ? void 0 : _d.items,
    };
};

export { useTabState };
