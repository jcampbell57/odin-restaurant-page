const displayWelcome = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Welcome!
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Welcome!';
    content.appendChild(contentTitle);

    //display paragraph
    let contentInfo = document.createElement('p')
    contentInfo.setAttribute('class', 'contentInfo');
    contentInfo.textContent = 
        'Middle Ring Restaurant is a humble eatery located in the Middle Ring of \
        Ba Sing Se adjacent to Ba Sing Se University.';
    content.appendChild(contentInfo);

    let contentInfo2 = document.createElement('p')
    contentInfo2.setAttribute('class', 'contentInfo');
    contentInfo2.textContent = 
        'Please enjoy our menu of traditional Earth Kingdom cuisine!';
    content.appendChild(contentInfo2);

    // display images
    let exteriorImage = document.createElement('img')
    exteriorImage.src = '../src/assets/exterior.webp';
    content.appendChild(exteriorImage);

    let interiorImage = document.createElement('img')
    interiorImage.src = '../src/assets/interior.jpg';
    content.appendChild(interiorImage);

}

export default displayWelcome;