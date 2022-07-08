const display = () => {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    
    const displayHeader = () => {
        div.setAttribute('class', 'header');
        div.innerHTML = '<h1>Middle Ring</h1>';
        body.appendChild(div);   
    }
    
    const displayContent = () => {
        // div.setAttribute('class', 'content');
        // div.textContent = 'hey';
        // body.appendChild(div);
        console.log('hey');
    }

    return displayHeader(), displayContent();
};

export default display;