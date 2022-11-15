import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CharactersView from './CharactersView';
import LocationView from './LocationView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Characters" element={<CharactersView/>}> </Route>
        <Route path="Location" element={<LocationView/>}> </Route>
      </Route>
    </Routes>
  </BrowserRouter>

);


