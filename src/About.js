import { Container, Box, Typography, Card, CardMedia, CardContent, Divider, Grid, CardActions, IconButton } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// change the pictures imported - delete old pictures in picture folder when need to import new pics
import aboutPic from './pictures/about-header.jpg';

import presPic from './exec-pictures/presidentPic.jpg';
import vpPic from './exec-pictures/vpPic.jpg';
import prPic from './exec-pictures/prPic.jpg';
import outreachPic from './exec-pictures/outreachPic.jpg';
import advisorPic from './exec-pictures/advisorPic.jpg';
import sponsorPic from './exec-pictures/sponsorPic.jpg';
import treasurerPic from './exec-pictures/treasurerPic.jpg';
import secretaryPic from './exec-pictures/secretaryPic.jpg';

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
         name: 'Isabella Craun', 
         pic: treasurerPic, 
         lIn: 'https://www.linkedin.com/in/bellacraun/', 
         email: 'imc33@case.edu'
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
      }, 
      {
         role: 'Secretary', 
         name: 'Crystal Zhu', 
         pic: secretaryPic, 
         lIn: 'https://www.linkedin.com/in/crystalzhu-/', 
         email: 'cxz630@case.edu'
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
            <Box sx={{my:'25px'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 700, pb: '1%'}}>
                  What is ACM-W?
               </Typography>
               <Typography variant="body1" sx={{fontWeight: 400}}>
                  The Association for Computing Machinery-Women is a nationally recognized ACM student chapter that supports, celebrates, and provides professional development resources to women pursuing degrees in the computing field. 
               </Typography>
            </Box>
            <Box sx={{my:'2%'}}>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 700, pb: '1%'}}>
                  Our Mission
               </Typography>
               <Typography variant="body1" sx={{fontSize: '18px', fontWeight: 400}}>
                  Our mission is to promote gender equity in the computing field and to develop an inclusive community. We hope to promote the success of women in this field and provide opportunities for professional development and collaboration. Such opportunities include peer mentoring, networking, resume reviews, and technical enrichment.
                  <br />
                  <br />
                  The Case Western Reserve University Chapter of ACM-W was chartered in November, 2022. Our membership is open to all students, undergraduate or graduate, interested in furthering the mission of the ACM-W. 
               </Typography>
            </Box>

         </Container>

         <Divider variant="middle" />
         
         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography  Typography variant="h4" color="secondary" sx={{fontWeight: 700, pb: '20px'}} >
                  Meet Our Exec Board
            </Typography>
            <Grid container justifyContent='space-between' alignItems='center' columnSpacing={8} rowSpacing={4}>
               {execInfo.map((position, index) => (
                  <Grid item alignItems='center' xs={12} sm={6} key={index}>
                     <Card sx={{ minWidth: 400 }}>
                        <CardMedia component='img' image={position.pic} height='425' width='full' sx={{minWidth: 400}} />
                        <CardContent>
                           <Typography variant="h6" sx={{fontWeight: 700}}>
                              {position.role}
                           </Typography>
                           <Typography variant="body1" sx={{fontWeight: 500}}>
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

         <Container sx={{my: '30px', textAlign: 'center', alignItems: 'center'}}>
            <Typography  Typography variant="h4" color="secondary" sx={{fontWeight: 700, pb: '20px'}} >
                  Meet Our Faculty
            </Typography>
            <Grid container justifyContent='space-between' alignItems='center' columnSpacing={8} rowSpacing={4}>
               {facultyInfo.map((position, index) => (
                  <Grid item alignItems='center' xs={12} sm={6} key={index}>
                     <Card sx={{ minWidth: 400 }}>
                        <CardMedia component='img' image={position.pic} height='425' width='full' sx={{minWidth: 400}} />
                        <CardContent>
                           <Typography variant="h6" sx={{fontWeight: 700}}>
                              {position.role}
                           </Typography>
                           <Typography variant='body1' sx={{fontWeight: 500}}>
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