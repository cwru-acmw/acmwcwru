import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import contactPic from './pictures/contact-header.jpg';

function Contact() {
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={contactPic} height='50' top='40' title='Contact Us' subtitle='' />

         {/* write rest of code here */}
      </ThemeProvider>
   );
}

export default Contact; 