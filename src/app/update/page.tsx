'use client'

import React from 'react'
import styles from './page.module.css'
import InputField from '@/Components/PureComponents/InputField/InputField'
import CustomButton from '@/Components/PureComponents/CustomButton/CustomButton'
import { useRouter } from 'next/navigation'

const Update = () => {

  const router = useRouter()

  const handleClickUpdate = () => {
    router.back()
  }

  return (
    <div className={styles.theMainDiv}>
      <div className={styles.container}>
        <h1>Update</h1>
        <div className={styles.innerContainer}>
          <InputField type='text' lable='Title' />
          <InputField type='text' lable='Content' />
        </div>
        <CustomButton onClick={() => handleClickUpdate()} type='submit' name='Update' />
      </div>
    </div>
  )
}

export default Update
