import displayWelcome from "./welcome";
import displayMenu from "./menu";
import displayResources from "./resources"
import './style.css'

const display = () => {
    const body = document.querySelector('body');

    // create header & name
    const header = document.createElement('header');
    header.innerHTML = '<h1>Middle Ring Restaurant</h1>';

    // create nav
    const nav = document.createElement('ul');
    nav.setAttribute('class', 'nav')

    const welcome = document.createElement('li');
    welcome.setAttribute('class', 'navItem');
    welcome.setAttribute('id', 'welcome');
    welcome.textContent = 'Welcome';
    nav.appendChild(welcome);

    const menu = document.createElement('li');
    menu.setAttribute('class', 'navItem');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    const resources = document.createElement('li');
    resources.setAttribute('class', 'navItem');
    resources.setAttribute('id', 'resources');
    resources.textContent = 'Resources';
    nav.appendChild(resources);

    header.appendChild(nav);
    body.appendChild(header); 
    
    // nav event listeners
    welcome.addEventListener('click', displayWelcome);
    menu.addEventListener('click', displayMenu);
    resources.addEventListener('click', displayResources);

    // create content div
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    body.appendChild(content);


    // create footer
    const footer = document.createElement('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`;
  
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/jcampbell57';
    githubLink.target = '_blank';
  
    const githubIcon = document.createElement('img');
    githubIcon.src = '../src/assets/GitHub-32px.png';
    githubIcon.setAttribute('class', 'github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    body.appendChild(footer);
};


// initialize webpage
const initializePage = () => {
    display();
    displayWelcome();
}


// event listener for debugging
// let body = document.querySelector('body');
//     body.addEventListener('click', () => {
//         console.log('click')
//     });


export default initializePage;