import React from 'react'
import Event from '../Event/Event';
import useStyles from './styles';
import { Grid } from '@mui/material';

const TopEvents = () => {
    const classes = useStyles();
    return (
        <>
            <h2>Hallo, User!</h2>
            <h3>Check out the top events this week</h3>
            <Grid item xs={12} sm={6} md={6} className={classes.mainContainer}>
                <Event />
                <Event />
                <Event />
                <Event />

            </Grid>


        </>
    )
}

export default TopEvents