import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid, CardActions, IconButton } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// change the pictures imported - delete old pictures in picture folder when need to import new pics
import aboutPic from './pictures/about-header.jpg';
import presPic from './pictures/arohiPic.JPG';
import vpPic from './pictures/zoePic.JPG';
import prPic from './pictures/aliPic.jpg'; 
import outreachPic from './pictures/kennedyPic.jpeg';
import advisorPic from './pictures/newwang.jpg';
import sponsorPic from './pictures/evrenFinal.jpeg';
import treasurerPic from './pictures/miaPic.JPEG';
export default function About() {
   // change exec info here - import pics from pictures folder shown above 
   const execInfo = [
      {
         role: 'President', 
         name: 'Arohi Mehta', 
         pic: presPic, 
         lIn: 'https://www.linkedin.com/in/arohi-mehta/', 
         email: 'aum5@case.edu'
      }, 
      {
         role: 'Vice President', 
         name: 'Zoe Goldberg', 
         pic: vpPic, 
         lIn: 'https://www.linkedin.com/in/zmgoldberg/', 
         email: 'zmg12@case.edu'
      },
      {
         role: 'Treasurer', 
         name: 'Mia Yang', 
         pic: treasurerPic, 
         lIn: 'https://www.linkedin.com/in/miahyang/', 
         email: 'mhy12@case.edu'
      },
      {
         role: 'PR Chair', 
         name: 'Ali Puccio', 
         pic: prPic, 
         lIn: 'https://www.linkedin.com/in/alessandra-puccio/', 
         email: 'agp63@case.edu'
      }, 
      {
         role: 'Outreach Chair', 
         name: 'Kennedy Jackson', 
         pic: outreachPic, 
         lIn: 'https://www.linkedin.com/', 
         email: 'knj25@case.edu'
      }
   ];

   const facultyInfo = [
      {
         role: 'Faculty Advisor', 
         name: 'An Wang', 
         pic: advisorPic,  
         email: 'axw474@case.edu'
      },
      {
         role: 'Faculty Sponsor', 
         name: 'Evren Gurkan Cavusoglu', 
         pic: sponsorPic,  
         email: 'exg44@case.edu'
      }
   ]

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={aboutPic} height='50' top='40' title='About Us' subtitle='' />
         <Container sx={{mb: '25px'}}>
            {/* ADD HEADER IMAGE */}
            <Box sx={{my:'25px'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                  What is ACM-W?
               </Typography>
               <Typography variant="body1">
                  The Association for Computing Machinery-Women is a nationally recognized ACM student chapter that supports, celebrates, and provides professional development resources to women pursuing degrees in the computing field. 
               </Typography>
            </Box>
            <Box sx={{my:'2%'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, pb: '1%'}}>
                  Our Mission
               </Typography>
               <Typography variant="body1">
                  Our mission is to promote gender equity in the computing field and to develop an inclusive community. We hope to promote the success of women in this field and provide opportunities for professional development and collaboration. Such opportunities include peer mentoring, networking, resume reviews, and technical enrichment.
                  <br />
                  <br />
                  The Case Western Reserve University Chapter of ACM-W was chartered in November, 2022. Our membership is open to all students, undergraduate or graduate, interested in furthering the mission of the ACM-W. 
               </Typography>
            </Box>

         </Container>

         <Divider variant="middle" />
         
         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography  Typography variant="h4" color="secondary" sx={{fontWeight: 900, pb: '20px'}} >
                  Meet Our Exec Board
            </Typography>
            <Grid container justifyContent='space-between' alignItems='center' columnSpacing={8} rowSpacing={4}>
               {execInfo.map((position, index) => (
                  <Grid item alignItems='center' xs={12} sm={6} key={index}>
                     <Card sx={{ minWidth: 400 }}>
                        <CardMedia component='img' image={position.pic} height='425' width='full' sx={{minWidth: 400}} />
                        <CardContent>
                           <Typography variant='h5'>
                              {position.role}
                           </Typography>
                           <Typography variant='h6'>
                              {position.name}
                           </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent:'end'}} disableSpacing>
                           <IconButton href={position.lIn} target='_blank' size="medium"  >
                              <LinkedInIcon />
                           </IconButton>
                           <IconButton href={`mailTo: ${position.email}`}  size="medium" >
                              <EmailIcon />
                           </IconButton>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
               
            </Grid>   
         </Container>

         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography  Typography variant="h4" color="secondary" sx={{fontWeight: 900, pb: '20px'}} >
                  Meet Our Faculty
            </Typography>
            <Grid container justifyContent='space-between' alignItems='center' columnSpacing={8} rowSpacing={4}>
               {facultyInfo.map((position, index) => (
                  <Grid item alignItems='center' xs={12} sm={6} key={index}>
                     <Card sx={{ minWidth: 400 }}>
                        <CardMedia component='img' image={position.pic} height='425' width='full' sx={{minWidth: 400}} />
                        <CardContent>
                           <Typography variant='h5'>
                              {position.role}
                           </Typography>
                           <Typography variant='h6'>
                              {position.name}
                           </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent:'end'}} disableSpacing>
                           <IconButton href={`mailTo: ${position.email}`}  size="medium" >
                              <EmailIcon />
                           </IconButton>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
               
            </Grid>   
         </Container>
      </ThemeProvider>
      
   );
}