import {createTheme} from '@mui/material/styles';
import { style } from '@mui/system';

const Colors = {
   primary: "#401E46", //darkest purple
   secondary: "#7954A1", //medium-dark purple
   // error: "#ff0000", 
   info: "#323E42", //charcoal
   success: "#CA7FF2", //medium-light
   light: "#ffffff", 
   //add more??
}; 

//create function object
const theme = createTheme({
   //color palette
   palette: {
      primary: {
         main: Colors.primary
      },
      secondary: {
         main: Colors.secondary
      }, 
      info: {
         main: Colors.info
      }, 
      success: {
         main: Colors.success
      }, 
   }, 
   breakpoints: {
      values: {
        xs: 0,
        sm: 825,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
   //can target components to change globally - find specific component props in MUI docs 
   components: {
      MuiButton: {
         variants: [
            {
               props: {variant: 'bold'}, 
               style: {
                  fontFamily: 'Raleway', 
                  fontWeight: '900px', 

               }
               
            }
         ]
      },
      MuiTypography: {
         defaultProps: {
            fontFamily: 'Raleway'
         }
      }
   }
}); 

export default theme; 