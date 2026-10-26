import axios from "axios"

export async function getExampleOne() {
    return await axios.get("/api/calendar/example");
}

export async function getEvents() {
    return await axios.get("/api/calender/events");
}

export async function createEvent(event) {
    return await axios.post("/api/calender/events", event);
}