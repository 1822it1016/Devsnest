let total_tickets=25;
let booked_tickets=0;
let booked = document.getElementById("booked");
let remaining = document.getElementById("total");
remaining.innerHTML = total_tickets;
booked.innerHTML = booked_tickets;

document.querySelector(".main").addEventListener("click",events);
function events(e){
    let c = e.target.className;
    if(c == "un"){
        e.target.classList = "cl";
        booked_tickets = +(booked_tickets) + 1;
        total_tickets = +(total_tickets) - 1;

    }if(c == "cl"){
        e.target.classList = "un";
        booked_tickets = +(booked_tickets) - 1;
        total_tickets = +(total_tickets) + 1;

    } 
    remaining.innerHTML = total_tickets;
    booked.innerHTML = booked_tickets;   
}