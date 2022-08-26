import { reservationForm } from "./reservationForm.js"

export const clownServices = () => {
    let html = `
    <header> Buttons and Lollipop The Clowns</header>
        <h1>Reservations</h1>
        ${reservationForm()}
        `
    return html
}