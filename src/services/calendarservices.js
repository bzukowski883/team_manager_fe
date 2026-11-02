import {getExampleOne,getEvents,getEventById,createEvent} from "../api/calendar.js"

export async function getExampleZero(){
    let response = await getExampleOne()
    console.log(response);
    return response.data
}

export async function loadEvents(){
    return getEvents();
}

export async function addEvent(event){
    return createEvent(event);
}