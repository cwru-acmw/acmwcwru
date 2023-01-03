// import logo from './logo.svg';
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 

import computer from './pictures/main_computer.jpg';
import './App.css';
import { Button, Container, AppBar, Box, Toolbar, Typography, Paper } from "@mui/material"; 
import { alpha, styled } from '@mui/material/styles';


const TitleTyp = styled(Typography)(({theme}) => ({
   fontWeight: 900, 
   fontFamily: 'Raleway', 
   textAlign: "center"
}));

function Home() {

  return (
    <ThemeProvider theme={theme}>
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
      <Container maxWidth="xl" sx={{width: '100%', mx: '0%', py: '20px'}}>
         <Paper square elevation={2} sx={{background: '#FAF1FF', textAlign: 'center'}}>
            {/* <Typography variant='h6' sx={{fontFamily: 'Raleway', pt: '20px', px: '2%'}}>
               <strong>Mission:</strong>
            </Typography> */}
            <Typography variant='h6' sx={{fontFamily: 'Raleway', py: '20px', px: '2%'}}>
               ACM-W aims to promote gender equity in technical fields and develop an inclusive community. We hope to promote the success of women in this field and provide opportunities for professional development and collaboration. 
            </Typography>
         </Paper>
        

      </Container>
      
      
    </ThemeProvider>
    
  );
}

export default Home;
