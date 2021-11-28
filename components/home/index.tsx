import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/dist/client/router';
import styles from './home.module.scss';

const image = 'images/home-banner.jpeg';

export default function Home() {
    const router = useRouter();
    return (
        <Card className={styles.wrapper} onClick={() => router?.push('/shop')}>
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
                   Best shop ever
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" >Shop</Button>
            </CardActions>
        </Card>
    );
}
