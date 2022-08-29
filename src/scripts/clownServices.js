import { reservationForm } from "./reservationForm.js"
import {ReservationRequest} from "./reservationList.js"


export const clownServices = () => {
    let html = `
    <header> Buttons and Lollipop The Clowns</header>
        <h1>Reservations</h1>
        ${reservationForm()}
    <section>
       <h2>Every Reservation Made</h2>
       ${ReservationRequest()} 
    </section>
        `
    return html
}