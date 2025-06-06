import { Dispatch, SetStateAction } from 'react';
export declare const useViewController: <VIEW extends string>(initialView: VIEW) => {
    goToInitialView: () => void;
    setView: Dispatch<SetStateAction<VIEW>>;
    view: VIEW;
};
