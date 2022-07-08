const displayMenu = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Menu!
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Menu';
    content.appendChild(contentTitle);

    // display menu items
    let contentInfo = document.createElement('ul')
    contentInfo.setAttribute('class', 'contentInfo');
    contentInfo.setAttribute('id', 'menuList');
    contentInfo.innerHTML = 
        '<li>Drinks\
            <ul><li>Water</li>\
            <li>Tea<br>\
            (ginseng, jasmine, green, ginger, cucumber, lychee, or oolong)</li>\
            <li>Milk</li>\
            <li>Earthbender mudslide</li>\
            <li>Kale smoothie</li></ul>\
        </li>\
        <li>Food\
            <ul><li>Unbelievably Complex Fried Appetizer Sampler Platter</li>\
            <li>Deep-fried pickled radishes</li>\
            <li>Fried dough</li>\
            <li>Pan-fried noodles</li>\
            <li>Spicy pickled kelp</li>\
            <li>Rice</li>\
            <li>Jook (Rice Porridge)</li>\
            <li>Noodles</li>\
            <li>Meatballs</li>\
            <li>Crab puffs</li>\
            <li>Seared Wild Kyoshi Elephant Koi</li></ul>\
        </li>\
        <li>Dessert\
            <ul><li>Sugar cookies</li>\
            <li>Egg Custard Tart</li>\
            <li>Moon Peach Cakes</li></ul>\
        </li>';
    content.appendChild(contentInfo);
}

export default displayMenu;