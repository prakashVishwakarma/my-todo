'use client'

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from '../CustomButton/CustomButton';
import Link from 'next/link';
import AlertDialogSlide from '@/Components/AlertDialogSlide/AlertDialogSlide';

const MyCard = () => {

    return (
        <Card sx={{ maxWidth: 345, bgcolor: '#73ff7a98' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <AlertDialogSlide text={'View'} Cancel={'Cancel'} Done={'Done'} title={'Are You Sure You Want To Delete ?'}
                    dialogContentText='
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.' />
                <Link href="/update">
                    <CustomButton type='button' name='Update' />
                </Link>
                <AlertDialogSlide text={'Delete'} Cancel={'Cancel'} Done={'Done'} title={'Are You Sure You Want To Delete ?'} />
                {/* <Link href="#">
                    <CustomButton type='button' name='Delete' />
                </Link> */}
            </CardActions>
        </Card>
    )
}

export default MyCard
