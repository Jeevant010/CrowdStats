import { ReactNode } from 'react';
export interface BadgeProps {
    className?: string;
    dot?: boolean;
    text: ReactNode;
    variant?: 'primary' | 'secondary';
}
