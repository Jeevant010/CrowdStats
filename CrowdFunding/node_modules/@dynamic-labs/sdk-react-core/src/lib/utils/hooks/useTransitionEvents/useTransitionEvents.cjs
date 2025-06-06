'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useUpdateEffect = require('../useUpdateEffect/useUpdateEffect.cjs');

const useTransitionEvents = (stage, events) => {
    const mapCallbackToStage = {
        ENTERED: events === null || events === void 0 ? void 0 : events.onEntered,
        ENTERING: events === null || events === void 0 ? void 0 : events.onEntering,
        EXITING: events === null || events === void 0 ? void 0 : events.onExiting,
        UNMOUNT: events === null || events === void 0 ? void 0 : events.onUnmount,
    };
    return useUpdateEffect.useUpdateEffect(() => {
        var _a;
        (_a = mapCallbackToStage[stage]) === null || _a === void 0 ? void 0 : _a.call(mapCallbackToStage);
        return () => {
            var _a;
            if (stage === 'EXITING') {
                (_a = mapCallbackToStage.UNMOUNT) === null || _a === void 0 ? void 0 : _a.call(mapCallbackToStage);
            }
        };
    }, [stage]);
};

exports.useTransitionEvents = useTransitionEvents;
