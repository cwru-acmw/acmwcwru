import {createTheme} from '@mui/material/styles';

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
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
   },
   typography: {
      h1: {
         fontSize: '6.0rem'
      },
      h2: {
         fontSize: '4.0rem'
      },
      h3: {
         fontSize: '3.0rem'
      }, 
      h4: {
         fontSize: '2.4rem'
      }, 
      h5: {
         fontSize: '2.0rem'
      }, 
      h6: {
         fontSize: '1.5rem'
      }, 
      body1: {
         fontSize: '1.25rem'
      }, 
      body2: {
         fontSize: '1.0rem'
      },
      subtitle1: {
         fontSize: '0.875rem', 
         lineHeight: '1.4', 
         fontWeight: '400'
      }, 
      subtitle2: {
         fontSize: '0.75rem',
         lineHeight: '1.4'
      }, 
      
   },
   components: {
      MuiTypography: {
         defaultProps: {
            fontFamily: 'Raleway'
         }
      },
      MuiButton: {
         variants: [
            {
               props: { variant: 'navbarMain' },
               style: {
                  fontSize: '1.25rem', 
                  borderRadius: '0px',
                  color: 'white',
                  '&:hover': {
                     color: Colors.primary,
                     backgroundColor: '#F2F2F2',
                  }
               }
            }, 
            {
               props: { variant: 'navbarList' },
               style: {
                  textAlign: 'center',
                  width: '100%',
                  fontSize: '1.25rem',
                  borderRadius: '0px',
                  color: Colors.primary,
                  px: '5px',
                  '&:hover': {
                     color: Colors.primary,
                     backgroundColor: '#F2F2F2',
                  }
               }
            }, 
            {
               props: { variant: 'outlinedBtn' },
               style: {
                  fontWeight: 600,
                  fontSize: '1.0rem', 
                  color: Colors.secondary,
                  border: '1.5px solid #7954A1',
                  '&:hover': {
                     backgroundColor: Colors.secondary,
                     color: 'white'
                  },
               }
            }, 
            {
               props: { variant: 'containedBtn' },
               style: {
                  fontWeight: 600,
                  fontSize: '1.0rem', 
                  color: 'white',
                  backgroundColor: Colors.secondary,
                  border: '1.5px solid #7954A1',
                  px: '25px',
                  '&:hover': {
                     backgroundColor: '#F2F2F2',
                     color: Colors.secondary
                  },
               }
            }

         ],
         styleOverrides: {
            root: {
               fontFamily: 'Raleway',
               textTransform: 'unset !important'
            }          
         }
      },
   }
}); 

export default theme; 