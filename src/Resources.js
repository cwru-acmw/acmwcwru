import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import resourcesPic from './pictures/resources-header.jpg';

function Resources() {
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={resourcesPic} height='50' top='40' title='Resources' subtitle='' />  
         {/* write rest of code here */}
      </ThemeProvider>
   );
}

export default Resources; 