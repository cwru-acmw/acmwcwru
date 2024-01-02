import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import resourcesPic from './pictures/resources-header.jpg';
import CardActionArea from '@mui/material/CardActionArea';

import leetcode from './pictures/leetcode.jpg';
import hackerrank from './pictures/hackerrank.jpg';
import w3schools from './pictures/w3schools.jpg';
import freecodecamp from './pictures/freecodecamp.jpg'; 
import womenintech from './pictures/womenintech.jpg';
import alumniassociation from './pictures/alumniassociation.jpg';
import mathercenter from './pictures/mathercenter.jpg';
import pdsp from './pictures/pdsp.jpg';
import acmw from './pictures/nationalacmw.jpg';
import runestone from './pictures/runestone_academy.jpeg';
function Resources() {
   // possibly make an array of objects that has all the resource titles, descriptions and urls and then use .map() so easier to change later?
   //could also do one array for each section - like cwru resources array and then one for technical?
   const nationalOrg = [
      {
      title: 'National ACMW', 
      desc: 'Supports, celebrates, and advocates for engagement of women in tech field.', 
      pic: acmw, 
      url: 'https://women.acm.org/'
      }] 

   const infoCWRU = [
         {
         title: 'Women in Tech', 
         desc: 'Fosters growth in the field of tech through mentorship and professional development.', 
         pic: womenintech, 
         url: 'https://case.edu/womenintech/'
         },  
         {
         title: 'Mather Center for Women', 
         desc: 'A community space to empower women and advance gender equity.', 
         pic: mathercenter, 
         url: 'https://case.edu/centerforwomen/'
         },  
         {
         title: 'Professional Development Scholar Program', 
         desc: 'Allows participants to succeed in their career and gain insight into valuable tech career advice.', 
         pic: pdsp, 
         url: 'https://case.edu/womenintech/news/professional-development-scholars-program-launches-2020'}, 
      {  
         title: 'Alumni Network', 
         desc: 'Connect with Case alum!', 
         pic: alumniassociation, 
         url: 'https://case.edu/alumni/cwru-connect'
      }
   ]

   const info = [
      {
         title: 'LeetCode', 
         desc: 'Practice technical interview questions with a wide variety of languages.', 
         pic: leetcode, 
         url: 'https://leetcode.com/'} , 
      {
         title: 'HackerRank', 
         desc: 'Practice technical interview questions with a wide variety of languages.', 
         pic: hackerrank, 
         url: 'https://www.hackerrank.com/'
      }, 
      {

         title: 'W3 Schools Website Template ', 
         desc: 'HTML templates to help you begin designing your own website!', 
         pic: w3schools, 
         url: 'https://www.w3schools.com/w3css/w3css_templates.asp'}, 
         {
         title: 'FreeCodeCamp', 
         desc: 'Learn new programming languages with free tutorials and modules.', 
         pic: freecodecamp, 
         url: 'https://www.freecodecamp.org/'}, 
         {
            title: 'Runestone Academy', 
            desc: 'A great resource with an in depth tutorial to learn Python and much more!', 
            pic: runestone, 
            url: 'https://runestone.academy/ns/books/published/fopp/index.html'}, 
   ]

   const headingStyle = {
      fontWeight: 700, 
      mt: '30px', 
      mb: '25px', 
      textAlign: 'left'
   }
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={resourcesPic} height='50' top='40' title='Resources' subtitle='' />  

         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography variant="h5" color="secondary" sx={headingStyle}>
                  Coding Resources 
            </Typography>
            <Box>
               <Grid container  alignItems='center' columnSpacing={2} rowSpacing={2} >
                  {info.map((position, index) => (
                     <Grid item alignItems='center' xs={12} sm={4} key={index}>
                        <Card>
                           <CardActionArea href={position.url} target='_blank'>
                              <CardMedia component='img' image={position.pic} height='250' width='full' sx={{minWidth: 400}} />
                              <CardContent>
                                 <Typography variant='body1' sx={{fontWeight: 500}}>
                                    {position.title}
                                 </Typography>
                                 <Typography display="block" variant='subtitle1'>
                                    {position.desc}
                                 </Typography>
                              </CardContent>
                           </CardActionArea> 
                        </Card>
                     </Grid>
                  ))}
                  
               </Grid>
            </Box> 
         </Container>
         
         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography variant="h5" color="secondary" sx={headingStyle}>
                  CWRU Resources 
            </Typography>
            <Box>
               <Grid container justifyContent='space-between' alignItems='center' columnSpacing={2} rowSpacing={2}>
                  {infoCWRU.map((position, index) => (
                     <Grid item alignItems='center' xs={12} sm={4} key={index}>
                        <Card >
                        <CardActionArea href={position.url} target='_blank'>
                           <CardMedia component='img' image={position.pic} height='250' width='full' sx={{minWidth: 400}} />
                           <CardContent>
                              <Typography variant='body1' sx={{fontWeight: 500}}>
                                 {position.title}
                              </Typography>
                              <Typography display="block" variant='subtitle1'>
                                 {position.desc}
                              </Typography>
                           </CardContent>
                           </CardActionArea> 
                        </Card>
                     </Grid>
                  ))}
                  
               </Grid>
            </Box> 
         </Container>
         
         <Container sx={{mt: '20px', textAlign: 'center', alignItems: 'center', mb: '35px'}}>
            <Typography variant="h5" color="secondary" sx={headingStyle}>
                  National ACM-W Resources 
            </Typography>
            <Box >
               <Grid container justifyContent='space-between' alignItems='center' columnSpacing={2} rowSpacing={2}>
                  {nationalOrg.map((position, index) => (
                     <Grid item alignItems='center' xs={12} sm={4} key={index}>
                        <Card sx={{ minWidth: 380, }} >
                        <CardActionArea href={position.url} target='_blank'>
                           <CardMedia component='img' image={position.pic} height='250' width='full' sx={{minWidth: 400}} />
                           <CardContent>
                              <Typography display = "block" variant='body1' sx={{fontWeight: 500}}>
                                 {position.title}
                              </Typography>
                              <Typography display="block" variant='subtitle1'>
                                 {position.desc}
                              </Typography>
                           </CardContent>
                           </CardActionArea>
                        </Card>
                     </Grid>
                  ))}
                  
               </Grid>
            </Box> 
         </Container>
         
      </ThemeProvider>
   );
}

export default Resources; 