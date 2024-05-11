
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PageNotFound from './pages/PageNotFound';
import BaseLayout from './pages/_baseLayout';
import Navbar from './components/Navbar';




function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="*" element={<PageNotFound />} />        
            </Route>
        </Routes>
      </BrowserRouter>   
    </> 
  )
}

export default App