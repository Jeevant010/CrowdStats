type LogicGateOperators = 'AND' | 'OR';
export declare const useDynamicScopes: () => {
    userHasScopes: (scopes: string[] | string, logicOperator?: LogicGateOperators) => boolean;
    userScopes: string[];
};
export {};
