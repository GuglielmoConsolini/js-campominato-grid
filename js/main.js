// definisco la variabile che contiene i quadrati
let grid = document.getElementById("griglia");

// ciclo che gestisce la creazione e il click dei quadrati
for ( let i = 1 ; i <= 100 ; i++ ) {

    let cella = creaQuadrato(i);
    cella.classList.add("square");
    clickQuadrato(cella,i)
    grid.append(cella);
}

// funzione per creare i quadrati nel virtual DOM
function creaQuadrato(x){

    let quadrato = document.createElement("div");
    quadrato.classList.add("square");
    return quadrato;
}
// funzione per gestire i click sui quadrati
function clickQuadrato(quadrato,x){
quadrato.addEventListener("click" , function(){
     
    quadrato.classList.toggle("evidenziato")

    if (quadrato.innerHTML === '') {
        quadrato.innerHTML = x;
    } else {
        quadrato.innerHTML = '';
    }
    console.log(quadrato , x )
})
}
