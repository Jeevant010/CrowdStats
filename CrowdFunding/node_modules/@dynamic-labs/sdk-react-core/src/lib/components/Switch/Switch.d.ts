interface ButtonProps {
    active: boolean;
    handleButtonClick: VoidFunction;
    name: string;
}
interface Props {
    disabled?: boolean;
    firstButton: ButtonProps;
    secondButton: ButtonProps;
    thirdButton?: ButtonProps;
}
export declare const Switch: ({ disabled, firstButton, secondButton, thirdButton, }: Props) => JSX.Element;
export {};
