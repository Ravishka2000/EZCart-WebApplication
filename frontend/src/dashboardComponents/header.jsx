import { useEffect, useState } from 'react';
import { AppBar, Box, Grid, IconButton, Drawer, Toolbar, Typography, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import { useAuthContext } from '../../hooks/useAuthContext';
// import { useLogout } from '../../hooks/useLogout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const header = () => {

    // const { user } = useAuthContext()
    // const { logout } = useLogout();

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    // const handleLogoutClick = () => {
    //     logout()
    // }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 150) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollPosition]);

    return (
        <Grid container mt={0}>
            <Grid item xs={12} md={12}>
                <AppBar position="fixed"
                    sx={{
                        backgroundColor: isScrolled ? '#9EB384' : '#435334',
                        color: 'black',
                        boxShadow: isScrolled ? '0px 2px 10px rgba(0, 0, 0, 0.5)' : 'none',
                    }}
                    elevation={isScrolled ? 1 : 0}>
                    <Toolbar>
                        <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '28px', fontWeight: '900', color: 'white', marginLeft: 'auto', marginRight: 'auto' }}>EZCART</Typography>
                        <Box sx={{ marginLeft: 'auto', marginRight: 'auto', display: { xs: 'none', md: 'block' } }}>
                            <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: '600', color: 'white', pl: '30px' }}>Dashboard</Typography>
                            <Typography component={Link} to="/add product" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: '600', color: 'white', pl: '30px' }}>Add Products</Typography>

                        </Box>
                        <Button component={Link} to="/" sx={{ textDecoration: 'none', textTransform: 'none', fontSize: '18px', fontWeight: '800', color: 'white', pl: '20px', marginRight: '20px', display: { xs: 'none', md: 'block' } }}>Logout</Button>
                        {/* {user ? (
                            <>
                                <Typography component={Link} to={user.role==="admin"?"/api/admin-dashboard":user.role === "guide" ? "/guide-dashboard" : "/user-dashboard"} sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: '800', color: 'black', pl: '20px', marginLeft: 'auto', display: { xs: 'none', md: 'block' } }}>{user.role==="admin" ? "Admin Dashboard" :user.role==="guide"? "Guide Dashboard":"Profile"}</Typography>
                                <Button onClick={handleLogoutClick} component={Link} to="/" sx={{ textDecoration: 'none', textTransform: 'none', fontSize: '18px', fontWeight: '800', color: 'black', pl: '20px', marginRight: '20px', display: { xs: 'none', md: 'block' } }}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Typography component={Link} to="/login" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: '800', color: 'black', pl: '20px', marginLeft: 'auto', display: { xs: 'none', md: 'block' } }}>Login</Typography>
                                <Typography component={Link} to="/signup" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: '800', color: 'black', pl: '20px', marginRight: '20px', display: { xs: 'none', md: 'block' } }}>Register</Typography>
                            </>
                        )} */}
                        <Box sx={{ marginLeft: 'auto', display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={handleDrawerToggle}>
                                <MenuIcon sx={{ color: 'black', fontSize: '35px' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box sx={{ display: { xs: 'block', md: 'none' }, background: 'white' }}>
                    <Drawer anchor="top" open={open} onClose={handleDrawerToggle} variant="temporary" sx={{ width: '100%' }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#FFFEF7', padding: '20px' }}>
                            <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '28px', fontWeight: '900', color: 'black' }}>EZCART</Typography>
                            <Divider />
                            <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '20px', fontWeight: '500', color: 'black', mt: '20px' }}>Dashboard</Typography>
                            <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '20px', fontWeight: '500', color: 'black', mt: '20px' }}>Products</Typography>
                            <Typography component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '20px', fontWeight: '500', color: 'black', mt: '20px' }}>Add Products</Typography>
                            <Divider />
                            <Button component={Link} to="/" sx={{ textDecoration: 'none', textTransform: 'none', fontSize: '20px', fontWeight: '500', color: 'black', mt: '20px', ml: '0' }}>Logout</Button>
                        
                        </Box>
                    </Drawer>
                </Box>
            </Grid>
        </Grid>
    );
};

export default header;