const display = () => {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    
    const displayHeader = () => {
        let header = document.createElement('header');
        header.innerHTML = '<h1>Middle Ring</h1>';
        body.appendChild(header); 
    }
    
    const displayWelcome = () => {
        let content = div;
        content.setAttribute('class', 'content');
        body.appendChild(content);

        let contentTitle = document.createElement('h3');
        contentTitle.setAttribute('class', 'contentTitle');
        contentTitle.textContent = 'Welcome!';
        content.appendChild(contentTitle);

        let contentInfo = document.createElement('p')
        contentInfo.setAttribute('class', 'contentInfo');
        contentInfo.textContent = 
            'Middle Ring is a humble eatery located in Ba Sing Se adjacent to \
            Ba Sing Se University.';
        content.appendChild(contentInfo);
    }

    const displayFooter = () => {
        let footer = document.createElement('footer');
        footer.textContent = 'hey';
        body.appendChild(footer);
    }

    return displayHeader(), displayWelcome(), displayFooter();
};

export default display;