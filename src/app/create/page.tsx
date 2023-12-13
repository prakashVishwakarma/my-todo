'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import InputField from '@/Components/PureComponents/InputField/InputField'
import CustomButton from '@/Components/PureComponents/CustomButton/CustomButton'
import { useRouter } from 'next/navigation'
import { myLocalData, myLocalDataName } from '@/Constants/myLocalData'

const Create = () => {
  const [todoObj, setTodoObj] = useState({})
  const [todoData, setTodoData] = useState([
    {
      id: 'sxfd',
      title: 's',
      content: 's',
    },
    {
      id: 'd',
      title: 'd',
      content: 'd',
    },

  ])

  const router = useRouter()

  const handleClickCreate = () => {
    const storedData = localStorage.getItem(myLocalDataName);
    const parsedData = storedData ? JSON.parse(storedData) : {};
    const myLocalData = {
      loginAndSignup: { ...parsedData.loginAndSignup },
      myTodo: [...todoData],
    }
    // localStorage.setItem(myLocalDataName, JSON.stringify(todoData))
    console.log(myLocalData)
    // router.back()
  }

  const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoObj((prev) => ({ ...prev, [name]: value }));
  }

  console.log(todoObj)

  return (
    <div className={styles.theMainDiv}>
      <div className={styles.container}>
        <h1>Create</h1>
        <div className={styles.innerContainer}>
          <InputField onChange={handleInputFieldChange} name='title' type='text' lable='Title' />
          <InputField onChange={handleInputFieldChange} name='content' type='text' lable='Content' />
        </div>
        <CustomButton onClick={() => handleClickCreate()} type='submit' name='Create' />
      </div>
    </div>
  )
}

export default Create
