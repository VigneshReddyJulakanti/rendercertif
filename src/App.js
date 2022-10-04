import React from 'react'
import Navbar from './Components/Navbar'
import {  Routes, Route } from "react-router-dom";
import Main from './Components/Main'
import './App.css'
import Certificates_templates from './Components/Certificates_templates';
import Main_2 from './Components/Main_2';
import Home from './Components/Home';
import Your_Certificates from './Components/Your_Certificates';
import Verify_Certificate from './Components/Verify_Certificate';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import NoteState from "./context/notes/NoteState"
export default function App() {
  return (
  <>

<NoteState>

    <Navbar></Navbar>
    <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/main_2" element={<Main_2 />} />
        <Route path="/certificates_templates" element={<Certificates_templates />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/verify_certificate' element={<Verify_Certificate/>}/>
        <Route path='/your_certificates' element={<Your_Certificates/>}/>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
    
      </Routes>
      </NoteState>
    </>
  )
}
