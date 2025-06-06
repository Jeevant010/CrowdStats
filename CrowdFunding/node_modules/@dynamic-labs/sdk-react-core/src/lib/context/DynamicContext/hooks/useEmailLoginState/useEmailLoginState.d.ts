import { Dispatch, SetStateAction } from 'react';
import { Provider } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
export declare const useEmailLoginState: (providers: Provider[], user: UserProfile | undefined) => [boolean, Dispatch<SetStateAction<boolean>>, () => void];
