import { ConfirmationModalHookProps, ConfirmationModalHookResult } from './useConfirmationModal.types';
/**
 * Allows showing a modal for the user to confirm or cancel.
 *
 * The open method accepts a callback which receives a (resolve, reject) pair to be called if the user
 * confirms or cancels the operation, and must return the ReactNode for the modal to be displayed.
 *
 * @param {string} elementId The id of the modal root, to which the modal will be portalled
 * @returns {ConfirmationModalHookResult} An object with a method to open a modal and a reference to the modal itself.
 */
export declare const useConfirmationModal: <T, E = unknown>({ elementId, }: ConfirmationModalHookProps) => ConfirmationModalHookResult<T, E>;
