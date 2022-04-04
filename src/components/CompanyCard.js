import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CompanyCard({ name, sector }) {
  return (
    <Card sx={{ 
            width: ['100%', '50%', '33%', '33%', '33%'] 
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { sector }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}