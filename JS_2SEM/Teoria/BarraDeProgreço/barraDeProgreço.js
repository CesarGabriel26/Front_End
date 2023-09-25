//@ Declarar uma variavel e atribuir o valor E escondendo a barra de progreço
var barraProgreco = document.querySelector('.progress')
barraProgreco.style.display = "none"

function animarBarraDeProgreco() {
    var preogreco = 0

    var barra = document.querySelector('.progress-bar')

    //%Resetando barra de progreço e a exibindo
    barra.style.width = `${preogreco}%`
    barraProgreco.style.display = "block"

    //# Edifindo intervalo para a barra de progreço
    var intervalo = setInterval(function () {
        if (preogreco == 100) {
            //& Limpando a variavel intervalo
            clearInterval(intervalo);
            //* escondendo barra de progreço
            barraProgreco.style.display = "none"

            //! Exibindo alert
            document.querySelector('#Mostrar').innerHTML =
                `<div class=" alert alert-success fade show" role="alert">
            
                <span> Olá, Bem vindo ao sesi</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            
            </div>`
        } else {
            //@ Incrementando valores ao progreço e atualizand o a barra
            preogreco++
            barra.style.width = `${preogreco}%`
            barra.innerHTML = `${preogreco}%`
        }
    }, 100)
}