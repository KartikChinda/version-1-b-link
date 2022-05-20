import React from 'react';
import Event from './Event/Event';
import useStyles from './styles';
import { Grid } from '@mui/material';

const Events = () => {
  const classes = useStyles();
  return (
    <>
      <h2>Work Related Events</h2>
      <Grid className={classes.mainContainer} container spacing={2} xl={12}>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
      </Grid>
      <div className={classes.break}></div>
      <h2>Social Events</h2>
      <Grid className={classes.mainContainer} container spacing={2} xl={12}>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={2}>
          <Event />
        </Grid>
      </Grid>
    </>
  );
};

export default Events;
