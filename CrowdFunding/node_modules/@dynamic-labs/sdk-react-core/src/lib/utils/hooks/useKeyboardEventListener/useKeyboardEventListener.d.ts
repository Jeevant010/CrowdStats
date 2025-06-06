type InputKeyType = 'Escape';
type UseKeyboardEventListenerProps = {
    disabled?: boolean;
    inputKey: InputKeyType;
    onKeyPressed: (e: {
        stopPropagation: VoidFunction;
    }) => void;
};
export declare const useKeyboardEventListener: ({ disabled, inputKey, onKeyPressed, }: UseKeyboardEventListenerProps) => void;
export {};
