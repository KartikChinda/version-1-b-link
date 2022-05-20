import React from 'react';
import Event from './Event/Event';
import useStyles from './styles';
import { Grid } from '@mui/material';

const Events = () => {
    const classes = useStyles();
    return (
        <>
            <h2>Work Related Events</h2>
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </Grid>
            <div className={classes.break}>

            </div>
            <h2>Social Events</h2>
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </Grid>

        </>
    )
}

export default Events