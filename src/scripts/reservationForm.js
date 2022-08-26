import { saveClientInfo } from "./dataAccess.js"

let main = document.querySelector("#container")

//?This click even is in charge of taking the information from the inputs and sending it to the API
main.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation"){
    //assing all the inputs from the form to a variable in order to use it later to push to the api
    const parentName = document.querySelector("input[name='parentName']").value
    const childName = document.querySelector("input[name='childName']").value
    const childrenAmount = document.querySelector("input[name='childrenAmount']").value
    const address = document.querySelector("input[name='address']").value
    const dateOfEvent = document.querySelector("input[name='date_of_event']").value
    const hoursNeeded = document.querySelector("input[name='hours_Needed']").value
    
    //create an object that will be sent to the api through the post function
    const clientInfo = {
        parentName: parentName,
        childName: childName,
        childrenAmount: parseInt(childrenAmount),
        address: address,
        date_of_event:dateOfEvent,
        hours_Needed: parseInt(hoursNeeded)
    }
    saveClientInfo(clientInfo)
}
})



export const reservationForm = () => {
    let html = `
    <section id="reservation__Form">
            <div>
                <label class="label">Parent Name:</label>
                <input type="text" name="parentName"/>
            </div>
            <div>
                <label class="label">Child's Name:</label>
                <input type="text" name="childName"/>
            </div>
                <label>How many children are going to be attending the party?</label>
                <input type="number" name="childrenAmount"/> children
            <div>  
                <label>Adress for the party</label>
                <input type="text" name="address" />
            </div>  
            <div>
                <label>Date of Reservation</label> 
                <input type="date" name="date_of_event"/>
            </div>
            <div>
                <label> Hours of entertainment needed</label>
                <input type="decimal" name="hours_Needed"/> hours
            </div>
            <div>
                <button class="button" id="submitReservation"> Send Reservation Request </button>
            </div>
    </section>`

    return html
}