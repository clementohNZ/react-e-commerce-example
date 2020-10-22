import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectShopCollections = createSelector([selectShop], shop => shop.collections)

export const selectCollection = memoize(collectionId =>
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionId] : null,
  ),
)
export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching,
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map((key) => collections[key]) : [],
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections,
)
