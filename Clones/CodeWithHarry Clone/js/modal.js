const backdrop = document.querySelector('.backdrop');

const loginModal = document.querySelector('.login-modal');
const loginBtn = document.getElementById('login-btn');

const signUpModal = document.querySelector('.signup-modal');
const signUpBtn = document.getElementById('signup-btn');

// const forgotPasswordM

const closeBtns = document.querySelectorAll('.close-btn');

// Function: Closes all the modals 
const closeAllModals = () => {
    loginModal.style.display = "none";
    signUpModal.style.display = "none";
}

// Function: Hides the backdrop
const hideBackdrop = () => {
    backdrop.style.display = "none";
    backdrop.style.opacity = 0;
}

// Function: Shows the backdrop
const showBackdrop = () => {
    backdrop.style.display = "block";
    backdrop.style.opacity = 1;
}

// Function: Displays a modal
const displayModal = modal => {
    showBackdrop();
    switch(modal){
        case "signup":
            signUpModal.style.display = "block";
            signUpModal.style.top = "calc(var(--navbar-height)/2)";
        case "login":
            loginModal.style.display = "block";
            loginModal.style.top = "calc(var(--navbar-height)/2)"; 
    }
}

// Iterate through all the close buttons and attach an event listener
Array.from(closeBtns).forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeAllModals();
        hideBackdrop();
    });
});

loginBtn.addEventListener('click', () => {
    displayModal("login");
});

signUpBtn.addEventListener('click', () => {
    displayModal("signup");
});

backdrop.addEventListener('click', () => {
    closeAllModals();
    hideBackdrop();
});