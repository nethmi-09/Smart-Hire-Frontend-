// SmartHire AI Assistant



function sendMessage(){



let input =
document.getElementById("userMessage");



let chat =
document.getElementById("chatBox");



let userText =
input.value;




if(userText===""){

return;

}




let userMessage =
document.createElement("p");



userMessage.innerHTML =
"You: "+userText;



chat.appendChild(userMessage);






let bot =
document.createElement("div");


bot.className="bot-message";





let question =
userText.toLowerCase();





if(question.includes("plumber")){


bot.innerHTML =
"AI: I recommend our verified plumbing professionals.";


}



else if(question.includes("electric")){


bot.innerHTML =
"AI: You can find trusted electrical service providers.";


}



else if(question.includes("clean")){


bot.innerHTML =
"AI: SmartHire has professional cleaning services.";


}



else if(question.includes("book")){


bot.innerHTML =
"AI: You can book a service from the booking page.";


}



else{


bot.innerHTML =
"AI: I can help you with services, providers and bookings.";


}





chat.appendChild(bot);



input.value="";



chat.scrollTop =
chat.scrollHeight;


}