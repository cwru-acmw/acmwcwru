import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import Link from '@mui/material/Link';

import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import contactPic from './pictures/contact-header.jpg';
import ListItem from '@mui/material/ListItem';

function Contact() {
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={contactPic} height='50' top='40' title='Contact Us' subtitle='' />
         <Container>
         <Box sx={{my:'25px'}}>
               <Typography variant="h4" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                 Get in Touch 
               </Typography>
               <Box sx={{my:'1%'}}>
               <Typography variant="body1">
                  Interested in joining ACM-W? Join our club on our <Link href="https://community.case.edu/ACMW/club_signup">CampusGroups</Link>  page to join the emailing list.
               </Typography>
               </Box>
               <Box sx={{my:'1%'}}>
               <Typography variant="body1">
                  If you are interested in scheduling an event with us or have any questions, please email us at <Link href="mailto: acmw@case.edu">acmw@case.edu</Link>
               </Typography>
               </Box>
               <Box sx={{my:'1%'}}>
               <Button variant="contained" href = "/about">Contact our Exec Board</Button>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   );
}

export default Contact; 