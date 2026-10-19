import {getExampleOne} from "../api/calendar.js"

export async function getExampleZero(){
    let response = await getExampleOne()
    console.log(response);
    return response.data
}