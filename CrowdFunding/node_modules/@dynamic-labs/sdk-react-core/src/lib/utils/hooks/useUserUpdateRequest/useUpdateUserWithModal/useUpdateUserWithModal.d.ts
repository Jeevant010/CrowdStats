import { UserFields } from '@dynamic-labs/sdk-api-core';
import { useUpdateUser } from '../useUpdateUser/';
import { UpdateUserWithModalFields, UpdateUserWithModalOptions } from './types';
/** This hook allows to open the widget modal and expose any fields for editing.
 * The fields must have been previously enabled in the dashboard
 */
export declare const useUpdateUserWithModal: (updateUser: ReturnType<typeof useUpdateUser>) => (fields: UpdateUserWithModalFields, options?: UpdateUserWithModalOptions) => Promise<UserFields>;
