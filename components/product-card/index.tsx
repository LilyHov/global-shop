import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './card.module.scss';

export default function ProductCard({product}) {
    return (
        <Card className={styles.wrapper}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {product.isInStock ? "In stock" : "Coming soon"}
                </Typography>
                <Typography variant="subtitle2">
                    {product.price.amount} {' '}
                    {product.price.currency}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" >Add To Cart</Button>
            </CardActions>
        </Card>
    );
}
