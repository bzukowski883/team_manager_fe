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
  const [newEventData, setNewEventData] = useState({
    title: '',
    description: '',
    color: "var(--color-blue)",
    startDate: new Date(),
    startTime: new Date(),
    // endDate: new Date(),
    endTime: new Date(),
  })

  function handelSubmit(e) {
    e.preventDefault(); // Prevent the browser from reloading the page

    // TODO: maybe combine the dates and times? not sure, this is nicer so maybe just use seperated values

    console.log(`Create new event`, newEventData)
  };


  const handelChange = (e) => {
    const { name, value } = e.target
    console.log(`handelChange[`, name, `]:`, value)
    setNewEventData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

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
          <input 
            id="title" 
            name="title"
            required 
            placeholder="Add Title" 
            className="create-event-form-item"
            onChange={handelChange}
          />
          <textarea 
            id="description"
            name="description" 
            placeholder="Add description" 
            className="create-event-form-item-description"
            onChange={handelChange}
          />
          <ColorChoices 
            name="color"
            onChange={handelChange} 
            style={{ "borderColor":newEventData.color, }} 
          />
          <div className="create-event-form-item-row">
            <input name="startDate" type="date" required className="create-event-form-time" onChange={handelChange}/>
            :
            <input name="startTime" type="time" required className="create-event-form-time" onChange={handelChange}/>
            to
            <input name="endTime" type="time" required className="create-event-form-time" onChange={handelChange}/>
          </div>
          <button type="submit" className="create-event-form-submit-button">+ Create event</button>
        </form>
      </div>
    </div>
  )
}

function ColorChoices({style, onChange, name, }) {
  
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
    <select name={name} onChange={onChange} style={style} className="create-event-form-color-dropdown">
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