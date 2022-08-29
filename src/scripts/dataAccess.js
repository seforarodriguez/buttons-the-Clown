/*
? This module will do the GET fetches and POST to save the data in database
? I need to fetch (clowns, reservations and Clients lists)
? I then have in a structured cline the objects assign to a variable
*/
let applicationState = {
    clowns: [],
    clients: [],
    reservations: []
}

let main = document.querySelector("#container")
const API = "http://localhost:8088"

//!this is fetching the clowns from the database
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clowns) => {
                // Store the external state in application state
                applicationState.clowns = clowns
            }
        )
}

//!this is fetching the clients from the database
export const fetchClients = () => {
    return fetch(`${API}/clients`)
        .then(response => response.json())
        .then(
            (clients) => {
                // Store the external state in application state
                applicationState.clients = clients
            }
        )
}
//?This is the getter for the clients
export const getClients = () => {
    return applicationState.clients.map(client => ({...client}))
}


//!this is fetching the reservations from the database
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservations) => {
                // Store the external state in application state
                applicationState.reservations = reservations
            }
        )
}

//need to add a funciton that posts my reservations
//This function will post my clients information to the database
export const saveClientInfo = (clientInfo) => {
    const fetchClientInfo = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(clientInfo)
    }
    return fetch(`${API}/clients`, fetchClientInfo)
        .then(response => response.json())
        .then(() => {
            main.dispatchEvent(new CustomEvent ("stateChanged"))
        })
}
