import {createSelector} from 'reselect';

const selectShopCollections= state=>state.shop;

export const selectShopCollectionsSelection= createSelector([selectShopCollections], shop=>shop.collections);