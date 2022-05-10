import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropDownImage from './DropDownImage';
import DropDownContent from './DropDownContent';
import DropDownLikes from './DropDownLikes';
import DropDownText from './DropDownText';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DropDownImage />
    <DropDownContent />
    <DropDownLikes />
    <DropDownText />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
