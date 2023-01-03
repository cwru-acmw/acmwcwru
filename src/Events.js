import { Button, Container, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid, Tooltip, Stack, IconButton } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 

import eventsPic from './pictures/events-header.jpg';
import EventIcon from '@mui/icons-material/Event';
import { ClassNames } from "@emotion/react";

function Events() {
   //change calendar link for each semester
   const gcalLink = 'https://calendar.google.com/calendar/u/0?cid=Y185M2NlYjM1NWVjMGYzYTA3ZDUzZjNjMmI0ZDA5NGJjNjVjY2ZlM2QyN2I1NjM3YjI2ZTQ0ZGFiZDAxMjYxYjFhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';

   //add descriptions here - try to keep to 2 lines on the card or the spacing gets weird- still need to fix
   const gb = [
      {
         month: "January", 
         events: [
            {
               date: '1/23/23', 
               title: 'General Body - Semester Overview', 
               description: 'Free Luna’s Bakery, overview of semester plan, sign-up for peer mentoring'
            }, 
            {
               date: '1/27/23', 
               title: 'Guest Speaker', 
               description: 'Steph Hippo, a software engineer at Google (and CWRU alumni) shares her experiences'
            }, 
            {
               date: '1/30/23', 
               title: 'Brownies & Board Games', 
               description: 'Our first peer mentoring event- Come to eat free brownies and play games with your mentors!'
            }
         ]
      }, 
      {
         month: 'February', 
         events: [
            {
               date: '2/4/23', 
               title: 'LeetCode Workshop', 
               description: 'Practice and learn tips for Leetcode interview problems'
            }, 
            {
               date: '2/6/23', 
               title: 'General Body + Git Workshop', 
               description: 'Our second general body meeting and learn how to use Git'
            }, 
            {
               date: '2/9/23', 
               title: 'ACM-W & WISER LinkedIn Workshop', 
               description: 'Learn tips on how to setup and format your LinkedIn from the CWRU professional services?'
            }, 
            {
               date: '2/10/23', 
               title: 'Guest Speaker', 
               description: 'Raquel Bujans'
            },
            {
               date: '2/20/23', 
               title: 'General Body - Tacos and Trivia Night', 
               description: 'add description'
            },  
            
         ]
      }, 
      {
         month: "March", 
         events: [
            {
               date: '3/6/23', 
               title: 'General Body - Guest Speaker', 
               description: 'Kshama Girish'
            }, 
            {
               date: '3/20/23', 
               title: 'General Body - Thinkbox Tour?', 
               description: 'add description'
            }, 
         ]
      }, 
      {
         month: "April", 
         events: [
            {
               date: '4/3/23', 
               title: 'General Body - Guest Speaker', 
               description: 'Rupika Pendyala'
            }, 
            {
               date: '4/10/23', 
               title: 'General Body - Cookies & Course Planning', 
               description: 'add description'
            }, 
            {
               date: '4/10/23', 
               title: 'Women in Tech Banquet?', 
               description: 'add description'
            }, 
         ]
      },
   ];

   const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Raleway', 
      fontWeight: 'bold', 
      borderColor: '#7954A1',
      color: '#7954A1',
      '&:hover': {
         backgroundColor: '#F2F2F2',
      },
   }

   const iconBtnStyle = {
      backgroundColor: '#7954A1', 
      borderRadius: '4px',
      color: 'white',
      '&:hover': {
         backgroundColor: '#F2F2F2',
         color: '#7954A1',
         borderColor: '#7954A1'
      },
   }

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={eventsPic} height='50' top='40' title='Events' subtitle='' />
         <Container>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, py: '25px'}}>
                  Spring 2023 Calendar
               </Typography>
               <Button 
                  // size="small"
                  variant="outlined" 
                  startIcon={<EventIcon />} 
                  href={gcalLink}
                  sx={{...btnStyle, display: { xs: "none", sm: "flex"}}}
               >
                  Add to Google Calendar
               </Button>
               <Tooltip title="Add to Google Calendar">
                  <IconButton
                     // color="primary"
                     edge="end"
                     variant="outlined"
                     href={gcalLink}
                     sx={{ mr: 0, display: { sm: "none" }, ...iconBtnStyle }}
                  >
                     <EventIcon />
                  </IconButton>
               </Tooltip>
               
            </Stack>

            <Grid container rowSpacing={3} sx={{mb: '25px'}}>
               {gb.map((info) => (
                  <Grid item xs={12} container>
                     <Grid item xs={12}>
                        <Typography variant='h6' sx={{fontWeight: 900, textAlign: 'left', px: '2%', py: '2%', backgroundColor: '#D9D9D9', width: 'auto'}}>
                           {info.month}
                        </Typography>
                     </Grid>
                     <Grid item xs={12} container sx={{border: '1px solid #D9D9D9',}}  >
                        {info.events.map((evs) => (
                           <Grid item xs={12} sm={4} >
                              <Card height="100%" sx={{backgroundColor: '#F2F2F2', m: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                                 <CardContent>
                                    <Typography varaint='h6' sx={{fontWeight: 900, textAlign: 'left'}}>
                                       {evs.date}
                                    </Typography>
                                    <Typography varaint='h6' sx={{textAlign: 'left', pb: '3%'}}>
                                       {evs.title}
                                    </Typography>
                                    <Divider varaint='middle' sx={{width:'40%'}}/>
                                    <Typography variant='body2' sx={{pt: '3%'}}>
                                       {evs.description}
                                    </Typography>
                                 </CardContent>
                              </Card>
                           </Grid>
                        ))}
                        
                     </Grid>
                     
                  </Grid>
               ))}
            </Grid>

         </Container>
         
      </ThemeProvider>
   );
}

export default Events; 
