import React from 'react';
import { Link } from 'react-router-dom';
import { useContext,} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Menu from './Menu';
import Modal from './Modal';
import { FavoriteIconHeader } from './FavoritesIconHeader';
import {  getDron } from '../../Context/UserProvider';
import { Badge } from '@mui/material';
import './Menu.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



export function SearchMui() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false); 
  const {cartQuantity, heartQuantity} = useContext(getDron);
  const {username} = useContext(getDron);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  return (
    <>
     <nav className="navregistre">
            <Link className="iniciarsesion" to='/login'>Iniciar Sesión</Link>
            <Link  className="registrarse" to='/registre'>Registrarse</Link>
          </nav>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FF4000', color: '#white','&:hover': {
    

        },}}>
        <Toolbar>
          <IconButton className='n'
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon className="classestoolbar" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', default: 'flex' },
              alignItems: 'center',
            }}
          >
            <img src="/assets/Fotos/icon_dron.png" alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '10px', color: '#white'}} />
          <Link to="/"><span className='nameApp' style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: '300' }}>DroneTech</span></Link>
      
          </Typography>  
          <Link className="iconocarrito" to="/cuenta">
          <AccountCircleSharpIcon className="iconlogin" sx={{ fontSize: 30,}}/> <span className='username'>{username}</span></Link>
          <IconButton  >
            <Badge badgeContent={heartQuantity} color="primary">
              <Link className="iconofavorites" to="/favorites">
              <FavoriteIconHeader/>
              </Link>
            </Badge>
          </IconButton>

          <IconButton  >
            <Badge badgeContent={cartQuantity} color="primary">
              <Link className="iconocarrito" to="/cart">
              <AddShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
        
          <Search >
            <Modal  open={isModalOpen} handleClose={handleModalClose} />
          </Search>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} handleClose={handleMenuClose} />
    </Box>
    </>
  );
}
