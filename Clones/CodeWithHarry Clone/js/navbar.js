const navbar = document.querySelector('.navbar').querySelector('.main');;
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navbar.style.transition = "0.5s";
    if(navbar.style.display === "none"){
        navbar.style.display = "block";
    }
    else{
        navbar.style.display = "none";
    }
});