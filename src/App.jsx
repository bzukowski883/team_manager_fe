import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/tokens.css"
import "./styles/layout.css"
import "./styles/mainComponent.css"

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/signup';

function App() {
  const [UserLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
