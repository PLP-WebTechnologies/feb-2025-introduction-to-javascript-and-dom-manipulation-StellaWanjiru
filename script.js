
/* This script Modifies CSS styles via JavaScript. */
const text=document.getElementById("welcomeMessage");
text.style.color="Purple";
text.style.fontsize="30px"

/* This script dynamically changes textContent when the order now button is clicked */
const button =document.getElementById("btn");
const message=document.getElementById("message");
button.addEventListener("click",()=> {
    message.textContent="Your placed an order! ";
});

/* This script Adds  an element when a button is clicked. */
const joinButton=document.getElementById("joinBtn");
const list=document.getElementById("list");
joinButton.addEventListener("click",()=>{
    const newItem=document.createElement("li");
    newItem.textContent="New Member";
    list.appendChild(newItem);
});

