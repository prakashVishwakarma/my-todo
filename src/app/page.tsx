'use client'

import React, { useEffect, useState } from 'react'
import Card from '@/Components/PureComponents/Card/MyCard'
import styles from './page.module.css'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CustomButton from '@/Components/PureComponents/CustomButton/CustomButton'
import Link from 'next/link'
import { myLocalData, myLocalDataName } from '@/Constants/myLocalData'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

  const [myTodos, setMyTodos] = useState([])

  useEffect(() => {
    const myLocalData = JSON.parse(localStorage.getItem(myLocalDataName) ?? '{}')
    setMyTodos(myLocalData.myTodo)
  }, [])
  // console.log('myTodo', myTodos)
  return (
    <>
      <Box className={styles.container} sx={{ mt: '20px' }}>
        <Link href="/create">
          <CustomButton type='button' name='Create' />
        </Link>
      </Box>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Box sx={{ flexGrow: 1, mt: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {myTodos?.map((value, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card value={value} index={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Home;