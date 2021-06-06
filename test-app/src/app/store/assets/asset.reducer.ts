import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Asset } from "src/app/models/asset.model";
import { addAssets } from "./asset.action";

export const assetsAdapter: EntityAdapter<Asset> = createEntityAdapter<Asset>({
  selectId: (asset: Asset) => asset.id
});

// reducer
const initialState = assetsAdapter.getInitialState();

export const assetsReducerFn = createReducer(
  initialState,
  on(addAssets, (state, { payload }) => {
      return assetsAdapter.setAll(payload, state);
  })
);

export function assetsReducer(
  state: EntityState<Asset> | undefined,
  action: Action
) {
  return assetsReducerFn(state, action);
}