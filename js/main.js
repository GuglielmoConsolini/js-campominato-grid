let grid = document.getElementById("griglia");

for ( let i = 1 ; i <= 100 ; i++ ) {

    let quadrato = document.createElement("div");
    quadrato.classList.add("square");

    grid.append(quadrato);
}