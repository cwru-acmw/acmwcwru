import { Button, Container, AppBar, Box, Typography, Paper, Card, CardMedia, CardContent, Divider, Grid } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 
import HeaderBox from './styles/HeaderBox'; 
import resourcesPic from './pictures/resources-header.jpg';

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';


function Resources() {
   // possibly make an array of objects that has all the resource titles, descriptions and urls and then use .map() so easier to change later?
      //could also do one array for each section - like cwru resources array and then one for technical?
   /*
   const info = [
      {
         title: 'LeetCode', 
         desc: '...', 
         url: 'https://leetcode.com/#'
      }, 
      {
         ...
      }
   ]

    */
   return (
      <ThemeProvider theme={theme}>
         <HeaderBox image={resourcesPic} height='50' top='40' title='Resources' subtitle='' />  
         {/* write rest of code here */}
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