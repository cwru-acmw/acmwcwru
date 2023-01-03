import { Button, Container, AppBar, Box, Toolbar, Typography, Stack, ButtonGroup, Menu, MenuItem, IconButton } from "@mui/material"; 
import { Link } from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from './pictures/ACMW-CWRU-02.png';

export default function Footer() {
   const iconBtnStyle = {
      backgroundColor: '#CA7FF2', 
      '&:hover': {
         backgroundColor: '#7954A1',
      },
   }
   
   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ flexGrow: 1}}> 
            <AppBar position="static" sx={{background: "#323E42", py: "1%"}}>
               <Toolbar sx={{justifyContent: 'space-between'}}>
                  <a href='/'>
                     <img src={logo} style={{width: '7em'}} />
                  </a>
                  <Stack direction="row" spacing={2}>
                     <IconButton href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE=" target='_blank' size="medium" sx={iconBtnStyle} >
                        <InstagramIcon sx={{color: "#ffffff"}} />
                     </IconButton>
                     <IconButton href="mailto: acmw@case.edu" size="medium" sx={iconBtnStyle} >
                        <MailOutlineIcon sx={{color: "#ffffff", }} />
                     </IconButton>
                  </Stack>
               </Toolbar>
            </AppBar>
         </Box>
      </ThemeProvider>
      
   );
}