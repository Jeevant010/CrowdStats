import React from 'react';
export type UserProfileSectionProps = {
    children: React.ReactNode;
    title?: string;
    action?: React.ReactNode;
};
export declare const UserProfileSection: ({ title, children, action, }: UserProfileSectionProps) => JSX.Element;
