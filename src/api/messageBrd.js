import axios from "axios"

export async function getMessages() {
    return await axios.get("/api/messageBrd/read");
}

export async function createMessage(message) {
    return await axios.post("/api/messageBrd/read", message);
}