import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
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

const currencies = [
  {
    value: 'Mr',
    label: 'Mr',
  },
  {
    value: 'Ms',
    label: 'Ms',
  },
  {
    value: 'Mrs',
    label: 'Mrs',
  },
  {
    value: 'Dr',
    label: 'Dr',
  },
  {
    value: 'Mx',
    label: 'Mx',
  },
];

export default function SignUp() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const onClickSubmit = (event) => {
    setCurrency(event.target.value);
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
              Anmelden
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    select
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Title'
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    name='name'
                    autoFocus
                  />
                </Grid>
              </Grid>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                    select
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Title'
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={onClickSubmit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'></Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {'Already have an account? Login'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
