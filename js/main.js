// SmartHire Main JavaScript


window.addEventListener("load",()=>{

    console.log("SmartHire Website Loaded");

});


// SmartHire Hero Video Slideshow


let heroSlides =
document.querySelectorAll(".hero-slide");


let currentSlide = 0;



function changeHeroSlide(){


    heroSlides[currentSlide]
    .classList.remove("active");



    currentSlide++;



    if(currentSlide >= heroSlides.length){

        currentSlide = 0;

    }



    heroSlides[currentSlide]
    .classList.add("active");



}




// Change image every 4 seconds

setInterval(changeHeroSlide,4000);

// Active Navigation Highlight

let currentPage = window.location.pathname.split("/").pop();


let links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{


    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }


});





// Button Animation

const buttons = document.querySelectorAll("button,.btn");


buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });



    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });


});