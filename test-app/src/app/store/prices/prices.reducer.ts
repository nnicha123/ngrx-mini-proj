import { Action, createReducer, on } from "@ngrx/store";
import { addPrice } from "./prices.action";

const initialState: any = {};

export const pricesReducerFn = createReducer(
    initialState,
    on(addPrice , (state, { payload }) => {
        return { ...state, ...payload };
    })
);

export function pricesReducer(
    state = initialState,
    action: Action
) {
    return pricesReducerFn(state, action);
}