import ReactDOM from 'react-dom/client';
import React from 'react';
import LandingPage from './pages/LandingPage/index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact/index.js';
import NotFoundPage from './pages/NotFoundPage/index.js';
import Experience from './pages/Experience/index.js';
import AboutMe from './pages/AboutMe/index.js';
import Header from './components/Header/index.js';
import IndexWrapper from './indexWrapper.js';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element = {<LandingPage />}/>
          <Route path="contact" element = {<Contact />}/>
          <Route path="*" element = {<NotFoundPage />}/>
          <Route path="experience" element = {<Experience />}/>
          <Route path="aboutme" element = {<AboutMe />}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexWrapper />
    <App/>
  </React.StrictMode>
);

