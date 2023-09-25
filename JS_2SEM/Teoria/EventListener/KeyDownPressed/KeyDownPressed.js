const visor = document.querySelector('#Visor')

//% Adicionando Ouvinte de eventos para tecla precionada
//$ E exibindo qual tecla foi precionada
document.addEventListener('keypress', (event) => {
    if(event.key === "d" || event.key === "D" ){
        visor.textContent = `Tecla D Precionada`
    }else if (event.key === "a"|| event.key === "A" ){
        visor.textContent = `Tecla A Precionada`
    }else {
        visor.textContent = `Tecla ${event.key} Precionada`
    }
})