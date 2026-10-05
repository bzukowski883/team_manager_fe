import "../styles/tokens.css"
import "../styles/layout.css"
import "../styles/mainComponent.css"

import { useState } from 'react';

import Sidebar from "./Sidebar";
import SomethingWentWrong from "./Error";

function Messages() {
    return (
        <div className="main-window">
            <Sidebar>
            <h2>DMs</h2>
            <div>Team Mate 1</div>
            <div>Team Mate 2</div>
            <div>Team Mate 3</div>
            <div>Team Mate 4</div>
            <h2>Groups</h2>
            <div>General</div>
            <div>text 2</div>
            <div>etc...</div>

            </Sidebar>
            <SomethingWentWrong errorTitle="This page has not been finished" errorMessage="The Messages page is still being worked on :/"/>
        </div>
    )
}

export default Messages;