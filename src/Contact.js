import { Button, Container, Box, Typography} from "@mui/material"; 
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import contactPic from './pictures/contact-header.jpg';

function Contact() {
    const linkStyle2 = {
      color: "#7954A1", 
    };

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={contactPic} height='50' top='40' title='Contact Us' subtitle='' />
         <Container>
            <Box sx={{my:'25px'}}>
               <Typography variant="h4" color="secondary" sx={{fontWeight: 700, pb: '1%'}}>
                 Get in Touch 
               </Typography>
               <Box sx={{my:'1%'}}>
                  <Typography variant="body1" sx={{fontWeight: 500}}>
                     Interested in joining ACM-W? Join our club on our <a href="https://community.case.edu/ACMW/club_signup" target='_blank' style={linkStyle2}>CampusGroups</a>  page to join the emailing list.
                  </Typography>
                  <Typography variant="body1" sx={{fontWeight: 500, mt: '1%'}}>
                     If you are interested in scheduling an event with us or have any questions, please email us at <a style={linkStyle2} href="mailto: acmw@case.edu">acmw@case.edu</a>
                  </Typography>
               </Box>

               <Link to='/about'>
                  <Button variant='outlinedBtn' sx={{my: '15px', fontWeight: 700}}>
                     Contact our Exec Board
                  </Button>
               </Link>
            </Box>
         </Container>
      </ThemeProvider>
   );
}

export default Contact; 