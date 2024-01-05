import './App.css';
import Home from './Home'; 
import About from './About'; 
import Events from './Events'; 
import Resources from './Resources'; 
import Contact from './Contact'; 
import NavBar from './NavBar'; 
import Footer from './Footer'; 
import { Routes, Route } from 'react-router-dom'; 

import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
          <NavBar />

          <div className="pages">
            <Routes >
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/events" element={<Events />} />
              <Route exact path="/resources" element={<Resources />} />
              <Route exact path="/contact" element={<Contact />} />
              {/* <Route path="*" component={NotFound}/> */}
            </Routes>
          </div>
          <Footer />
        
    </ThemeProvider>
    
  );
}

// function NotFound() {
//   app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     });
//   });
  
// }

export default App;
