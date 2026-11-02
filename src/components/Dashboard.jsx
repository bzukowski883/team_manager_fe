import { useState } from 'react'

import "./../styles/tokens.css"
import "./../styles/layout.css"
import "./../styles/mainComponent.css"

import Header from './../components/Header';
import SomethingWentWrong from "./../components/Error";
import Calendar from "./../components/Calender";
import Messages from "./../components/Messages";

export default function Dashboard({
    UserLoggedIn, // bool
    currentScreen, 
}) {
    // const [currentScreen, setCurrentScreen] = useState("Calendar");
    const [IcludeSidebarButton, setIcludeSidebarButton] = useState(false)

    return (
        <div className="page-shell">
        <main className="page-main-body">
            {
                {
                Calendar: 
                    <>
                    <Calendar/>,
                    {() => setIcludeSidebarButton( true )}
                    
                    </>,
                Messages: 
                    <>
                    <Messages/>
                    {() => setIcludeSidebarButton(true)}
                    </>,
                JiraBoard: 
                    <div className="main-window">
                        {() => setIcludeSidebarButton(false)}
                        <SomethingWentWrong errorTitle="This page has not been finished" errorMessage="The Jira Board page is still being worked on :/"/>
                    </div>,
                }[currentScreen] || <SomethingWentWrong/>
            }
        </main>
        <header className="page-header"><Header currentScreen={currentScreen} IcludeSidebarButton={IcludeSidebarButton}/></header>
    </div>
    )
}