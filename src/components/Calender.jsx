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
  const hour_scale_in_px = 50;
  const column_size = 300

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
      {/* note: this is currently being filled out manually for demonstration purposes.
      this will eventually be layed out automatically and then events will be populated automatically */}
      <CalendarDisplayColumns style={{ "--column-size": `${column_size}px`, "--hour-size":`${hour_scale_in_px}px` }}>
        <DisplayEventColumn day_name="Tuesday">
          <DisplayEvent 
            title="Lorem Ipsum" 
            description="Consectetur adipiscing elit. Quos optio dolore nostrud nihil in. Fuga accusamus at ad dignissimos eligendi minus quo consectetur deserunt. Nam occaecat do sit ullamco laborum in odio. Est quo nulla minim nulla occaecat et." 
            display_hour_scale={hour_scale_in_px}
            start_time={2}
            length_time={2}
            displayColor="var(--color-green)"/>
          <DisplayEvent 
            title="Assumenda quo et" 
            description="Velit et odio fugiat excepteur vero in temporibus distinctio maxime autem consectetur. Excepteur mollit dolore quidem cupidatat laboris et et fuga et est." 
            display_hour_scale={hour_scale_in_px}
            start_time={10}
            length_time={2}
            displayColor="var(--color-blue)"/>
        </DisplayEventColumn>
        <DisplayEventColumn day_name="Wednesday">
          <DisplayEvent 
            title="Lorem Ipsum" 
            description="Consectetur adipiscing elit. Quos optio dolore nostrud nihil in. Fuga accusamus at ad dignissimos eligendi minus quo consectetur deserunt. Nam occaecat do sit ullamco laborum in odio. Est quo nulla minim nulla occaecat et." 
            display_hour_scale={hour_scale_in_px}
            start_time={4}
            length_time={4}
            displayColor="var(--color-green)"/>
          <DisplayEvent 
            title="Assumenda quo et" 
            description="Velit et odio fugiat excepteur vero in temporibus distinctio maxime autem consectetur. Excepteur mollit dolore quidem cupidatat laboris et et fuga et est." 
            display_hour_scale={hour_scale_in_px}
            start_time={1}
            length_time={2.1}
            displayColor="var(--color-blue)"/>
        </DisplayEventColumn>
        <DisplayEventColumn day_name="Thursday">
          <DisplayEvent 
            title="Lorem Ipsum" 
            description="Consectetur adipiscing elit. Quos optio dolore nostrud nihil in. Fuga accusamus at ad dignissimos eligendi minus quo consectetur deserunt. Nam occaecat do sit ullamco laborum in odio. Est quo nulla minim nulla occaecat et." 
            display_hour_scale={hour_scale_in_px}
            start_time={6}
            length_time={2}
            displayColor="var(--color-red)"/>
          <DisplayEvent 
            title="Assumenda quo et" 
            description="Velit et odio fugiat excepteur vero in temporibus distinctio maxime autem consectetur. Excepteur mollit dolore quidem cupidatat laboris et et fuga et est." 
            display_hour_scale={hour_scale_in_px}
            start_time={20}
            length_time={2}
            displayColor="var(--color-blue)"/>
        </DisplayEventColumn >
      </CalendarDisplayColumns>
      {/* <button onClick={handleClick}>{buttonText}</button> */}
      {/* <SomethingWentWrong errorTitle="This will be the Calendar Page" errorMessage="Imagin dates and stuff here with some events and things and more text here"/> */}
    </div>
  )
}

function CalendarDisplayColumns({ 
  children, style}) {
  return (
    <div className="calendar-display-wiget">
      <div className="calendar-display-day-labels">days</div>
      <div className="calendar-display-hour-labels">side</div>
      <div className="calendar-display-columns" style={style}>
        {children}
      </div>
    </div>
  )
}

function DisplayEventColumn({
  day_name = "Day",
  children, style}) {
  return(
    <div className="display-event-column" style={style}>
      <div className="display-column-day-title">
        <div className="text-subtitle">{day_name}</div>
      </div>
      {children}
    </div>
  )
}

function DisplayEvent({ 
  title = "event title", 
  displayColor = "var(--color-blue)", 
  description = "desc", 
  display_hour_scale = 1,
  start_time = 0, 
  length_time = 1,
}) {
  var y_position = start_time * display_hour_scale
  var y_size = length_time * display_hour_scale

  return(
    <div className="display-event" style={{
      'background-color': displayColor,
      top: `${y_position}px`,
      height: `${y_size}px`,
      }}>
      <div className="calendar-item-title">{title}</div>
      <div className="calendar-item-description">{description}</div>
    </div>
  )
}

