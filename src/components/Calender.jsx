import "../styles/tokens.css"
import "../styles/mainComponent.css"
import "../styles/components.css"
import "../styles/calendar.css"
import { getExampleZero, GetCalendarEventsOnDay} from "../services/calendarservices.js"
import { useEffect, useState } from "react"
import SomethingWentWrong from "./Error"
import Sidebar from "./Sidebar";

export default function Calendar() {
  const [buttonText, setButtonText] = useState("Do something with the server!");

  async function handleClick() {
    const res = await getExampleZero();
    setButtonText(res);
  }

  // the vertical zoom value / how far apart are each hour on each column 
  const HOUR_SCALE_IN_PX = 50;
  const NUM_OF_COLUMNS = 7;

  const [curDateTime, setCurDateTime] = useState(new Date());

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
      <CalendarWeekDisplay curDateTime={curDateTime} numOfColumns={NUM_OF_COLUMNS} HOUR_SCALE_IN_PX={HOUR_SCALE_IN_PX}/>
      {/* <button onClick={handleClick}>{buttonText}</button> */}
    </div>
  )
}

function CalendarWeekDisplay({
  curDateTime = new Date(), 
  numOfColumns = 7,
  HOUR_SCALE_IN_PX,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [columnEvents, setColumnEvents] = useState([]); 

  const columnSize = ( 1 / numOfColumns ) * 100;

  let monthDay = curDateTime.getDate()
  let weekDay = curDateTime.getDay()
  let longDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let curDay = new Date();
  curDay = new Date(
    curDay.getFullYear(),
    curDay.getMonth(),
    curDay.getDate()
  )

  function DateAddTime(date, 
    addDay = 0, 
    addHour = 0, 
    addMinute = 0,
    addYear = 0, 
    addMonth = 0, 
  ) {
    const outDate = new Date(date);
    outDate.setFullYear(outDate.getFullYear() + addYear);
    outDate.setMonth(outDate.getMonth() + addMonth);
    outDate.setDate(outDate.getDate() + addDay);
    outDate.setHours(outDate.getHours() + addHour);
    outDate.setMinutes(outDate.getMinutes() + addMinute);
    return outDate;
  }

  const [Columns, setColumns] = useState([
    { id:`${DateAddTime(curDay, 0)}`, title: `${longDayNames[0]}`, children: [] },
    { id:`${DateAddTime(curDay, 1)}`, title: `${longDayNames[1]}`, children: [] },
    { id:`${DateAddTime(curDay, 2)}`, title: `${longDayNames[2]}`, children: [] },
    { id:`${DateAddTime(curDay, 3)}`, title: `${longDayNames[3]}`, children: [] },
    { id:`${DateAddTime(curDay, 4)}`, title: `${longDayNames[4]}`, children: [] },
    { id:`${DateAddTime(curDay, 5)}`, title: `${longDayNames[5]}`, children: [] },
    { id:`${DateAddTime(curDay, 6)}`, title: `${longDayNames[6]}`, children: [] },
  ])

  useEffect(() => {
    const fetchColumnEvents = async () => {
      setIsLoading(true);
      try {
        const dayEvents = await GetCalendarEventsOnDay(curDateTime, DateAddTime(curDateTime, 7));
        setColumnEvents(dayEvents);

        Columns.map((column) => {
          column.children = dayEvents
            .filter((entry) => {
              let entryDate = new Date(Date.parse(entry.startDateTime));
              let startDate = new Date(
                entryDate.getFullYear(),
                entryDate.getMonth(),
                entryDate.getDate()
              )
              return startDate == column.id;
            })
        })

      } catch (error) {
        console.error("Error fetching events:", error);
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchColumnEvents();
  }, []);

  function DisplayJsonEvent(eventAsJson) {
    //TODO: make this support multi-day spanning events
    eventAsJson = eventAsJson.eventAsJson;

    let startTime = new Date(eventAsJson.startDateTime).getHours() 
      + ( new Date(eventAsJson.startDateTime).getMinutes() / 60 );
    let endTime = new Date(eventAsJson.endDateTime).getHours() 
      + ( new Date(eventAsJson.endDateTime).getMinutes() / 60 );
    let timeLength = Math.abs(endTime - startTime)

    if (startTime > endTime) {
      let foo = startTime;
      startTime = endTime;
      endTime = foo;
    }

    return(
      <DisplayEvent
        key = {eventAsJson.id}
        title={eventAsJson.title}
        description={eventAsJson.description}
        displayColor={eventAsJson.color}
        start_time={startTime}
        length_time={timeLength}
        display_hour_scale={HOUR_SCALE_IN_PX}
      />
    )
  }

  let columnIndex = -1;
  return (
    <div className="calendar-display">
      <CalendarDisplayColumns style={{ "--column-size": `${columnSize}%`, "--hour-size":`${HOUR_SCALE_IN_PX}px` }}>
        {Columns.map((column) => {
          columnIndex++;
          return (
            <DisplayEventColumn key={column.id} day_name={longDayNames[columnIndex]}>
              {isLoading ? (
                <h1>loading</h1>
              ):(
                column.children.map((columnEvent) => {
                  return(
                    <DisplayJsonEvent eventAsJson={columnEvent} key={columnEvent.id}/>
                  )
                })
              )}
            </DisplayEventColumn>
          );
        })}
      </CalendarDisplayColumns>
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
  let displayColor1 = "var(--color-blue)"
  return(
    <div className="display-event" style={{
      backgroundColor: displayColor,
      top: `${y_position}px`,
      height: `calc(${y_size}px - var(--container-padding-sm) * 2)`, // the padding needs to be removed
      }}>
      <div className="calendar-item-title">{title}</div>
      <div className="calendar-item-description">{description}</div>
    </div>
  )
}
