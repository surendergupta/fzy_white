import React, { useState } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { useTheme, useMediaQuery, AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <AppBar position="relative" sx={{ background: "#fff", color: '#000' }}>
                <Toolbar>
                    <div className='logo'>
                        <NavLink to={'/'} >
                            <img src={logo} alt='Fizzyfy Coin' />
                        </NavLink>
                    </div>
                    { isMobile ? (
                    <>
                        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                            <div className='navlist'>
                                <ul>
                                    <li>
                                        <NavLink className='navlink' to={'/'}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/#product'}>Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/#roadmap'}>Roadmap</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/about'}>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/#token'}>Tokens</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/contact'}>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/register'}>Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navlink' to={'/login'}>Login</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                        <IconButton sx={{ color: 'black', marginLeft: 'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon />
                        </IconButton>
                    </>                    
                    ) : (
                    <div className='navlist'>
                        <ul>
                            <li>
                                <NavLink className='navlink' to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/#product'}>Product</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/#roadmap'}>Roadmap</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/#token'}>Tokens</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/contact'}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/register'}>Register</NavLink>
                            </li>
                            <li>
                                <NavLink className='navlink' to={'/login'}>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    </div>
  )
}

export default Navbar;