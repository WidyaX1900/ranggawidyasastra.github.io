// Hamburger menu variables
const icon = document.querySelector("nav .hamburger-icon");
const hamburger = icon.querySelectorAll("span");
const menus = document.querySelectorAll(".menu ul li a");
const link = document.getElementsByClassName("menu");
const h3 = document.getElementsByClassName("nav-heading");
const nav = document.getElementsByTagName("nav");

// Menu Slide
function slideMenu(){
    link[0].classList.toggle("slide");
    link[0].classList.toggle("dark");
    h3[0].classList.toggle("light");
    nav[0].classList.toggle("dark");

    hamburger.forEach(element => {
        element.classList.toggle("light");
    })

}


// Hamburger Icon Animation
icon.addEventListener("click", function(){
    hamburger[2].classList.toggle("rotate-2");
    hamburger[0].classList.toggle("rotate-1");
    hamburger[1].classList.toggle("rotate-3");
    slideMenu();
});

// Social variables
const collaborate = document.getElementsByClassName("collaborated")[0];
const social = collaborate.lastElementChild;
const ic = social.lastElementChild.querySelectorAll("span");

// Social Media Icon Link
ic.forEach(element => {
    element.addEventListener("click", function(e){
        if(element.className == "instagram"){
            window.open("https://www.instagram.com/widyasastra04_/", "_blank").focus();
        
        } else if(element.className == "email"){
            window.open("mailto: ranggawidyasastra@gmail.com?").focus();
        }
    });
});

const portfolio = document.getElementsByClassName("portfolio");

// Portfolio link
for(let i = 0; i < portfolio.length; i++){

    if(i === 0){

        portfolio[i].addEventListener('click', function(){

            window.open('https://medium.com/@ranggawidyasastra/unofficial-website-for-warung-mina-662118d54d27', '_blank').focus();
        });
    }
}

// CTA variables
const cta = document.getElementsByClassName("cta")[0];
const ctaButton = cta.getElementsByTagName("button")[0];
ctaButton.addEventListener("click", function(){
    document.location.href = "portfolio.html";
});