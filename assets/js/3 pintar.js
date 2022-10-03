
ele = document.getElementById("ele1");

pintar()

ele.addEventListener("click", () => pintar('yellow'));

//funcion para resetear color a default

ele.addEventListener("dblclick", () => pintar());

//funcion pintar

function pintar(color ='green'){
    ele.style.backgroundColor = color;
}












