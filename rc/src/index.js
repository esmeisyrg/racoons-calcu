import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/__css_files/reset.css';
import './assets/__css_files/variables.css';
import reportWebVitals from './reportWebVitals';
import PreView from './pages/PreView/PreView';
import CalcuMain from './pages/CalcuMain/CalcuMain';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*   <Preview/> */}
    <CalcuMain   />
  </React.StrictMode>
);


reportWebVitals();
