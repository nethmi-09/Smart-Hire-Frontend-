// SmartHire Booking System



function confirmBooking(){



let service =
document.getElementById("service").value;



let date =
document.getElementById("date").value;



let location =
document.getElementById("location").value;




let message =
document.getElementById("bookingMessage");





if(date==="" || location===""){



message.innerHTML =
"Please complete all booking details";


message.style.color="red";



}




else{


message.innerHTML =

"Your "+service+
" booking has been confirmed successfully!";



message.style.color="lightgreen";



}



}