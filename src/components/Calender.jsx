import "../styles/tokens.css"
import "../styles/mainComponent.css"
import "../styles/components.css"

import SomethingWentWrong from "./Error"
import Sidebar from "./Sidebar";


function Calendar({setIcludeSidebarButton = true}) {
  setIcludeSidebarButton( true )
  
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
      <SomethingWentWrong errorTitle="This will be the Calendar Page" errorMessage="Imagin dates and stuff here with some events and things"/>
    </div>
  )
}

export default Calendar;