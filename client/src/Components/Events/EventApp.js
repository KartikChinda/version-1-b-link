import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Events from './components/Events/Events';
import Form from './components/Form/Form';
import useStyles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blinklogo from '../../images/blinklogo.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TopEvents from './components/Events/TopEvents/TopEvents';

const theme = createTheme();

const EventApp = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appBar} position="static" style={{ background: '#FAFAFA' }}>
                {/* <Typography className={classes.heading} variant="h3" >Events</Typography> */}
                <img src={blinklogo} alt="icon" height="63" className={classes.image} />
                <SettingsIcon color='disabled' />
                <AccountCircleIcon color='disabled' />
            </AppBar>
            <Container maxWidth="lg">

                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={12}>

                                <TopEvents />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Events />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    )
}

export default EventApp;