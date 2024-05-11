
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PageNotFound from './pages/PageNotFound';
import BaseLayout from './pages/_baseLayout';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }

]);

function App() {


  return (
    <>
    <RouterProvider router={appRouter} />
    </> 
  )
}

export default App
