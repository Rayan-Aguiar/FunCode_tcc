import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
