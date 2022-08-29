//This module will print out the reservations made by the clients
//?This should have a function to show how it will be printing out
//!First thing to do is import the reservations from the database
//!Then to show the options I need to iterate through the array of Objects of clients
//!each client will be listed with their children's name and day of the event
import { getClients, denyParty } from "./dataAccess.js";

const main = document.querySelector("#container")



export const ReservationRequest = () => {
    const clients = getClients()
   
let eachClient = clients.map(clientRequest => {
    let html = `
    <div class= "client-Request">${clientRequest.parentName} needs help with: ${clientRequest.childName}'s bithday party, on the ${clientRequest.date_of_event}</div>
    <button class="reservation__denied"
            id="reservation--${clientRequest.id}">
        Deny Party, Sowy <3
    </button>
    <div>
    `
    return html
})
   
return eachClient.join('')
}

main.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation")) {
        const [, clientId] = click.target.id.split("--")
        denyParty(parseInt(clientId))
    }
})