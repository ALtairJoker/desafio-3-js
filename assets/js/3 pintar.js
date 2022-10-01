
ele = document.getElementById("ele1");

pintar()

ele.addEventListener("click", () => pintar('yellow'));

ele.addEventListener("dblclick", () => pintar());

function pintar(color ='green'){
    ele.style.backgroundColor = color;
}












