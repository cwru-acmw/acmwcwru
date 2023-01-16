import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import contactPic from './pictures/contact-header.jpg';
import ListItem from '@mui/material/ListItem';

function Contact() {
   const btnStyle2 = {
      textTransform: 'unset !important', 
      fontFamily: 'Raleway', 
      fontWeight: 600,
      fontSize: '16px', 
      color: '#7954A1',
      border: '1.5px solid #7954A1',
      // backgroundColor: '#7954A1',
      px: '25px',
      '&:hover': {
         backgroundColor: '#7954A1',
         color: 'white'
      },
   }

   const linkStyle = {
      textDecoration: "none",
      color: "#ffffff", 
    };

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={contactPic} height='50' top='40' title='Contact Us' subtitle='' />
         <Container>
         <Box sx={{my:'25px'}}>
               <Typography variant="h4" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                 Get in Touch 
               </Typography>
               <Box sx={{my:'1%'}}>
                  <Typography variant="h6">
                     Interested in joining ACM-W? Join our club on our <Link href="https://community.case.edu/ACMW/club_signup">CampusGroups</Link>  page to join the emailing list.
                  </Typography>
                  <Typography variant="h6" sx={{mt: '1%'}}>
                     If you are interested in scheduling an event with us or have any questions, please email us at <Link href="mailto: acmw@case.edu">acmw@case.edu</Link>
                  </Typography>
               </Box>
               {/* <Button href = "/about" sx={{...btnStyle2, my: '15px'}}>Contact our Exec Board</Button> */}
               <Link to='/about' style={linkStyle}>
                  <Button sx={{...btnStyle2, my: '15px'}} >
                     Contact our Exec Board
                  </Button>
               </Link>
            </Box>
         </Container>
      </ThemeProvider>
   );
}

export default Contact; 