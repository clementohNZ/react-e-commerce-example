import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
  // This is not optimal code. Instead of having to calculate the quantity on the fly each time,
  // there should be a accumulator on the state itself so it can be constant time access. We should only
  // calculate this number once.
  itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
