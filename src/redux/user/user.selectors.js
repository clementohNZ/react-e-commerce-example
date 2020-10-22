import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
  // You can provide multiple states and return a custom
  // state object too
  [selectUser],
  (user) => user.currentUser,
)
