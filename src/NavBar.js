import * as React from "react";
import { Button, Container, AppBar, Box, Toolbar, Typography, Stack, ButtonGroup, Menu, MenuItem, IconButton, Drawer, Divider, List, ListItem, ListItemText, ListItemButton } from "@mui/material"; 
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 


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

   const btnStyle = {
      textTransform: 'unset !important', 
      fontSize: '20px',
      fontFamily: 'Raleway', 
      borderRadius: '0px',
      // fontWeight: 'bold', 
      color: 'white',
      px: '5px',
      '&:hover': {
         color: '#401E46',
         backgroundColor: '#F2F2F2',
      },
   }

   const listBtnStyle = {
      textTransform: 'unset !important', 
      textAlign: 'center',
      width: '100%',
      fontSize: '20px',
      fontFamily: 'Raleway', 
      borderRadius: '0px',
      // fontWeight: 'bold', 
      color: '#401E46',
      px: '5px',
      '&:hover': {
         color: '#401E46',
         backgroundColor: '#F2F2F2',
      },
   }

   return (
      <ThemeProvider theme={theme}>
         <Box>
            <AppBar position="static" color='primary' sx={{py: 2}} component="nav">
               <Toolbar className="nav-bar-bar" sx={{ justifyContent: "space-between"}}>
                  <Link to="/" style={linkStyle}>
                     <Typography  variant="h5" component="div" sx={{fontFamily: "Raleway", fontWeight: '600', color: "light", textDecoration: 'none', ml: '25px'}}>
                        ACM-W · CWRU
                     </Typography>
                  </Link>
               <Stack spacing={0} direction="row" sx={{ display: { xs: "none", sm: "block" } }}>
                  <Link to='/about' style={linkStyle}>
                     <Button sx={{...btnStyle, px: "25px"}} >
                        About
                     </Button>
                  </Link>
                  <Link to='/events' style={linkStyle}>
                     <Button sx={{...btnStyle, px: "25px"}}>
                        Events
                     </Button>
                  </Link>
                  <Link to='/resources' style={linkStyle}>
                     <Button sx={{...btnStyle, px: "25px"}}>
                        Resources
                     </Button>
                  </Link>
                  <Link to='/contact' style={linkStyle}>
                     <Button sx={{...btnStyle, px: "25px"}}>
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

               {/* <Stack spacing={8} direction="row" sx={{justifyContent: "space-between"}}>
                  <Link  to="/about" style={linkStyle}> 
                     <Typography  variant="h6" component="div" sx={{fontFamily: "Raleway", textAlign: "center"}}>
                        About
                     </Typography>
                  </Link>
                  
                  <Link to="/events" style={linkStyle}>
                     <Typography  variant="h6" component="div" sx={{fontFamily: "Raleway", textAlign: "center"}}>
                        Events
                     </Typography>
                  </Link>

                  <Link to="/resources" style={linkStyle}>
                     <Typography  variant="h6" component="div" sx={{fontFamily: "Raleway", textAlign: "center"}}>
                        Resources
                     </Typography>
                  </Link>

                  <Link to="/contact" style={linkStyle}>
                     <Typography  variant="h6" component="div" sx={{fontFamily: "Raleway", textAlign: "center"}}>
                        Contact
                     </Typography>
                  </Link>
               </Stack> */}
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
                        <ListItem disablePadding sx={{px: '85px'}}>
                           {/* <Link to='/about' style={{...linkStyle}}> */}
                           <Link to='/about' style={{...linkStyle}}>
                              <Button sx={{...listBtnStyle, }} >
                                 About
                              </Button>
                           </Link>
                              
                        </ListItem>
                        <ListItem disablePadding sx={{px: '82px'}}>
                           {/* <Button href='/events' sx={{...listBtnStyle,}} >
                              Events
                           </Button> */}
                           <Link to='/events' style={{...linkStyle}}>
                              <Button sx={{...listBtnStyle, }} >
                                 Events
                              </Button>
                           </Link>
                        </ListItem>
                        <ListItem disablePadding sx={{px: '65px'}}>
                              {/* <Button href='/resources' sx={{...listBtnStyle,}} >
                                 Resources
                              </Button> */}
                           <Link to='/resources' style={{...linkStyle}}>
                              <Button sx={{...listBtnStyle, }} >
                                 Resources
                              </Button>
                           </Link>
                        </ListItem>
                        <ListItem disablePadding sx={{px: '77px'}}>
                           {/* <Button href='/contact' sx={{...listBtnStyle,}} >
                                 Contact
                              </Button> */}
                           <Link to='/contact' style={{...linkStyle}}>
                              <Button sx={{...listBtnStyle, }} >
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