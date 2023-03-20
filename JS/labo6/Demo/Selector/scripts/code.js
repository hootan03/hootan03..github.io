const setup = () => {
    // let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");

  /*  for(let i=0; i<lstPar.length; i++) {
        lstPar[i].addEventListener("click", change);
    }*/
}

const change = (e)=> {
    e.target.className = "colorPar";
}

const changeDiv = (e)=> {
    e.target.className = "colorPar";
}

window.addEventListener("load", setup);