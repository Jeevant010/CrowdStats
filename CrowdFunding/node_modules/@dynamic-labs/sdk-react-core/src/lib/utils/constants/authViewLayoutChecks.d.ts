import type { ViewType } from '../../context/ViewContext/types';
export declare const viewsThatPreventBorderBelowHeader: ViewType[];
export declare const viewsWithWalletListType: ViewType[];
export declare const viewsThatHideHelpContent: ViewType[];
export declare const viewsThatHideHeader: ViewType[];
export declare const viewsThatShowConnectedWalletProgress: ViewType[];
export declare const viewsThatShowDynamicFooter: ViewType[];
/**
 * User is not able to close the modal in these views at all
 */
export declare const viewsThatPreventModalClose: ViewType[];
/**
 * When hasPendingMfaAction returns true, user is not able to close the modal in these views at all
 */
export declare const mfaViewsThatPreventModalClose: ViewType[];
/**
 * These views only hide the close button, but unless they are also
 * in the viewsThatPreventModalClose array, the user can still close the modal
 * via other means (such as pressing the escape key or clicking the backdrop).
 */
export declare const viewsThatHideCloseButton: ViewType[];
