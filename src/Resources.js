import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import resourcesPic from './pictures/resources-header.jpg';
import CardActionArea from '@mui/material/CardActionArea';

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

import leetcode from './pictures/leetcode.jpg';
import hackerrank from './pictures/hackerrank.jpg';
import w3schools from './pictures/w3schools.jpg';
import freecodecamp from './pictures/freecodecamp.jpg'; 
import womenintech from './pictures/womenintech.jpg';
import alumniassociation from './pictures/alumniassociation.jpg';
import mathercenter from './pictures/mathercenter.jpg';
import pdsp from './pictures/pdsp.jpg';
import acmw from './pictures/nationalacmw.jpg';
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
         url: 'https://www.freecodecamp.org/'}
   ]

    
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={resourcesPic} height='50' top='40' title='Resources' subtitle='' />  

         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
         
            <Typography variant="h4" color="secondary" sx={{fontWeight: 900, mt: '30px', mb: '25px', textAlign: 'left'}}>
                  Coding Resources 
            </Typography>
            <Box>
               <Grid container justifyContent='space-between' alignItems='center' columnSpacing={2} rowSpacing={2} >
                  {info.map((position, index) => (
                     <Grid item alignItems='center' xs={12} sm={4} key={index}>
                        <Card>
                           <CardActionArea href={position.url} target='_blank'>
                              <CardMedia component='img' image={position.pic} height='250' width='full' sx={{minWidth: 400}} />
                              <CardContent>
                                 <Typography variant='h7'>
                                    {position.title}
                                 </Typography>
                                 <Typography display="block" variant='caption'>
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

         {/* <Divider variant="middle" sx={{my: '25px'}}/> */}

         {/* <Divider textAlign='left' sx={{my: '25px'}}> 
               <Typography variant="h4" color="secondary" sx={{fontWeight: 900}}>
                  CWRU Resources 
               </Typography>
         </Divider>  */}
         
         <Container sx={{my: '20px', textAlign: 'center', alignItems: 'center'}}>
            <Typography variant="h4" color="secondary" sx={{fontWeight: 900, mt: '30px', mb: '25px', textAlign: 'left'}}>
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
                              <Typography variant='h7'>
                                 {position.title}
                              </Typography>
                              <Typography display="block" variant='caption'>
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

         {/* <Divider variant="middle" sx={{my: '25px', borderBottomWidth: 10}}/> */}
         
         <Container sx={{mt: '20px', textAlign: 'center', alignItems: 'center', mb: '35px'}}>
            <Typography variant="h4" color="secondary" sx={{fontWeight: 900, mt: '30px', mb: '25px', textAlign: 'left'}}>
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
                              <Typography display = "block" variant='h7'>
                                 {position.title}
                              </Typography>
                              <Typography display="block" variant='caption'>
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





         {/* 
         AROHI: 
            if you want to get fancy, you could try and make a carousel using: 
            https://www.npmjs.com/package/react-material-ui-carousel

            it doesn't seem too bad but idk
         
            OR: 
            you could make a grid or stack of <Paper /> components or <Card /> compoinentswith all the links to the resoures

            if want to add the pics of each resource, can maybe just take screenshots and add those- or could try to use the library: https://www.npmjs.com/package/@dhaiwat10/react-link-preview but i couldnt get it to work
            or i found this: https://dev.to/ilonacodes/frontend-shorts-how-to-create-link-content-previewer-with-react-vue-and-vanilla-javascript-1pm1
         
         */}
         
      </ThemeProvider>
   );
}

export default Resources; 