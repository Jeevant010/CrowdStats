import { ReactElement } from 'react';
type Props = {
    titleKey: string;
    descriptionKey: string;
    description: string;
    badgeKey: string;
    badgeVariant: 'primary' | 'secondary';
    action: VoidFunction;
    LeadingIcon: ReactElement;
    isLoading: boolean;
    dataTestId?: string;
};
export declare const ActionCard: ({ titleKey, descriptionKey, description, LeadingIcon, action, badgeVariant, badgeKey, isLoading, dataTestId, }: Props) => JSX.Element;
export {};
