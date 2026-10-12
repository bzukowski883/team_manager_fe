import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/tokens.css"
import "./styles/layout.css"
import "./styles/mainComponent.css"

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/signup';
import SomethingWentWrong from './components/Error';

function App() {
  const [UserLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard currentScreen={"Calendar"}/>}/>
        <Route path='Calendar' element={<Dashboard currentScreen={"Calendar"}/>}/>
        <Route path='Messages' element={<Dashboard currentScreen={"Messages"}/>}/>
        <Route path='JiraBoard' element={<Dashboard currentScreen={"JiraBoard"}/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="*" element={<SomethingWentWrong errorCode={404} errorMessage='Unknown URL' />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
