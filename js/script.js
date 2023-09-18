const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const empate = 0;
const victoria = 1;
const derrota = 2;


const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

const resultadoTexto = document.getElementById("resultado-texto")

const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedra.addEventListener("click", () => {
    play(PIEDRA);

});
papel.addEventListener("click", () => {
    play(PAPEL);

});
tijera.addEventListener("click", () => {
    play(TIJERA);

});

function play(option) {

    userImg.src = "img/"+option+".png";

    resultadoTexto.innerHTML = "Pensando...";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/"+machineOption+".png"


    }, 150 );

    setTimeout(function(){

        clearInterval(interval);

    const machineOption = calcMachineOption();
    const resultado = calcularResultado(option, machineOption);
    
    machineImg.src = "img/"+machineOption+".png"

    switch (resultado) {

        case empate:
            resultadoTexto.innerHTML = "EMPATADO!";
            break;
        case victoria:
            resultadoTexto.innerHTML = "Has GANADO!";
            break;
        case derrota:
            resultadoTexto.innerHTML = "Has PERDIDO!";
            break;


    } }, 2500 );

    
};

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
};

function calcularResultado(option, machineOption) {

    if (option === machineOption) {
        return empate;
    }
    else if (option === PIEDRA) {
        if (machineOption === PAPEL) return derrota;
        if (machineOption === TIJERA) return victoria;

    } else if (option === PAPEL) {
        if (machineOption === TIJERA) return derrota;
        if (machineOption === PIEDRA) return victoria;

    } else if (option === TIJERA) {
        if (machineOption === PIEDRA) return derrota;
        if (machineOption === PAPEL) return victoria;

    };
}