import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 

import aboutPic from './pictures/about-header.jpg';
import presPic from './pictures/arohiPic.JPG';
import vpPic from './pictures/zoePic.JPG';
import prPic from './pictures/aliPic.jpg'; 

function About() {
   // change exec info here - import pics from pictures folder shown above 
   const execInfo = [
      {
         role: 'President', 
         name: 'Arohi Mehta', 
         pic: presPic
      }, 
      {
         role: 'Vice President', 
         name: 'Zoe Goldberg', 
         pic: vpPic
      },
      {
         role: 'Treasurer', 
         name: 'Mia Yang', 
         pic: ''
      },
      {
         role: 'PR Chair', 
         name: 'Ali Puccio', 
         pic: prPic
      }, 
      {
         role: 'Outreach Chair', 
         name: 'Kennedy Jackson', 
         pic: ''
      }
   ];

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={aboutPic} height='50' top='40' title='About Us' subtitle='' />
         <Container sx={{mb: '15px'}}>
            {/* ADD HEADER IMAGE */}
            <Box sx={{my:'2%'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                  What is ACM-W?
               </Typography>
               <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
               </Typography>
            </Box>
            <Box sx={{my:'2%'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                  Our Mission
               </Typography>
               <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
               </Typography>
            </Box>

         </Container>

         <Divider variant="middle" />
         
         <Container sx={{mt: '20px', mb: '30px', textAlign: 'center', alignItems: 'center'}}>
            <Typography  Typography variant="h4" color="secondary" sx={{fontWeight: 900, pb: '2%'}} >
                  Meet Our Exec Board
            </Typography>
            <Grid container justifyContent='space-around' alignItems='center'  columnSpacing={10} rowSpacing={5}>
               {execInfo.map((position, index) => (
                  <Grid item sm={6} key={index}>
                     <Card >
                        <CardMedia component='img' image={position.pic} height='350' />
                        <CardContent>
                           <Typography variant='h5'>
                              {position.role}
                           </Typography>
                           <Typography variant='h6'>
                              {position.name}
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
               
            </Grid>
            
         </Container>
      </ThemeProvider>
      
   );
}

export default About; 