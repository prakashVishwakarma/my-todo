'use client'

import React from 'react'
import styles from './page.module.css'
import InputField from '@/Components/PureComponents/InputField/InputField'
import CustomButton from '@/Components/PureComponents/CustomButton/CustomButton'
import { useRouter } from 'next/navigation'

const Signup = () => {
  
  const router = useRouter()

  const handleClickSignup = () => {
    router.push('/login')
  }
  return (
    <div className={styles.theMainDiv}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <div className={styles.innerContainer}>
        <InputField type='email' lable='Email'/>
        <InputField type='password' lable='Password'/>
        <InputField type='password' lable='Confirm Password'/>
        </div>
        <CustomButton onClick={() => handleClickSignup()} type='submit' name='SIGN UP' />
      </div>
    </div>
  )
}

export default Signup
