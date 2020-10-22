import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // This is not optimal code. Instead of having to calculate the quantity on the fly each time,
  // there should be a accumulator on the state itself so it can be constant time access. We should only
  // calculate this number once.
  // But at least with the reselect library, this call is now memoized.
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0),
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => (
    accumulatedQuantity + (cartItem.price * cartItem.quantity)
  ), 0),
)
