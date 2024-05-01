// dichiaro variabile per il pulsante di inizio gioco
let pulsante = document.querySelector("button")

// codice per impedire la creazione di altre griglie(mi sono aiutato con la documentazione su internet)
let giocoAvviato = false
// click per iniziare il gioco
pulsante.addEventListener("click",function(){
    if(!giocoAvviato){
        avviaGioco()
        giocoAvviato = true
    } 
})
// funzione di inizio gioco
function avviaGioco(){

    let grid = document.getElementById("griglia");

    pulsante.removeEventListener("click" , avviaGioco)

    for ( let i = 1 ; i <= 100 ; i++ ) {

        let cella = creaQuadrato(i);
        cella.classList.add("square");
        clickQuadrato(cella,i)
        grid.append(cella);
    }
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








