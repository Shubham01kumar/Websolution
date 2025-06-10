import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Mission from './Components/Mission';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Footer from './Components/Footer';
import DevelopmentProcess from './Components/DevelopmentProcess';
import OurProjects from './Components/OurProjects';
import AdminContacts from './pages/AdminContacts';
import AdminLogin from './Components/AdminLogin';
import AdminProjects from './pages/AdminProjects';
import AdminPanel from './pages/AdminPanel';



//import AdminContacts from './Components/AdminContacts';


function HomePage() {
  return (
    <>
      <Home />
      <DevelopmentProcess />
      <OurProjects />
      <Mission />
      <About />
      <Service />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Shows everything */}
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
