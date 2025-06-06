'use client'
import { useState, useRef, useEffect } from 'react';

const useCountdown = ({ callback, seconds }) => {
    const [remainingSeconds, setRemainingSeconds] = useState(seconds);
    const timeoutRef = useRef();
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
    useEffect(() => {
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

export { useCountdown };
