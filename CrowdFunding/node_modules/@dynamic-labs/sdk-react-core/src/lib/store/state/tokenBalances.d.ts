declare const getTokenBalancesState: () => import("..").TokenBalancesState, useTokenBalancesState: () => import("..").TokenBalancesState;
declare const setTokenBalanceVariable: <K extends keyof import("..").TokenBalancesState>(key: K, value: import("..").TokenBalancesState[K]) => void;
export { getTokenBalancesState, useTokenBalancesState, setTokenBalanceVariable, };
