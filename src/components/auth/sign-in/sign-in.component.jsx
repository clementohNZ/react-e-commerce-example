import React, { useState } from 'react'

import './sign-in.styles.scss'
import FormInput from '../../shared/form-input/form-input.component'
import CustomButton from '../../shared/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({ email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput type={'email'}
                     name="email"
                     value={email}
                     onChange={handleChange}
                     label={'Email'}
                     required={true}/>
          <FormInput type="password"
                     name="password"
                     value={password}
                     onChange={handleChange}
                     label={'Password'}
                     required={true}/>
          <div className="buttons">
            <CustomButton type={'submit'}>Sign In</CustomButton>
            <CustomButton type={'button'} onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
