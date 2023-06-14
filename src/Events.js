import {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Button, Container, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid, Tooltip, Stack, IconButton, CardActionArea, Modal, Fade } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 

import eventsPic from './pictures/newerevent.jpg';
import EventIcon from '@mui/icons-material/Event';
import firstGB from './pictures/First_GB.png';
import { ClassNames } from "@emotion/react";
import React from "react";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function Events() {
   const [open, setOpen] = useState(false); 
   // const handleOpen = () => setOpen(true); 
   // const handleClose = () => setOpen(false); 
   const [eventData, setEventData] = useState([]);  
   const [eventTitle, setEventTitle] = useState(""); 
   const [gcalLink, setGcalLink] = useState(''); 

   //change calendar link for each semester
   // const gcalLink = 'https://calendar.google.com/calendar/u/0?cid=Y185M2NlYjM1NWVjMGYzYTA3ZDUzZjNjMmI0ZDA5NGJjNjVjY2ZlM2QyN2I1NjM3YjI2ZTQ0ZGFiZDAxMjYxYjFhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';

   //fetches the data once the "events" page is first rendered (updates on refresh of page)
   //incomingData.data -> turns sheet into JS object with each row as an object with each column header as the keys  
   useEffect(() => {
      axios.get(`https://sheetdb.io/api/v1/ltp2kukqv5hav`)
      .then((incomingData) => {
         let tempData = incomingData.data; 
         let firstRow = tempData[0]; 
         delete tempData[0]; //delete row with just heading and Gcal Link
         setEventTitle(firstRow.Event); 
         setGcalLink(firstRow.Link); 

         setEventData(groupedByMonth(tempData));
         // console.log(incomingData.data); 
      })
   }, [])

   //function to change the event api data into an object that has the months as the keys 
      //object.values -> splits nested object into array of the inner objects
      //.reduce(acc, curr) -> accumulates a single value from multiple values in an array
          //accumulates into newArr and adds each object represent by 'curr'
   const groupedByMonth = (nestedObj) => Object.values(nestedObj).reduce((newArr, curr) => {
      if (!newArr[curr.Month]) {
        newArr[curr.Month] = [];
      }
      newArr[curr.Month].push({ 
            date: curr.date,
            Description: curr.Description,
            Event: curr.Event,
            Link: curr.Link
      });
      return newArr;
    }, {});

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
   const btnStyle2 = {
      textTransform: 'unset !important', 
      fontFamily: 'Raleway', 
      fontWeight: 600,
      fontSize: '14px', 
      color: '#7954A1',
      border: '1.5px solid #7954A1',
      // backgroundColor: '#7954A1',
      px: '25px',
      '&:hover': {
         backgroundColor: '#7954A1',
         color: 'white'
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={eventsPic} height='50' top='40' title='Events' subtitle='' />
         <Container>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
               <Typography variant="h5" color="secondary" sx={{fontWeight: 900, py: '25px'}}>
                  {eventTitle}
               </Typography>
               <Button 
                  // size="small"
                  variant="outlined" 
                  startIcon={<EventIcon />} 
                  href={gcalLink}
                  target='_blank'
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
                     target='_blank'
                     sx={{ mr: 0, display: { sm: "none" }, ...iconBtnStyle }}
                  >
                     <EventIcon />
                  </IconButton>
               </Tooltip>
               
            </Stack>

            <Grid container rowSpacing={3} sx={{mb: '25px'}}>
               {Object.keys(eventData).map((key) => (
                  <Grid item xs={12} container>
                     <Grid item xs={12}>
                        <Typography variant='h6' sx={{fontWeight: 900, textAlign: 'left', px: '2%', py: '2%', backgroundColor: '#D9D9D9', width: 'auto'}}>
                           {key}
                        </Typography>
                     </Grid>
                     <Grid item xs={12} container sx={{border: '1px solid #D9D9D9',}}  >
                        {eventData[key].map((evs) => (
                           <Grid item xs={12} sm={4} >
                              <Card height="100%" sx={{backgroundColor: '#F2F2F2', m: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                                 {/* <CardActionArea onClick={handleOpen}> */}
                                    <CardContent>
                                       <Typography varaint='h6' sx={{fontWeight: 900, textAlign: 'left'}}>
                                          {evs.date}
                                       </Typography>
                                       <Typography varaint='h6' sx={{textAlign: 'left', pb: '3%'}}>
                                          {evs.Event}
                                       </Typography>
                                       <Divider varaint='middle' sx={{width:'40%'}}/>
                                       <Typography variant='body2' sx={{pt: '3%'}}>
                                          {evs.Description}
                                       </Typography>
                                       <Box
                                          display="flex"
                                          justifyContent="flex-start"
                                          alignItems="flex-start"
                                          marginTop={1}
                                          >
                                          <Button endIcon={<PersonAddAlt1Icon />} href= {evs.Link} target='_blank' sx={btnStyle2}>Register Here </Button></Box>
                                    </CardContent>
                                 {/* </CardActionArea> */}
                                 
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

/*

const gb = [
   {
      month: "January", 
      events: [
         {
            date: '1/23/23', 
            title: 'General Body - Semester Overview', 
            description: 'Free Luna’s Bakery, overview of semester plan, sign-up for peer mentoring',
            link: 'https://cglink.me/2cS/r1967698', 
            popUpPic: firstGB
         }, 
         {
            date: '1/27/23', 
            title: 'Guest Speaker', 
            description: 'Steph Hippo, a software engineer at Google & CWRU alum shares her experience in the industry',
            link: 'https://cglink.me/2cS/r1967806', 
            popUpPic: ''
         }, 
         {
            date: '1/30/23', 
            title: 'How To Land an Internship', 
            description: 'Karo Zhu, Amazon SWE & CWRU alum shares advice on how to land an internsip',
            link: 'https://cglink.me/2cS/r1969116', 
            popUpPic: ''
         }
      ]
   }, 
   {
      month: 'February', 
      events: [
         {
            date: '2/4/23', 
            title: 'LeetCode Workshop & Grace Hopper Info', 
            description: 'Come practice your LeetCode skills and learn about the Grace Hopper Conference.',
            link: 'https://cglink.me/2cS/r1994685',
            popUpPic: ''
         }, 
         {
            date: '2/10/23', 
            title: 'Guest Speaker', 
            description: 'Raquel Bujans, engineering manager at Compass, gives tech talk and career advice',
            link: 'https://cglink.me/2cS/r2016403',
            popUpPic: ''
         },
         {
            date: '2/13/23', 
            title: 'Resume Review with Swagelok', 
            description: 'Have your resume reviewed by Swagelok representatives',
            link: 'https://cglink.me/2cS/r2016853',
            popUpPic: ''
         },
         {
            date: '2/17/23', 
            title: 'General Body- Guest Speaker', 
            description: 'Jeni Panhorst, Vice President at Intel & CWRU alum, shares her experiences in the industry ',
            link: '',
            popUpPic: 'https://community.case.edu/ACMW/club_signup'
         }, 
         {
            date: '2/20/23', 
            title: 'General Body - Tacos and Trivia Night', 
            description: 'Our first peer mentoring event; enjoy tacos and trivia with your peer mentors!',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         },  
         
      ]
   }, 
   {
      month: "March", 
      events: [
         {
            date: '3/2/23', 
            title: 'LinkedIn Workshop', 
            description: 'Create and update your LinkedIn profile with tips from a career coach. Also, come to take a free headshot for your profile!',
            link: 'https://cglink.me/2cS/r2054898',
            popUpPic: ''
         },
         {
            date: '3/6/23', 
            title: 'General Body - Guest Speaker', 
            description: 'Kshama Girish, a Software Program Manager at Apple & CWRU alum, shares her career experiences',
            link: 'https://cglink.me/2cS/r2058401',
            popUpPic: ''
         }, 
         {
            date: '3/20/23', 
            title: 'ACM-W Women\'s Week Event', 
            description: 'Our guest speaker, adjunct professor and career coach Pooja Khatija, will talk about being a women in industry and negotiation tips.',
            link: 'https://cglink.me/2cS/r2063951',
            popUpPic: ''
         }, 
         {
            date: '3/24/23', 
            title: 'Carnegie Mellon Quantitative Finance Masters Info Session', 
            description: 'Come to learn more about Carnegie Mellon\'s masters program in quantitative finance!',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
         {
            date: '3/27/23', 
            title: 'Git Workshop', 
            description: 'Come to learn and sharpen your Git skills taught by your peers!',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
         {
            date: '3/31/23', 
            title: 'ACM-W x SWE - Thinkbox', 
            description: 'With the Society of Women Engineers, come to learn more about the Thinkbox and to 3D print, laser cut, embroider and more!',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
      ]
   }, 
   {
      month: "April", 
      events: [
         {
            date: '4/3/23', 
            title: 'General Body - Guest Speaker', 
            description: 'Rupika Pendyala, an Engineering Analyst at Goldman Sachs & CWRU alum, shares her experiences',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
         {
            date: '4/6/23', 
            title: 'Women in Tech Banquet', 
            description: 'A large gathering of CWRU alumni, professors, and students to share their experiences within CWRU and in industry.',
            link: '',
            popUpPic: ''
         },
         {
            date: '4/10/23', 
            title: 'ACM-W x UMWS - Cookies & Course Planning', 
            description: 'Peer mentoring event with UMWS: join us to chat about course planning and more!',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
         {
            date: '4/21/23', 
            title: 'Machine Learning Workshop', 
            description: 'A workshop to learn the basics about machine learning led by a 3rd year at CWRU.',
            link: 'https://community.case.edu/ACMW/club_signup',
            popUpPic: ''
         }, 
         
         // {
         //    date: '4/10/23', 
         //    title: 'Women in Tech Banquet?', 
         //    description: 'add description',
         //    popUpPic: ''
         // }, 
      ]
   },
];
*/