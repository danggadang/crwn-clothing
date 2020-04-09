import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
//get isFetching from reducer
export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching);
//return false if collections is null
export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);