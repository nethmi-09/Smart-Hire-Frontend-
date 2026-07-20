// SmartHire Authentication



function loginUser(){


let email =
document.getElementById("loginEmail").value;



let password =
document.getElementById("loginPassword").value;



let message =
document.getElementById("loginMessage");




if(email === "" || password === ""){


message.innerHTML =
"Please enter the required information";


message.style.color="red";


}



else{


message.innerHTML =
"Login Successful";


message.style.color="lightgreen";



setTimeout(()=>{


window.location.href="dashboard.html";


},1500);



}



}





function registerUser(){



let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let phone =
document.getElementById("phone").value;


let password =
document.getElementById("password").value;



let message =
document.getElementById("registerMessage");





if(
name=="" ||
email=="" ||
phone=="" ||
password==""

){


message.innerHTML =
"Please enter the required information";


message.style.color="red";


}




else{


message.innerHTML =
"Registration Successful";


message.style.color="lightgreen";



setTimeout(()=>{


window.location.href="login.html";


},1500);



}


}