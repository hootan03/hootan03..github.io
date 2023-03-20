const setup = () => {
    const listItems = document.getElementById('li');
    for (var i = 0; i < items.length; i++) {
        // items[i].className = 'listItem';
        items[i].setAttribute("class", "listItem");
    }

    let myPic = document.createElement('img');
    myPic.setAttribute("src", 'https://gotopia.tech/')

    document.querySelector("body").appendChild(myPic);
};
window.addEventListener("load", setup);