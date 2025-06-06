'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const OverlayCardContext = React.createContext(undefined);
const OverlayCardTarget = ({ children }) => {
    const [portal, setPortal] = React.useState(null);
    /** Keeps track of which cards are using this target currently */
    const [openedCards, setOpenedCards] = React.useState(new Set());
    return (jsxRuntime.jsxs(OverlayCardContext.Provider, { value: React.useMemo(() => ({
            closeCard: (cardId) => setOpenedCards((cards) => {
                cards.delete(cardId);
                return new Set(cards);
            }),
            openCard: (cardId) => setOpenedCards((cards) => {
                cards.add(cardId);
                return new Set(cards);
            }),
            portal,
        }), [portal]), children: [children, openedCards.size > 0 && (jsxRuntime.jsx("div", { className: 'overlay-card-target', ref: setPortal }))] }));
};
/**
 * Returns an element from above in the hierarchy to use as target for an OverlayCard,
 * or undefined if such parent was never set
 */
const useOverlayCardTarget = (isOpen) => {
    var _a;
    const context = React.useContext(OverlayCardContext);
    const id = 'overlay-card-target-id';
    React.useEffect(() => {
        if (!context || !isOpen)
            return;
        context.openCard(id);
        return () => {
            context.closeCard(id);
        };
    }, [context, id, isOpen]);
    return (_a = context === null || context === void 0 ? void 0 : context.portal) !== null && _a !== void 0 ? _a : undefined;
};

exports.OverlayCardContext = OverlayCardContext;
exports.OverlayCardTarget = OverlayCardTarget;
exports.useOverlayCardTarget = useOverlayCardTarget;
