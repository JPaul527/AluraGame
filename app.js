let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroIntentos = 3;

function asignarTextoELemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (intentos == numeroIntentos){       
        asignarTextoELemento('p',`Has superado el maximo de intentos ${numeroIntentos} `)
        document.getElementById('reiniciar').removeAttribute('disabled')
    
    } else {

       
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoELemento('p', `Has acertado el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoELemento ('p','El número es menor')
        } else {
            asignarTextoELemento ('p','El numero secreto es mayor')
        }
        intentos ++ ;
        limpiarCaja();
    }
    return;
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '' ;
    
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado)
    console.log (listaNumerosSorteados)
    //si ya sortemos todos los numeros
    if(listaNumerosSorteados.legth == numeroMaximo){
        asignarTextoELemento ('p','Ya se sortearon todos los números posibles')
    } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()
    } else 
    listaNumerosSorteados.push(numeroGenerado);
    return(numeroGenerado)
    }
}

function condicionesIniciales(){

    asignarTextoELemento('h1','Juego del número secreto');
    asignarTextoELemento('p',`ingresa un número del 1 al ${numeroMaximo}`)
    // generar el numero aleatorio 
    numeroSecreto = generarNumeroSecreto();
    // inicializar el numero de intentos 
    intentos = 1
    // desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja()
    // indicar mensaje de intervalo de numeros 
    condicionesIniciales()
    

}

condicionesIniciales()

