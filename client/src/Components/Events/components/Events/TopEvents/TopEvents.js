import React from 'react';
import Event from '../Event/Event';
import useStyles from './styles';
import { Grid, Stack } from '@mui/material';
import { createTheme } from '@mui/material';

// const theme = createTheme();

const TopEvents = () => {
  const classes = useStyles();
  return (
    <>
      <Stack spacing={2}>
        <h2>Hallo, User!</h2>
        <h3>Check out the top events this week</h3>
      </Stack>

      <Grid container spacing={2} xl={12}>
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

export default TopEvents;
