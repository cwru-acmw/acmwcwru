import { alpha, styled } from '@mui/material/styles';
import { Box, Typography, Container } from "@mui/material"; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './Styles.js'; 

/*props will have: 
   props.image --> pass in image
   props.height --> because will differ for the home page and each of the other pages
   props.title --> for homepage title
   props.top --> changes depending on the title (for homepage title is different)
   props.subtitle --> only for homepage - can make like a boolean value to show this or not 
*/
export default function HeaderBox(props) {

   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth="xl" sx={{background: 'black', width: '100%', mx: '0%'}}> 
            <Box className="header" sx={{position: 'relative', height: `${props.height}vh`, textAlign: 'center', backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
               <div style={{position: 'absolute', width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', height: '100%' }}>
                  <Typography className="page-title" variant="h2" color="white" sx={{fontSize: '4.0em', fontWeight: 900, px: '5%', py: '20vh'}}>
                     {props.title}
                        
                  </Typography>
                  {props.subtitle !== '' && 
                     <Typography variant='h4' color="white" sx={{px: '5%', py: '20px'}}>
                        Case Western Reserve University
                     </Typography>
                  }
               </div>
            </Box>
            

         </Container>
      </ThemeProvider>
      
   );
}


/*

<Container maxWidth="xl" sx={{background: 'black', width: '100%', mx: '0%'}}> 
         <Box className="header" sx={{position: 'relative', height: '80vh', textAlign: 'center'}} >
            <img src={computer} style={{width: '100%', height: '100%', opacity: 0.55}} />
            <div style={{position: 'absolute', top: '30%', width: '100%'}}>
               <Typography className="page-title" variant="h2" color="white" sx={{fontSize: '4.0em', fontWeight: 900, fontFamily: 'Raleway', px: '5%'}}>
                     Association of<br/>      
                     Computing Machinery - Women
               </Typography>
 
               <Typography variant='h4' color="white" sx={{fontFamily: 'Raleway', px: '5%', py: '20px'}}>
                  Case Western Reserve University
               </Typography>
            </div>
            
         </Box>
         
       
      </Container>

*/

