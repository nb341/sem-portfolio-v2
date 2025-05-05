import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react';
import './index.css'
import App from './App.jsx'

import * as React from 'react'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />
    
    <App />
    
  </StrictMode>,
)
