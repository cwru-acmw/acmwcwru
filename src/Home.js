import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import { Link } from "react-router-dom";
import computer from './pictures/main_computer.jpg';
import './App.css';
import { Button, Container, Box, Typography, Paper, Divider, Stack } from "@mui/material"; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Home() {
   
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='100%' sx={{background: 'black', mx: '0%'}}> 
         <Box className="header" sx={{position: 'relative', height: '80vh', textAlign: 'center', maxWidth: '100%'}} >
            <img src={computer} style={{width: '100%', height: '100%', opacity: 0.55}} />
            <div style={{position: 'absolute', top: '30%', width: '100%'}}>
               <Typography className="page-title" variant="h1" color="white" sx={{fontSize: '4.0rem', fontWeight: 700, px: '5%', display: { xs: "none", sm: "block" }}}>
                     Association of<br/>      
                     Computing Machinery - Women
               </Typography>
               <Typography variant='h4' color="white" sx={{px: '5%', py: '2.2%', display: { xs: "none", sm: "block"}, fontWeight: 600}}>
                  Case Western Reserve University
               </Typography>

            </div>
            <div style={{position: 'absolute', top: '22.5%', width: '100%', display: { xs: "block", sm: "none" } }}>
               <Typography className="page-title" variant="h1" color="white" sx={{fontSize: '3.0rem', fontWeight: 700, px: '5%', display: { xs: "block", sm: "none" }}}>
                     Association of <br/>     
                     Computing Machinery - Women
               </Typography>
               <Typography variant="h5" color="white" sx={{px: '5%', py: '3%', display: { xs: "block", sm: "none" }, fontWeight: 600}}>
                  Case Western Reserve University
               </Typography>
            </div>
            
         </Box>
      </Container>

      <Container maxWidth="100%" sx={{ mx: '0%', my: '25px'}}>
         <Paper square elevation={2} sx={{background: '#FAF1FF', textAlign: 'center', py: '20px', position: 'relative'}}>
            <Typography variant="body1" sx={{pb: '20px', px: '2%'}}>
               ACM-W aims to promote gender equity in technical fields and develop an inclusive community. We hope to promote the success of women in this field and provide opportunities for professional development and collaboration. 
            </Typography>
            
            <Link to='/about'>
               <Button endIcon={<ArrowForwardIosIcon />} variant='containedBtn' sx={{px: '25px'}}>
                  Learn More
               </Button>
            </Link>
         </Paper>
         
      </Container>
      <Divider variant="middle" />
      <Container sx={{my: '30px', alignItems: 'center'}}> 
         <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="stretch" spacing={4} sx={{alignItems: 'center'}}>
            <Box maxWidth='450px' sx={{px: '20px', py: '15px', border: '1px solid #F2F2F2', backgroundColor: '#F2F2F2', textAlign: 'center', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
               <Typography variant="h6" sx={{fontWeight: 700}} >
                  Interested in joining ACM-W?
               </Typography>
               <Typography variant='body1' sx={{pt: '15px', pb: '25px'}} >
                  Join our emailing list and get club updates on CampusGroups: 
               </Typography>
               <Button endIcon={<PersonAddAlt1Icon />} href='https://community.case.edu/ACMW/club_signup' target='_blank' variant='outlinedBtn' sx={{px: '25px'}}>
                  Join Now
               </Button>
            </Box>
            <Box maxWidth='450px' sx={{px: '20px', py: '15px', border: '1px solid #F2F2F2', backgroundColor: '#F2F2F2', textAlign: 'center', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
               <Typography variant="h6" sx={{fontWeight: 700}} >
                  Semester Schedule
               </Typography>
               <Typography variant='body1' sx={{pt: '15px', pb: '25px'}} >
                  Check out the exciting events we have planned for this semester:
               </Typography>
               <Link to='/events' >
                  <Button endIcon={<CalendarMonthIcon />} variant='outlinedBtn' sx={{px: '25px'}}>
                     View Schedule
                  </Button>
               </Link>
            </Box>
         </Stack>
         
      </Container>
      <Divider variant="middle" />
      <Container width='100%' sx={{my: '25px', mx: '2%', justifyContent: 'center'}}>
         <Typography variant="h5" sx={{fontWeight: 700, color: '#7954A1', pb: '5px'}}>
            Latest in CWRU ACM-W
         </Typography>

         <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/108583' title="ACMW Instagram" frameBorder='0' width='100%' height='520px'></iframe>
         
      </Container>
      
    </ThemeProvider>
    
  );
}