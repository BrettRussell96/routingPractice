
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />         
        </Routes>    
      </BrowserRouter>
    </> 
  )
}

export default App
