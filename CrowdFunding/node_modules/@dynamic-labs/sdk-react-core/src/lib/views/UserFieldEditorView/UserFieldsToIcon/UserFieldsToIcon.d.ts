import { FC } from 'react';
import { UserFields } from '@dynamic-labs/sdk-api-core';
export type UserFieldsToIconProps = {
    fields: (keyof UserFields)[];
    className?: string;
};
export declare const UserFieldsToIcon: FC<UserFieldsToIconProps>;
