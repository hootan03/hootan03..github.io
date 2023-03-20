const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("clicks", onclick);
    btnTry.addEventListener("mouseout", onmouseout);



    // eventListeners CSS
document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

document.getElementById("btnWithBullets").addEventListener("click", withBullets);

//eventListeners difference betzeen "textContent" and "innerHTML"

    document.getElementById("btnContent");addEventListener("click", changeContent)
}


// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

// onClickFunction
const onclick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}
// mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

// changeCSS
const withoutBullets =() => {
    // let i;
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) { //1ste manier
        //eerste manier
        /* listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/
        //2de manier, beter en overzichtelijker
        /* listItems[i].className = "listItemsStyleNone colorRed"; */
        //3de manier
        if (listItems[i].classList.contains("ListItemsStyleNone"))
        {
            listItems[i].classList.remove("colorWhite");
        }
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);

    }
}
const withBullets = () => {
    let i;
    let listItems=document.getElementsByTagName("li");
    for (i=0;i<listItems.length;i++) {
        //eerste manier
        /* listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/
        //2de manier, beter en overzichtelijker
        /* listItems[i].className = "listItemsStyleDisc colorWhite"; */
        //3de manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }

}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);