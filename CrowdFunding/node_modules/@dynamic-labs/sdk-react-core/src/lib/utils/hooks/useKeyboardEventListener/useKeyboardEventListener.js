'use client'
import { useEffect } from 'react';

const useKeyboardEventListener = ({ disabled, inputKey, onKeyPressed, }) => {
    useEffect(() => {
        const handleKeydown = (evt) => {
            if (disabled || evt.key !== inputKey)
                return;
            onKeyPressed(evt);
        };
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [disabled, inputKey, onKeyPressed]);
};

export { useKeyboardEventListener };
