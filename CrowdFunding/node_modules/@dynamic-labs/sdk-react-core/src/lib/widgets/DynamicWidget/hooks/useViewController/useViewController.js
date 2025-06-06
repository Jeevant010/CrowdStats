'use client'
import { useState } from 'react';

const useViewController = (initialView) => {
    const [_view, setView] = useState(null);
    const goToInitialView = () => setView(null);
    return {
        goToInitialView,
        setView: setView,
        view: _view || initialView,
    };
};

export { useViewController };
