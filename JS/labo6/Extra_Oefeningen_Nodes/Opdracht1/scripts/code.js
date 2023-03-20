const setup = () => {
    // document.querySelectorAll("p")[0].innerHTML = "Good Job!";
    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let textNode = document.createTextNode("Good Job");
    par.appendChild(textNode)
}
window.addEventListener("load", setup);