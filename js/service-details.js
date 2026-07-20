const services = {


plumbing:{


name:"Professional Plumbing Service",

image:"images/plumber.jpg",

description:
"Expert plumbing solutions including pipe repair, leakage fixing and maintenance.",

provider:
"Certified Plumbing Professionals",

price:
"Rs.3000 - Rs.10000",

rating:
"⭐⭐⭐⭐⭐"


},




electrician:{


name:"Electrical Service",

image:"images/electrician.jpg",

description:
"Safe electrical installation, wiring and repair services.",

provider:
"Licensed Electricians",

price:
"Rs.2500 - Rs.15000",

rating:
"⭐⭐⭐⭐⭐"


},





cleaning:{


name:"Cleaning Service",

image:"images/cleaning.jpg",

description:
"Professional home and office cleaning services.",

provider:
"Cleaning Experts",

price:
"Rs.2000 - Rs.8000",

rating:
"⭐⭐⭐⭐"


},




tutor:{


name:"Professional Tutoring",

image:"images/tutor.jpg",

description:
"Experienced tutors for online and physical learning support.",

provider:
"Qualified Tutors",

price:
"Rs.1500 per hour",

rating:
"⭐⭐⭐⭐⭐"


},




repair:{


name:"Technical Repair Service",

image:"images/repair.jpg",

description:
"Computer, mobile and electronic device repair services.",

provider:
"Technical Specialists",

price:
"Rs.2000 - Rs.20000",

rating:
"⭐⭐⭐⭐"


}



};





// Get selected service


const urlParams =
new URLSearchParams(window.location.search);



const selectedService =
urlParams.get("service");




const service =
services[selectedService];





if(service){



document.getElementById("serviceImage").src =
service.image;



document.getElementById("serviceName").innerHTML =
service.name;



document.getElementById("serviceDescription").innerHTML =
service.description;



document.getElementById("provider").innerHTML =
service.provider;



document.getElementById("price").innerHTML =
service.price;



document.getElementById("rating").innerHTML =
service.rating;



document.getElementById("bookingLink").href =
"booking.html";



}