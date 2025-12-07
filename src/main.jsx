import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import SecondPage from './pages/secondpage';
import ThirdPage from './pages/thirdpage';
import './styles.css'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/second", element: <SecondPage />},
  {path: "/third", element: <ThirdPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
