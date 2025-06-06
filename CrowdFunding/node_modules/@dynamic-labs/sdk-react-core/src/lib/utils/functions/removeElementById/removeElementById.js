'use client'
const removeElementById = (elementId) => {
    let elementToRemove;
    if (typeof window !== 'undefined') {
        elementToRemove = window.document.getElementById(elementId);
        const parentElement = elementToRemove === null || elementToRemove === void 0 ? void 0 : elementToRemove.parentElement;
        if (!elementToRemove || !parentElement) {
            return;
        }
        parentElement.removeChild(elementToRemove);
    }
};

export { removeElementById };
