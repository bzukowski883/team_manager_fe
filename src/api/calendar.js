import axios from "axios"

export async function getExampleOne() {
    return await axios.get("/api/calendar/example");
}
