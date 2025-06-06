export type MouseEventHandlers = {
    [key: string]: VoidFunction;
};
type HoverHookArgs = {
    initialValue?: boolean;
    falseOnClick?: boolean;
    onHover?: () => void;
    onHoverOff?: () => void;
};
export type HoverHook = (args: HoverHookArgs) => [boolean, MouseEventHandlers];
export {};
