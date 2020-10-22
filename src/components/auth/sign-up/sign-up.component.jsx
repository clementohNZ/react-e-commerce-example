import React, { useState } from 'react'

import './sign-up.styles.scss'
import FormInput from '../../shared/form-input/form-input.component'
import CustomButton from '../../shared/custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className={'title'}>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type={'email'}
                   name={'email'}
                   label={'Email'}
                   value={email}
                   onChange={handleChange}
                   required/>
        <FormInput type={'test'}
                   name={'displayName'}
                   value={displayName}
                   label={'Display Name'}
                   onChange={handleChange}
                   required/>
        <FormInput type={'password'}
                   name={'password'}
                   label={'Password'}
                   value={password}
                   onChange={handleChange}
                   required/>
        <FormInput type={'password'}
                   name={'confirmPassword'}
                   label={'Confirm Password'}
                   value={confirmPassword}
                   onChange={handleChange}
                   required/>
        <CustomButton type={'submit'}>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
