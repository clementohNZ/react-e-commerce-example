import React from 'react'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import CartIcon from '../cart/cart-icon/cart-icon.component'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ currentUser, cartHidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {
        currentUser
          ? <OptionLink as="div" onClick={() => auth.signOut()}>Sign Out</OptionLink>
          : <OptionLink to={'/signin'}>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      cartHidden ? null : <CartDropdown/>
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
