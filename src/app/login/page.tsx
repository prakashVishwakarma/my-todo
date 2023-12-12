'use client'

import React from 'react'
import styles from '../signup/page.module.css'
import InputField from '@/Components/PureComponents/InputField/InputField'
import CustomButton from '@/Components/PureComponents/CustomButton/CustomButton'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter()

  const handleClickLogin = () => {
    router.push('/')
  }

  return (
    <div className={styles.theMainDiv}>
      <div className={styles.container}>
        <h1>Log In</h1>
        <div className={styles.innerContainer}>
        <InputField type='email' lable='Email'/>
        <InputField type='password' lable='Password'/>
        </div>
        <CustomButton onClick={() => handleClickLogin()} type='submit' name='LOG IN' />
      </div>
    </div>
  )
}

export default Login
