import {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Button, Container, Box, Typography, Card, CardContent, Divider, Grid, Tooltip, Stack, IconButton } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 

import eventsPic from './pictures/newerevent.jpg';
import EventIcon from '@mui/icons-material/Event';
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
         console.log(incomingData.data); 
         console.log(groupedByMonth(tempData))
      })
   }, [])

   //there may be bug if months not added in order on spreadsheet
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
               <Typography variant="h4" color="secondary" sx={{fontWeight: 800, py: '25px'}}>
                  {eventTitle}
               </Typography>
               <Button 
                  variant="outlinedBtn" 
                  startIcon={<EventIcon />} 
                  href={gcalLink}
                  target='_blank'
                  sx={{fontSize :'15px', fontWeight: 700, display: { xs: "none", sm: "flex"}}}
               >
                  Add to Google Calendar
               </Button>
               <Tooltip title="Add to Google Calendar">
                  <IconButton
                     edge="end"
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
                  <Grid item xs={12} container >
                     <Grid item xs={12}>
                        <Typography variant="h6" sx={{fontWeight: 700, textAlign: 'left', px: '2%', py: '2%', backgroundColor: '#D9D9D9', width: 'auto'}}>
                           {key}
                        </Typography>
                     </Grid>
                     <Grid item xs={12} container alignItems='stretch' sx={{border: '1px solid #D9D9D9', }}  >
                        {eventData[key].map((evs) => (
                           <Grid item xs={12} sm={4} sx={{display: 'flex'}}>
                              <Card height="100%" sx={{backgroundColor: '#F2F2F2', m: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                                    <CardContent>
                                       <Typography variant="body1" sx={{fontWeight: 700, textAlign: 'left'}}>
                                          {evs.date}
                                       </Typography>
                                       <Typography variant="body2" sx={{textAlign: 'left', pb: '3%', fontWeight: 600}}>
                                          {evs.Event}
                                       </Typography>
                                       <Divider sx={{width:'40%'}}/>
                                       <Typography variant='subtitle1' sx={{pt: '3%'}}>
                                          {evs.Description}
                                       </Typography>
                                       <Box
                                          display="flex"
                                          justifyContent="flex-start"
                                          alignItems="flex-start"
                                          marginTop={2}
                                          >
                                          <Button endIcon={<PersonAddAlt1Icon />} href= {evs.Link} target='_blank' variant='outlinedBtn' sx={{fontSize: '14px'}}>Register Here </Button>
                                       </Box>
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