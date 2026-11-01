import {getTasks, createTask} from "../api/taskBoard.js"

export async function loadTasks(){
    return getTasks();
}

export async function addTask(task){
    return createTask(task);
}