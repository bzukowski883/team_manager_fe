import axios from "axios"
import debugGetEvents from "./debugCalendarApiSim"

export async function getExampleOne() {
    return await axios.get("/api/calendar/example");
}

export async function fetchCalendarEventsByDate(fromDate, toDate) {
    // TODO: replace with axios call
    return {
        "data": debugGetEvents()
    }
}