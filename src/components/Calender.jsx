import "../styles/tokens.css"
import "../styles/mainComponent.css"
import "../styles/components.css"
import { getExampleZero } from "../services/calendarservices.js"
import { useState } from "react"
import SomethingWentWrong from "./Error"
import Sidebar from "./Sidebar";

function Calendar() {
  
  const [buttonText, setButtonText] = useState("Do something with the server!");

  async function handleClick() {
    const res = await getExampleZero();
    setButtonText(res);
  }

  return (
    <div className="main-window">
      <Sidebar>
        <img width="45px" src="https://www.gstatic.com/images/branding/productlogos/calendar_2026_22/v2/png/calendar_2026_22_96dp.png" alt="(currently google) calendar logo"/>
        <select>
          <option>Schedule</option>
          <option>Week</option>
          <option>Month</option>
        </select>
        <div>setting 1</div>
        <div>setting 2</div>
        <div>setting 3</div>
        <div>setting 4</div>
        <div>etc...</div>
      </Sidebar>
      <button onClick={handleClick}>{buttonText}</button>
      <SomethingWentWrong errorTitle="This will be the Calendar Page" errorMessage="Imagin dates and stuff here with some events and things and more text here"/>
    </div>
  )
}
export default Calendar;