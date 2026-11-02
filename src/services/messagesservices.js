import {getMessages, createMessage} from "../api/messageBrd.js"

export async function loadMessages(){
    return getMessages();
}

export async function addMessage(message){
    return createMessage(message);
}