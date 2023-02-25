import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { divide } from 'lodash';
import Search from './Search';


const drawerWidth = 240;

// const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const [onSrch,setOnSrch] = useState(false)
  const [btn,setBtnClose] = useState(false)
   
  const [navItems,setNavItem] = useState([
    {
      name:'home',
      path:'/'
    },
    {
      name:'about',
      path:'about'
    },
    {
      name:'contact',
      path:'contact'
    }
  ])

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <AppBar   className='py-3 ' position='relative' sx={{backgroundColor:'white',color:'black',display:'flex',justifyContent:'space-around'}} >
        
        <Toolbar>
        
          {/* <Box > */}

          
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
             <Button> <Link className='lnk' to={item.path} key={item.name} sx={{ color: 'black' }}>
                {item.name}
              </Link> </Button>
            ))}
          </Box>
          
        
         

          <Typography
            m='0px 55px'
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },textAlign:'center' }}
          >
           <Link className='lnk title_sp'  to={'/'}> BOTIGA </Link>
          </Typography>
         
             {/* <Box sx={{display:'flex',justifyContent:'space-evenly',width:'100%'}}> */}
               

         <Box > 
           <Typography onClick={() => setOnSrch(!onSrch)} id='abc' className=' mx-4' variant='button'>
             {onSrch ? 
            <Person2Icon  />
            :
            <SearchIcon onClick={() => { setOnSrch(true)   }} /> 

             }
           
           </Typography>
           <Typography id='abc'  className=' mx-4' sx={{display:{xs:'none',sm:'inline-block',md:'inline-block'}}}  variant='button'>
              <Person2Icon  />
           </Typography>
           <Typography id='abc' className=' mx-4' sx={{display:{xs:'none',sm:'inline-block',md:'inline-block'}}} variant='button'>
              <ShoppingBagIcon />
           </Typography>
         </Box>

         <Typography
            // m='5px 0px'
            variant="h5"
            component="div"
            sx={{ display: { xs: 'block', sm: 'none',md:'none' } , fontSize:'16px' }}
          >
           <Link className='lnk title_sp'  to={'/'}> BOTIGA </Link>
          </Typography>


 <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>


          
        
        </Toolbar>

{onSrch ? (
  <Box >

  <Toolbar  >
<Search  />
</Toolbar> 
  </Box>
)
  :  <div></div>}
        

      </AppBar>
      <Toolbar />
          
     
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;