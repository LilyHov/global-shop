import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import CartIcon from '@mui/icons-material/ShoppingCart';
import {Button} from '@mui/material';
import {getPaths} from '../../lib/content';
import styles from './layout.module.scss';

export default function Layout({children}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.wrapper}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display:  'block' }}
                    >
                        Global Shop
                    </Typography>
                    <Box sx={{ display:'flex' }}>
                        <Button color="inherit">
                            Germany Store
                        </Button>
                        {console.log(getPaths(), 'stores')}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display:'flex' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <CartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
}
