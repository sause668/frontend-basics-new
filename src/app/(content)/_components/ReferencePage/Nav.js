'use client';

import { AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Button, } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavDir from './NavDir';

export default function Nav({mobile, mainDir, pageDirIndex}) {
    const dynamicRoute = usePathname();
    const [anchorNav, setAnchorNav] = useState(null);
    const [anchorPageNav, setAnchorPageNav] = useState(null);
    const openNav = Boolean(anchorNav);
    const openPageNav = Boolean(anchorPageNav);
    const navKey = 'nav';

    const handleNavOpen = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const handleNavClose = () => {
        setAnchorNav(null);
    };

    const handlePageNavOpen = (event) => {
        setAnchorPageNav(event.currentTarget);
    };

    const handlePageNavClose = () => {
        setAnchorPageNav(null);
    };
    
    useEffect(() => {
        var elm = document.getElementById(mainDir.pageDir[pageDirIndex].TableDir[0].id);
        elm.scrollIntoView({behavior: "smooth"});   
        setAnchorNav(null);               
    }, [dynamicRoute, mainDir, pageDirIndex])
    
    return (
        <AppBar >
            {!mobile ? (
                // Mobile Nav
                <Toolbar>
                    {/* Moblie Page Nav Button*/}
                    <IconButton
                        onClick={handlePageNavOpen}
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Mobile Page Nave Menu*/}
                    <Menu
                        anchorEl={anchorPageNav}
                        open={openPageNav}
                        onClose={handlePageNavClose}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        PaperProps={{
                            elevation: 2,
                            sx: {
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                borderRadius: '7px',
                            }
                        }}
                    >
                        <NavDir page={mainDir.pageDir[pageDirIndex]} close={setAnchorPageNav}/>
                    </Menu>
                    {/* Mobile Home Button*/}
                    <IconButton
                        LinkComponent={Link}
                        href={`/`}
                        size="large"
                        fontSize="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 4 }}
                    >
                        <HomeIcon />
                    </IconButton>
                    {/* Mobile Page Directory Button*/}
                    <Button color="inherit" onClick={handleNavOpen} sx={{ mr: 5 }}>
                        <Typography variant="h3">
                            FEB
                        </Typography>
                        {openNav ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    {/* Mobile Page Directory Menu */}
                    <Menu
                        anchorEl={anchorNav}
                        open={openNav}
                        onClose={handleNavClose}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        PaperProps={{
                            elevation: 2,
                            sx: {
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                borderRadius: '7px',
                            }
                        }}
                    >
                        {mainDir.pageDir.map((page, index) => (
                            <div key={`${navKey}${page.id}`} >
                                <MenuItem 
                                    component={Link} 
                                    href={`/${page.id}`} 
                                    selected={(index == pageDirIndex)}
                                >
                                    <Typography align='center' variant="h6">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            </div>
                        ))}
                    </Menu>
                </Toolbar>    
            ) : (
                // Nav
                <Toolbar>
                    {/* Home Button */}
                    <IconButton
                        LinkComponent={Link}
                        href={`/`}
                        size="large"
                        fontSize="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 4 }}
                    >
                        <HomeIcon />
                    </IconButton>
                    {/* Site Logo */}
                    <Typography variant="h3" sx={{ mr: 5 }} >
                        FEB
                    </Typography>
                    {/* Page Directory */}
                    {mainDir.pageDir.map((page, index) => (
                        <Button 
                            key={`${page.id}pageNav`}
                            component={Link}
                            href={`/${page.id}`}
                            variant={(index == pageDirIndex) ? 'outlined' : ''}
                            color="inherit" 
                            sx={{ mr: 5 }}
                        >
                            <Typography align='center' variant="h6">
                                {page.title}
                            </Typography>
                        </Button>
                    ))}
                </Toolbar>
            )}
        </AppBar>
    );
}