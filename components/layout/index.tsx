import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import CartIcon from '@mui/icons-material/ShoppingCart';
import {Button} from '@mui/material';
import { useStore } from '../../hooks/use-store';
import Link from 'next/dist/client/link';
import styles from './layout.module.scss';

export default function Layout({children}) {
    const [count, setCount] = useState(0);
    const router = useRouter();
    const { store } = useStore();
    useEffect(() => {
        const values = Object.values(store);
        let count = 0;
        values.forEach(item => {
            const { items } = item;
            items.forEach(i => {
                count += i.count;
            });
        });
        setCount(count);
    }, [store]);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" className={styles.wrapper}>
                <Toolbar>
                    <Link href={'/'}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: 'block'}}
                            className={styles.logo}
                        >
                            Global Shop
                        </Typography>
                    </Link>
                    <Box sx={{display: 'flex'}}>
                        <Button color="inherit">
                            USA
                        </Button>
                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: 'flex'}}>
                        <IconButton
                            size="large"
                            aria-label="show cart"
                            color="inherit"
                            onClick={()=> router?.push('/cart')}>
                                <Badge badgeContent={count} color="error">
                                     <CartIcon/>
                                 </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
}
