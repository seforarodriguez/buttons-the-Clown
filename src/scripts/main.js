// ?This module will render everything into the index.hmtl
import { fetchClients, fetchReservations, fetchClowns } from "./dataAccess.js"
import {clownServices} from "./clownServices.js"

export const main = document.querySelector("#container")

const render = () => {
    fetchClowns()
    .then(() => fetchClients())
    .then(() => fetchReservations)
    .then(() => {main.innerHTML = clownServices()})

}
main.addEventListener("stateChanged", customEvent => {
    render()
})
render ()
