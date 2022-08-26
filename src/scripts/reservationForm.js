


export const reservationForm = () => {
    let html = `
    <section id="reservation__Form">
            <div>
                <label class="label">Parent Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label class="label">Child's Name:</label>
                <input type="text"/>
            </div>
                <label>How many children are going to be attending the party?</label>
                <input type="number"/> children
            <div>  
                <label>Adress for the party</label>
                <input type="text/">
            </div>  
            <div>
                <label>Date of Reservation</label> 
                <input type="date"/>
            </div>
            <div>
                <label> Hours of entertainment needed</label>
                <input type="decimal"/> hours
            </div>
            <div>
                <input type="submit">
            </div>
    </section>`

    return html
}