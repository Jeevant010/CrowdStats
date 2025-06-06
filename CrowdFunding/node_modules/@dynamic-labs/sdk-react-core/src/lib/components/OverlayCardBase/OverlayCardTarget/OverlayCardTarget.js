'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useState, useMemo, useContext, useEffect } from 'react';

const OverlayCardContext = createContext(undefined);
const OverlayCardTarget = ({ children }) => {
    const [portal, setPortal] = useState(null);
    /** Keeps track of which cards are using this target currently */
    const [openedCards, setOpenedCards] = useState(new Set());
    return (jsxs(OverlayCardContext.Provider, { value: useMemo(() => ({
            closeCard: (cardId) => setOpenedCards((cards) => {
                cards.delete(cardId);
                return new Set(cards);
            }),
            openCard: (cardId) => setOpenedCards((cards) => {
                cards.add(cardId);
                return new Set(cards);
            }),
            portal,
        }), [portal]), children: [children, openedCards.size > 0 && (jsx("div", { className: 'overlay-card-target', ref: setPortal }))] }));
};
/**
 * Returns an element from above in the hierarchy to use as target for an OverlayCard,
 * or undefined if such parent was never set
 */
const useOverlayCardTarget = (isOpen) => {
    var _a;
    const context = useContext(OverlayCardContext);
    const id = 'overlay-card-target-id';
    useEffect(() => {
        if (!context || !isOpen)
            return;
        context.openCard(id);
        return () => {
            context.closeCard(id);
        };
    }, [context, id, isOpen]);
    return (_a = context === null || context === void 0 ? void 0 : context.portal) !== null && _a !== void 0 ? _a : undefined;
};

export { OverlayCardContext, OverlayCardTarget, useOverlayCardTarget };
