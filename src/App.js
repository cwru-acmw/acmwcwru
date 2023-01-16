// import logo from './logo.svg';

import './App.css';
import Home from './Home'; 
import About from './About'; 
import Events from './Events'; 
import Resources from './Resources'; 
import Contact from './Contact'; 
import NavBar from './NavBar'; 
import Footer from './Footer'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from './styles/Styles.js'; 

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="pages">
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="resources" element={<Resources />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
    
    
  );
}

export default App;
