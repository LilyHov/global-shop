import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './home.module.scss';
import {route} from "next/dist/server/router";

const image = 'images/home-banner.jpeg';

export default function Home() {
    return (
        <Card className={styles.wrapper}>
            <CardMedia
                component="img"
                height="350"
                image={image}
                alt="home products banner"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" >Shop</Button>
            </CardActions>
        </Card>
    );
}
