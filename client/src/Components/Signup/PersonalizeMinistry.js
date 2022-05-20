import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image from '../../images/logo.svg';
// import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from './Copyright';

const theme = createTheme();

const ministries = [
  {
    value: 'Staatskanzlei',
    label: 'Staatskanzlei',
  },
  {
    value: 'Bayerisches Staatsministerium für Digitales',
    label: 'Bayerisches Staatsministerium für Digitales',
  },
  {
    value: 'Bayerisches Staatsministerium des Innern, für Sport und Integration',
    label: 'Bayerisches Staatsministerium des Innern, für Sport und Integration',
  },
];

const ministryPositions = [
  {
    value: 'Minister',
    label: 'Minister',
  },
  {
    value: 'Representative',
    label: 'Representative',
  },
  {
    value: 'Service Dog',
    label: 'Service Dog',
  },
];

export default function PersonalizeMinistry() {
  const [ministry, setMinistry] = React.useState();
  const [ministryPosition, setMinistryPosition] = React.useState();

  const handleChangeMinistry = (event) => {
    setMinistry(event.target.value);
  };

  const handleChangeMinistryPosition = (event) => {
    setMinistryPosition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: 390,
              backgroundColor: '#FAFAFA',
              boxShadow: '0 1px 4px 0 rgba(0,0,0,0)',
            }}
          >
            <CardMedia
              component='img'
              height='140'
              src={image}
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                B-Link ist deine Plattform, un Dich Kollegen aus dem
                öffentlichen Dienst auszutauschen! Trete unserem Netzwerk bei,
                um spannende Veranstaltungen zu finden.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              Personifizieren
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <TextField
                  select
                  margin='normal'
                  required
                  fullWidth
                  id='ministry'
                  label='Zu welchem Ministerium gehörst Du?'
                  value={ministry}
                  onChange={handleChangeMinistry}
                  autoFocus
                >
                  {ministries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  margin='normal'
                  required
                  fullWidth
                  id='ministryPosition'
                  label='Was ist Deine Stelle?'
                  value={ministryPosition}
                  onChange={handleChangeMinistryPosition}
                >
                  {ministryPositions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Weiter
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
