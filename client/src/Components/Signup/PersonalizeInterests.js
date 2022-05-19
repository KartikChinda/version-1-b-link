import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '../../images/logo.svg';

import Copyright from './Copyright';

const theme = createTheme();

export default function PersonalizeInterests() {
  const [initialState, setState] = React.useState({
    aiml: false,
    arvr: false,
    crypto: false,
    quantum: false,
    digitaliesing: false,
  });

  const handleClick = (name) => {
    console.log(initialState);
    setState(prevState => ({
        ...prevState,
        [name]: !prevState[name]
    }));
    console.log(initialState);
  }

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
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              Personifizieren
            </Typography>
            <br />
            <Typography component='p' variant='p'>
            Wähle aus den folgenden Themen aus, welche dich interessieren:
            </Typography>
            <br />
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Stack 
                direction="row" 
                spacing={3}
                margin="normal">
                <Chip label="AI/ML" onClick={() => handleClick("aiml")} variant={initialState['aiml'] ? "" : "outlined"} color="primary" />
                <Chip label="AR/VR" onClick={() => handleClick("arvr")} variant={initialState['arvr'] ? "" : "outlined"} color="primary" />
                <Chip label="Cryptocurreny" onClick={() => handleClick("crypto")} variant={initialState['crypto'] ? "" : "outlined"} color="primary" />
              </Stack>
              <br />
              <Stack 
                direction="row" 
                spacing={3}
                margin="normal">
                <Chip label="Quantum computing" onClick={() => handleClick("quantum")} variant={initialState['quantum'] ? "" : "outlined"} color="primary" />
                <Chip label="Digitaliesing" onClick={() => handleClick("digitaliesing")} variant={initialState['digitaliesing'] ? "" : "outlined"} color="primary" />
              </Stack>
                
                
              
              <br/>
              <FormControlLabel
                control={<Checkbox value='ich-stimme' color='primary' />}
                label='Ich stimme zu die .......'
                margin="normal"
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Weiter
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
