import { reservationForm } from "./reservationForm.js"
import {ReservationRequest} from "./reservationList.js"


export const clownServices = () => {
    let html = `
    <header> Buttons and Lollipop The Clowns</header>
        <h1>Reservations</h1>
        ${reservationForm()}
       <h2>Every Reservation Made</h2>
       ${ReservationRequest()} 
        `
    return html
}