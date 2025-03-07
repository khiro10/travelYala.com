import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "antd/dist/reset.css";

import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes.tsx';
import RotateDeviceScreen from './components/rotate';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <RotateDeviceScreen />  
    <MainRouter />
  </Router>
  </StrictMode>,
)
