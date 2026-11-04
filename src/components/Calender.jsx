import "../styles/tokens.css"
import "../styles/mainComponent.css"
import "../styles/components.css"
import "../styles/calendar.css"
import { getExampleZero } from "../services/calendarservices.js"
import { useState } from "react"
import SomethingWentWrong from "./Error"
import Sidebar from "./Sidebar";

export default function Calendar() {
  
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
      <DisplayEventColumn width="300px">
        <DisplayEvent 
          title="Lorem Ipsum" 
          description="Consectetur adipiscing elit. Quos optio dolore nostrud nihil in. Fuga accusamus at ad dignissimos eligendi minus quo consectetur deserunt. Nam occaecat do sit ullamco laborum in odio. Est quo nulla minim nulla occaecat et." 
          displayColor="var(--color-green)"/>
        <DisplayEvent 
          title="Assumenda quo et" 
          description="Velit et odio fugiat excepteur vero in temporibus distinctio maxime autem consectetur. Excepteur mollit dolore quidem cupidatat laboris et et fuga et est." 
          displayColor="var(--color-blue)"/>
      </DisplayEventColumn>
      {/* <button onClick={handleClick}>{buttonText}</button> */}
      {/* <SomethingWentWrong errorTitle="This will be the Calendar Page" errorMessage="Imagin dates and stuff here with some events and things and more text here"/> */}
    </div>
  )
}

function DisplayEvent({ title = "event title", displayColor = "var(--color-blue)", description = "desc", start_time, endTime }) {
  return(
    <div className="display-event" style={{'background-color': displayColor}}>
      <div className="calendar-item-title">{title}</div>
      <div className="calendar-item-description">{description}</div>
    </div>
  )
}

function DisplayEventColumn({children, width = "100px"}) {
  return(
    <div className="display-event-column" style={{width: width}}>
      {children}
    </div>
  )
}