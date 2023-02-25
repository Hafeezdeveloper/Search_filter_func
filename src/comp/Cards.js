import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards({data,getdata}) {
  return (
    <Card onClick={()=> getdata(data)} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small"  color="primary">
          Share
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}