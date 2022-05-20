import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../../../../images/eventcard.png';

const Event = (props) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component='img'
        height='140'
        image={image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Test Event
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          B-Link
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          11-Nov-2023
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
          aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Join Chat</Button>
      </CardActions>
    </Card>
  );
};

export default Event;
