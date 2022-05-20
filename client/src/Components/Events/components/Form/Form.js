import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Form = () => {

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Add an Event </Typography>
                <TextField placeholder='Event Name' variant="outlined" label="Title" fullWidth />
                <TextField placeholder="Ort" variant="outlined" label="Ort" fullWidth />
                <TextField placeholder="Community Chat Link" variant="outlined" label="Community Chat Link" fullWidth />
                {/* <DatePicker
                    label="Material Date Picker"
                    variant="dialog"
                /> */}
                <TextField variant="outlined" label="Themes (comma separated)" fullWidth />
                <TextField variant="outlined" label="Description" fullWidth multiline rows={4} placeholder='Enter a description' />
                <FormControl fullWidth >
                    <FormLabel fullWidth style={{ padding: '7px', marginBottom: '-5px' }} >Type of Event</FormLabel>
                    <RadioGroup row >
                        <FormControlLabel style={{ paddingLeft: '7px' }} value="Work Related Event" control={<Radio />} label="Work Related Event" />
                        <FormControlLabel value="Social Event" control={<Radio />} label="Social Event" />

                    </RadioGroup>
                </FormControl>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} /></div>
                <Button style={{ marginBottom: '5px', marginTop: '10px' }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </form>
        </Paper >
    );
};

export default Form;