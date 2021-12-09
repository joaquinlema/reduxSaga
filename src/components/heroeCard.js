import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function HeroeCard({ data: { images, name, connections, biography, work } }) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="80%"
                    image={images.md}
                    alt={name}
                />
                <CardContent >
                    <Typography gutterBottom variant="h2" component="div">
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        {biography.fullName}
                    </Typography>
                    {biography.alterEgos && <Typography gutterBottom variant="h5" component="div">
                        {biography.alterEgos}
                    </Typography>}
                    <Typography variant="body2" color="text.secondary">
                        {connections.relatives}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {connections.groupAffiliation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {work.occupation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {biography.placeOfBirth}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {biography.publisher} - {biography.firstAppearance}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
        </Card>
    );
}