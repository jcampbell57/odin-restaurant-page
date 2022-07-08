import displayWelcome from "./welcome";
import displayMenu from "./menu";
import './style.css'

const display = () => {
    const body = document.querySelector('body');

    // create header & name
    let header = document.createElement('header');
    header.innerHTML = '<h1>Middle Ring Restaurant</h1>';

    // create nav
    let nav = document.createElement('ul');
    nav.setAttribute('class', 'nav')

    let welcome = document.createElement('li');
    welcome.setAttribute('class', 'navItem');
    welcome.setAttribute('id', 'welcome');
    welcome.textContent = 'Welcome';
    nav.appendChild(welcome);

    let menu = document.createElement('li');
    menu.setAttribute('class', 'navItem');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    header.appendChild(nav);
    body.appendChild(header); 
    
    // nav event listeners
    welcome.addEventListener('click', displayWelcome);
    menu.addEventListener('click', displayMenu);

    // create content div
    let content = document.createElement('div');
    content.setAttribute('class', 'content');
    body.appendChild(content);


    // create footer
    let footer = document.createElement('footer');
    footer.textContent = 'hey';
    body.appendChild(footer);
};


// initialize webpage
display();
displayWelcome();


// event listener for debugging
let body = document.querySelector('body');
    body.addEventListener('click', () => {
        console.log('click')
    });