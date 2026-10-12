import { useState } from 'react'

import "./styles/tokens.css"
import "./styles/layout.css"
import "./styles/mainComponent.css"

import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [UserLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <Login/>
    // <Dashboard/>
  )
}

export default App
