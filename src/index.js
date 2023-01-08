import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </ChakraProvider>
);

reportWebVitals();
