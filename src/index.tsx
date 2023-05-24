import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './layout-project/welcom/Welcome';
import Treetest from './layout-project/layout/Treetest';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />}> </Route>
      <Route path='/welcome' element={<Welcome />}> </Route>
      <Route path='/tree' element={<Treetest />}> </Route>
      <Route path='/admin' element={<Treetest />}> </Route>admin-page1
      <Route path='/admin-page1' element={<Treetest />}> </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
