import axios from "axios"

export async function getTasks() {
    return await axios.get("/api/taskBoard/assigned");
}

export async function createTask(task) {
    return await axios.post("/api/taskBoard/assigned", task);
}