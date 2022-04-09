import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const pics = {
  "./images/bata.png" : require("./images/bata.png"),
  "./images/bayer.png" : require( "./images/bayer.png"),
  "./images/interloop.png" : require("./images/interloop.png"),
  "./images/artistic.png" : require("./images/artistic.png"),
  "./images/colgate.png" : require("./images/colgate.png"),
  "./images/dalda.png" : require("./images/dalda.png"),
  "./images/daraz.png" : require("./images/daraz.png"),
  "./images/baf.png" : require("./images/baf.png"),
  "./images/atlas.png" : require("./images/atlas.png"),
  "./images/mayfair.png" : require("./images/mayfair.png"),
  "./images/archroma.png" : require("./images/archroma.png"),
  "./images/packages.png" : require("./images/packages.png"),
  "./images/dawlence.png" : require( "./images/dawlence.png")
}

export default function CompanyCard({ name, sector, img, index }) {
  return (
    <Card sx={{ 
            width: ['100%', '50%', '33%', '33%', '33%'] 
          }}
          onClick={() => window.open(`/project/${index}`)}
          >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width="100"
          src={pics[img]}
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