import {useState, useEffect} from 'react'; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import { Link } from "react-router-dom";
import computer from './pictures/main_computer.jpg';
import './App.css';
import { Button, Container, AppBar, Box, Toolbar, Typography, Paper, Grid, Card, Divider, Stack, CardContent } from "@mui/material"; 
import { alpha, styled } from '@mui/material/styles';
import HeaderBox from './styles/HeaderBox'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const TitleTyp = styled(Typography)(({theme}) => ({
   fontWeight: 900, 
   fontFamily: 'Raleway', 
   textAlign: "center"
}));

export default function Home() {
   const linkStyle = {
      textDecoration: "none",
      color: "#ffffff", 
    };

   const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Raleway', 
      fontWeight: 'bold',
      fontSize: '16px', 
      color: 'white',
      backgroundColor: '#7954A1',
      px: '25px',
      '&:hover': {
         backgroundColor: '#323E42',
      },
   }
   //fontSize: '14px', fontWeight: 600
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
   
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background: 'black', width: '100%', mx: '0%'}}> 
         <Box className="header" sx={{position: 'relative', height: '80vh', textAlign: 'center'}} >
            <img src={computer} style={{width: '100%', height: '100%', opacity: 0.55}} />
            <div style={{position: 'absolute', top: '30%', width: '100%'}}>
               <Typography className="page-title" variant="h2" color="white" sx={{fontSize: '4.0rem', fontWeight: 700, fontFamily: 'Raleway', px: '5%', display: { xs: "none", sm: "block" }}}>
                     Association of<br/>      
                     Computing Machinery - Women
               </Typography>
               <Typography variant='h4' color="white" sx={{fontFamily: 'Raleway', px: '5%', py: '2.2%', display: { xs: "none", sm: "block"}, fontWeight: 600}}>
                  Case Western Reserve University
               </Typography>

            </div>
            <div style={{position: 'absolute', top: '22.5%', width: '100%', display: { xs: "block", sm: "none" } }}>
               <Typography className="page-title" variant="h2" color="white" sx={{fontSize: '3.0rem', fontWeight: 700, fontFamily: 'Raleway', px: '5%', display: { xs: "block", sm: "none" }}}>
                     Association of <br/>     
                     Computing Machinery - Women
               </Typography>
               <Typography variant='h5' color="white" sx={{fontFamily: 'Raleway', fontSize: '2.0em', px: '5%', py: '3%', display: { xs: "block", sm: "none" }, fontWeight: 600}}>
                  Case Western Reserve University
               </Typography>
            </div>
            
         </Box>
         
       
      </Container>
      <Container maxWidth="xl" sx={{width: '100%', mx: '0%', my: '25px'}}>
         <Paper square elevation={2} sx={{background: '#FAF1FF', textAlign: 'center', py: '20px'}}>
            <Typography variant='h6' sx={{fontFamily: 'Raleway', pb: '20px', px: '2%', fontSize: '20px'}}>
               ACM-W aims to promote gender equity in technical fields and develop an inclusive community. We hope to promote the success of women in this field and provide opportunities for professional development and collaboration. 
            </Typography>
            
            <Link to='/about' style={linkStyle}>
               <Button endIcon={<ArrowForwardIosIcon />} sx={btnStyle} >
                  Learn More
               </Button>
            </Link>
         </Paper>
         
      </Container>
      <Divider variant="middle" />
      <Container sx={{my: '30px', alignItems: 'center'}}> 
         <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="stretch" spacing={4} sx={{alignItems: 'center'}}>
            <Box maxWidth='450px' sx={{px: '20px', py: '15px', border: '1px solid #F2F2F2', backgroundColor: '#F2F2F2', textAlign: 'center', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
               <Typography varaint='h3' sx={{fontSize: '24px', fontWeight: 700}} >
                  Interested in joining ACM-W?
               </Typography>
               <Typography varaint='body1' sx={{px: '20px', pt: '15px', pb: '25px', fontSize: '18px',}} >
                  Join our emailing list and get club updates on CampusGroups: 
               </Typography>
               <Button endIcon={<PersonAddAlt1Icon />} href='https://community.case.edu/ACMW/club_signup' target='_blank' sx={btnStyle2}>
                  Join Now
               </Button>
            </Box>
            <Box maxWidth='450px' sx={{px: '20px', py: '15px', border: '1px solid #F2F2F2', backgroundColor: '#F2F2F2', textAlign: 'center', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
               <Typography varaint='h3' sx={{fontSize: '24px', fontWeight: 700}} >
                  Semester Schedule
               </Typography>
               <Typography varaint='body1' sx={{px: '20px', pt: '15px', pb: '25px', fontSize: '18px'}} >
                  Check out the exciting events we have planned for this semester:
               </Typography>
               <Link to='/events' style={linkStyle}>
                  <Button endIcon={<CalendarMonthIcon />} sx={btnStyle2} >
                     View Schedule
                  </Button>
               </Link>
            </Box>
         </Stack>
         
      </Container>
      <Divider variant="middle" />
      <Container sx={{my: '25px', mx: '2%', justifyContent: 'center'}}>
         <Typography varaint='h3' sx={{fontSize:'32px', fontWeight: 700, color: '#7954A1', pb: '5px'}}>
            Latest in CWRU ACM-W
         </Typography>

         <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/108583' frameBorder='0' width='100%' height='520px'></iframe>
         
      </Container>
      
    </ThemeProvider>
    
  );
}