import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Upload} from './FileUpload/Upload';
import { Draglist } from './TodolistDrag/Draglist';


function App() {
  return (
    <div className="App">
    {/* <Upload/> */}
    <Draglist/>
    </div>
  );
}

export default App;


