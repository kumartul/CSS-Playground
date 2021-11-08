const navbar = document.querySelector('.navbar').querySelector('.main');;
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    if(navbar.style.display === "none"){
        navbar.style.display = "block";
    }
    else{
        navbar.style.display = "none";
    }
});