import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import BasicSelect from '../BasicSelect';
import Copyright from './Copyright';

const theme = createTheme();

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

  const handleChange = (event) => {
    event.preventDefault();
    console.log("changed content");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Personifizieren
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Zu welchem Ministerium gehörst Du?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-ministry"
                value="Hello"
                label="Zu welchem Ministerium gehörst Du?"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Staatskanzlei">Staatskanzlei</MenuItem>
                <MenuItem value="Bayerisches Staatsministerium für Digitales">Bayerisches Staatsministerium für Digitales</MenuItem>
                <MenuItem value="Bayerisches Staatsministerium des Innern, für Sport und Integration">Bayerisches Staatsministerium des Innern, für Sport und Integration</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <InputLabel id="demo-simple-select-label">Was ist Deine Stelle?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-position"
                value="Hello"
                label="Was ist Deine Stelle?"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Minister">Minister</MenuItem>
                <MenuItem value="Representative">Representative</MenuItem>
                <MenuItem value="Service Dog">Service Dog</MenuItem>
              </Select>
            </FormControl>
            <BasicSelect/>
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
      </Container>
    </ThemeProvider>
  );
}
