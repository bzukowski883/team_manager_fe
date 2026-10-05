import { useState } from 'react'

import "./styles/tokens.css"
import "./styles/layout.css"
import "./styles/mainComponent.css"

import Header from './components/Header';
import SomethingWentWrong from "./components/Error";
import Calendar from "./components/Calender";
import Messages from "./components/Messages";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Calendar");
  const [IcludeSidebarButton, setIcludeSidebarButton] = useState(false)

  return (
    <div className="page-shell">
      <header className="page-header"><Header currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} IcludeSidebarButton={IcludeSidebarButton ? "true" : ""}/></header>
      <main className="page-main-body">
          {
            {
              Calendar: 
                <>
                  <Calendar setIcludeSidebarButton={setIcludeSidebarButton}/>,
                  {() => setIcludeSidebarButton(true)}
                </>,
              Messages: 
                <>
                  <Messages/>
                </>,
              "Jira Board": 
                <div className="main-window">
                  <SomethingWentWrong errorTitle="This page has not been finished" errorMessage="The Jira Board page is still being worked on :/"/>
                </div>,
            }[currentScreen] || <SomethingWentWrong/>
          }
      </main>
    </div>
  )
}

export default App
