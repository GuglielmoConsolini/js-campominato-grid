let grid = document.getElementById("griglia");

for ( let i = 1 ; i <= 100 ; i++ ) {

    let cella = creaQuadrato(i);
    cella.classList.add("square");

    grid.append(cella);
}

function creaQuadrato(x){

    let quadrato = document.createElement("div");
    quadrato.classList.add("square");
    
    quadrato.addEventListener("click" , function(){
     
        quadrato.classList.toggle("evidenziato")

        if (quadrato.innerHTML === '') {
            quadrato.innerHTML = x;
        } else {
            quadrato.innerHTML = '';
        }
        console.log(quadrato , x )
    })

    return quadrato;
}