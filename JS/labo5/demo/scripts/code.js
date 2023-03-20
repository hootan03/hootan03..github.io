const setup = () => {
}

document.getElementById("imgPhoto")
    .addEventListener("mouseover", change)
}

const change =() => {

    document.getElementById("imgPhoto").src =".images/cat.jpg";
    document.getElementById("imgPhoto").alt ="cat";
    document.getElementById("txtText").innerHTML = "School of cats";

}
window.addEventListener("load", setup);