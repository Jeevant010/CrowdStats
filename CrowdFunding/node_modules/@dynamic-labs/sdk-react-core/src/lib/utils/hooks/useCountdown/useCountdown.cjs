'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useCountdown = ({ callback, seconds }) => {
    const [remainingSeconds, setRemainingSeconds] = React.useState(seconds);
    const timeoutRef = React.useRef();
    const startCountdown = () => {
        if (timeoutRef.current) {
            return setRemainingSeconds(seconds);
        }
        runCountdown();
    };
    const stopCountdown = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
    };
    const runCountdown = () => {
        timeoutRef.current = setTimeout(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    };
    React.useEffect(() => {
        if (!timeoutRef.current)
            return;
        if (remainingSeconds <= 0) {
            if (callback)
                callback();
            return;
        }
        runCountdown();
        return () => clearTimeout(timeoutRef.current);
    }, [remainingSeconds, callback]);
    return { remainingSeconds, startCountdown, stopCountdown };
};

exports.useCountdown = useCountdown;
