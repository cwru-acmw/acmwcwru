import * as React from "react";
import { Button, AppBar, Box, Toolbar, Typography, Stack, IconButton, Drawer, List, ListItem,} from "@mui/material"; 
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import './App.css';

export default function NavBar(props) {
   const drawerWidth = 240;
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const container = window !== undefined ? () => window().document.body : undefined;

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    }; 

   const linkStyle = {
      textDecoration: "none",
      color: "#ffffff", 
    };

   return (
      <ThemeProvider theme={theme}>
         <Box>
            <AppBar position="static" color='primary' sx={{py: 2}} component="nav">
               <Toolbar className="nav-bar-bar" sx={{ justifyContent: "space-between"}}>
                  <Link to="/" style={linkStyle}>
                     <Typography  variant="h6" component="div" sx={{fontSize: '1.5rem', fontWeight: '600', color: "light", textDecoration: 'none', ml: '25px'}}>
                        ACM-W · CWRU
                     </Typography>
                  </Link>
               <Stack spacing={0} direction="row" sx={{ display: { xs: "none", sm: "block" } }}>
                  <Link to='/about' >
                     <Button variant='navbarMain' sx={{px: "25px"}}>
                        About
                     </Button>
                  </Link>
                  <Link to='/events'>
                     <Button variant='navbarMain' sx={{px: "25px"}}>
                        Events
                     </Button>
                  </Link>
                  <Link to='/resources'>
                     <Button variant='navbarMain' sx={{px: "25px"}}>
                        Resources
                     </Button>
                  </Link>
                  <Link to='/contact'>
                     <Button variant='navbarMain' sx={{px: "25px"}}>
                        Contact
                     </Button>
                  </Link>
                  
               </Stack>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  <MenuIcon />
               </IconButton>

               </Toolbar>
            </AppBar>
            <Box component="nav">
               <Drawer
                  container={container}
                  anchor='right'
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true // Better open performance on mobile.
                  }}
                  sx={{
                     display: { xs: "block", sm: "none" },
                     "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth
                     }
                  }}
               >
                  <Box 
                     onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
                     <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <ListItem disablePadding sx={{display: 'block', ml: 'auto', mr: 'auto'}}>
                           <Link to='/about'>
                              <Button variant='navbarList'>
                                 About
                              </Button>
                           </Link>
                              
                        </ListItem>
                        <ListItem disablePadding sx={{display: 'block', ml: 'auto', mr: 'auto'}}>
                           <Link to='/events' >
                              <Button variant='navbarList'>
                                 Events
                              </Button>
                           </Link>
                        </ListItem>
                        <ListItem disablePadding sx={{display: 'block', ml: 'auto', mr: 'auto'}}>
                           <Link to='/resources' >
                              <Button variant='navbarList'>
                                 Resources
                              </Button>
                           </Link>
                        </ListItem>
                        <ListItem disablePadding sx={{display: 'block', ml: 'auto', mr: 'auto'}}>
                           <Link to='/contact' >
                              <Button variant='navbarList'>
                                 Contact
                              </Button>
                           </Link>
                        </ListItem>
                     </List>
                  </Box>
               </Drawer>
            </Box>
         </Box>
      </ThemeProvider>
      
   );
}