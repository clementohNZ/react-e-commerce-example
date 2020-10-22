import React, { useEffect } from 'react'
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import CheckoutPage from './pages/checkout/checkout.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage}/>
        <Route exact path={'/checkout'} component={CheckoutPage}/>
        <Route exact path={'/signin'}
               render={() => currentUser ? (<Redirect to={'/'}/>) : (<SignInAndSignUpPage/>)}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
