// Tooltip Data
const data = {
    programming_languages: {
        text: "A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.",
        src: "../public/assets/images/c_code.png",
        alt: "The source code for a simple computer program written in the C programming language. The gray lines are comments that help explain the program to humans in a natural language. When compiled and run, it will give the output 'Hello, world!'",
        isActive: false
    }
};

const main = document.querySelector('.main');
const links = document.querySelectorAll('.main p a');

// Iterate through all the links and add two event listeners on all of them
links.forEach(link => {
    link.addEventListener('mouseover', event => {
        const offsetX = event.offsetX;  // Current x-position of the mouse
        const offsetY = event.offsetY;  // Current y-position of the mouse

        // Fetch the data from the 'data' variable
        const text = data[event.target.getAttribute('data-label')].text;
        const src = data[event.target.getAttribute('data-label')].src;
        const alt = data[event.target.getAttribute('data-label')].alt;
        data[event.target.getAttribute('data-label')].isActive = true;

        // Create a tooltip element
        const tooltip = document.createElement('div');
        
        tooltip.id = event.target.getAttribute('data-label');
        tooltip.className = "tooltip";

        tooltip.style.left = (Number(offsetX) - 100) + "px";
        tooltip.style.top = (Number(offsetY) + 150) + "px";


        tooltip.innerHTML = 
        `
        <div class="text">
            <p>${text}</p>
        </div>
        <img src="" alt="${alt}">
        `;

        // Append the tooltip only when the tooltip is active
        if(data[event.target.getAttribute('data-label')].isActive){
            main.appendChild(tooltip);
        }
    });

    // Remove the tooltip from the main when the user hovers out of the link
    link.addEventListener('mouseout', event => {
        data[event.target.getAttribute('data-label')].isActive = false;
        main.removeChild(document.getElementById(event.target.getAttribute('data-label')));
    });
});