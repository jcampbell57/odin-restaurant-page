import custImage from './assets/customer.png';

const displayResources = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Resources
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Resources';
    content.appendChild(contentTitle);

    let contentInfo = document.createElement('ul')
    contentInfo.setAttribute('class', 'contentInfo');
    content.appendChild(contentInfo);

    let resource1 = document.createElement('li');
    let resource1link = document.createElement('a');
    resource1link.setAttribute('class', 'contentInfo');
    resource1link.textContent = 'Our wiki';
    resource1link.href = 'https://avatar.fandom.com/wiki/Middle_Ring_restaurant';
    resource1link.target = '_blank';
    resource1.appendChild(resource1link);
    contentInfo.appendChild(resource1);

    let resource2 = document.createElement('li');
    let resource2link = document.createElement('a')
    resource2link.setAttribute('class', 'contentInfo');
    resource2link.textContent = 'Earth Kingdom cuisine';
    resource2link.href = 'https://avatar.fandom.com/wiki/Cuisine_in_the_World_of_Avatar#Earth_Kingdom'
    resource2link.target = '_blank';
    resource2.appendChild(resource2link);
    contentInfo.appendChild(resource2);

    let resource3 = document.createElement('li');
    let resource3link = document.createElement('a')
    resource3link.setAttribute('class', 'contentInfo');
    resource3link.textContent = 'Ba Sing Se wiki';
    resource3link.href = 'https://avatar.fandom.com/wiki/Ba_Sing_Se#Middle_Ring_restaurant'
    resource3link.target = '_blank';
    resource3.appendChild(resource3link);
    contentInfo.appendChild(resource3);

    // display images
    let customerImage = document.createElement('img')
    customerImage.src = custImage;
    content.appendChild(customerImage);
}

export default displayResources;