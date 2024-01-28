import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.tsx'
import './App.css'


const queryClient = new QueryClient()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
