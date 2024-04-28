import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material';
import logo from '../../assets/logo.jpeg';
import { useState } from 'react';

const pages = ['Services', 'About', 'Contact'];

const Header = () => {
  const {
    palette: {
      primary: { main },
      secondary: { light: textLight },
    },
  } = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='static'
      sx={{
        background: main,
        color: textLight,
      }}>
      <Toolbar
        disableGutters
        sx={{
          padding: '2rem',
          gap: { xs: '2rem', md: '10rem' },
          alignItems: 'center',
        }}>
        <Typography
          noWrap
          component='a'
          sx={{
            m: '0 2rem',
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            alignItems: 'center',
            gap: '1.5rem',
            letterSpacing: '.3rem',
            color: textLight,
            fontSize: '3.6rem',
            textDecoration: 'none',
          }}>
          <Box
            sx={{
              borderRadius: '100%',
            }}
            component={'img'}
            src={logo}
            width={'7rem'}
            height={'7rem'}
          />
          Sarthi Ayurvedic Hospital
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            onClick={handleOpenNavMenu}
            sx={{ color: textLight }}>
            <MenuIcon sx={{ fontSize: '2.2rem' }} />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            slotProps={{
              paper: {
                sx: {
                  width: 'calc(100%)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                },
              },
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            {pages.map((page) => (
              <MenuItem
                key={page}
                sx={{ padding: '1rem', minHeight: 'auto', width: '100%' }}
                onClick={handleCloseNavMenu}>
                <Typography variant='h6' textAlign='center' color={'primary'}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant='h4'
          component='a'
          sx={{
            display: { xs: 'flex', md: 'none' },
            textWrap: 'wrap',
            textAlign: 'center',
            alignSelf: 'center',
            color: textLight,
          }}>
          Sarthi Ayurvedic Hospital
        </Typography>
        <Stack
          flexDirection={'row'}
          gap='1rem'
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                display: 'block',
                fontSize: '2rem',
                color: textLight,
                textTransform: 'capitalize',
              }}>
              {page}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
