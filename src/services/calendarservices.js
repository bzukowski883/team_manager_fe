import { getExampleOne, fetchCalendarEventsByDate } from "../api/calendar.js"

export async function getExampleZero(){
    let response = await getExampleOne()
    console.log(response);
    return response.data
}

export async function GetCalendarEventsOnDay(fromDate, toDate) {
    let response = await fetchCalendarEventsByDate(fromDate, toDate)
    console.log(`response:`, response.data);
    return response.data
}

