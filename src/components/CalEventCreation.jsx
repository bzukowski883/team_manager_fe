import "../styles/tokens.css"
import "../styles/mainComponent.css"
import "../styles/components.css"
import "../styles/calendar.css"
import { useEffect, useState } from "react"

export default function CreateEventBox({
  posX: posLeft = 'auto',
  posRight = '100px',
  posY: posTop = '100px',
  posBottom = 'auto',
  sizeX = 'fit-content', 
  sizeY = `fit-content`,
}) {
  const [newEventColor, setNewEventColor] = useState("var(--color-text)");

  function handelSubmit(e) {
    e.preventDefault(); // Prevent the browser from reloading the page

    console.log(`Create new event `)
  }

  const handelColorChange = (e) => {
    console.log(`handelColorChange:`, e.target.value)
    setNewEventColor(e.target.value)
  }

  return (
    <div className="floating-container" style={{
      "--position-right":posRight,
      "--position-left":posLeft,
      "--position-top":posTop,
      "--position-bottom":posBottom,
      "--size-x":sizeX,
      "--size-y":sizeY,
      }}>
      <div className="box-container">
        <form onSubmit={handelSubmit} className="create-event-form">
          <h1>Create Event</h1>
          <input name="title" placeholder="Add Title" className="create-event-form-item"/>
          <textarea name="description" placeholder="Add description" className="create-event-form-item-description"/>
          <ColorChoices onChange={handelColorChange} style={{ "border-color":newEventColor, }} />
          <div className="create-event-form-item-row">
            <input type="date" name="startDate" className="create-event-form-time"/>
            :
            <input type="time" name="startTime" className="create-event-form-time"/>
            to
            <input type="time" name="endTime" className="create-event-form-time"/>
          </div>
          <button type="submit" className="create-event-form-submit-button">+ Create event</button>
        </form>
      </div>
    </div>
  )
}

function ColorChoices({style, onChange}) {
  
  const options = [
    { value: "var(--color-blue)",       label: "Blue" },
    { value: "var(--color-gray)",       label: "Gray" },
    { value: "var(--color-red)",        label: "Red" },
    { value: "var(--color-green)",      label: "Green" },
    { value: "var(--color-purple)",     label: "Purple" },
    { value: "var(--color-yellow)",     label: "Yellow" },
    { value: "var(--color-orange)",     label: "Orange" },
    { value: "var(--color-lightgreen)", label: "Light Green" },
    { value: "var(--color-lavender)",   label: "Lavender" },
    { value: "var(--color-brown)",      label: "Brown" },
    { value: "var(--color-pink)",       label: "Pink" },
  ]

  return (
    <select onChange={onChange} style={style} className="create-event-form-color-dropdown">
      {options.map((colorOption) => (
        <option key={colorOption.label} value={colorOption.value} style={{ 
          color:colorOption.value
          // "background-color":colorOption.value
          }}>
          ● {colorOption.label}
        </option>
      ))}
    </select>
  )
}