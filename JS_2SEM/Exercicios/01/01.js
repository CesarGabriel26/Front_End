//* armazenando os inputs e a dive onde o alerta estara
var Mostrar = document.querySelector('#Mostrar')
var Nome = document.querySelector('.Nome')
var Idade = document.querySelector('.Idade')
var Cidade = document.querySelector('.Cidade')
var barraProgreco = document.querySelector('.progress')
barraProgreco.style.display = "none"

var btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    Enviar()
})

function Enviar() {
    //@Resetando as classes de invalido dos inputs
    Nome.classList.remove("is-invalid")
    Idade.classList.remove("is-invalid")
    Cidade.classList.remove("is-invalid")

    //&Limpando a div onde o alerta ficara
    Mostrar.innerHTML = ""

    if (ValidarNome() && ValidarIdade() && ValidarCidade()) {
        /*
        # Caso passe por todas as verificações ele adicionara um alerta avisando que o registro foi concluido e exibira as infor-
        #Mações do usiario
    */
        Progress()
    }
}

function Progress() {
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

            Mostrar.innerHTML = `
            <div class=" alert alert-success fade show w-100 mt-3" role="alert">

                <span> Registro concluido </span> <br>
                <span> ${Nome.value} de ${Idade.value} anos, pertencente a cidade de ${Cidade.value}</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

            </div>
            `

        } else {
            //@ Incrementando valores ao progreço e atualizand o a barra
            preogreco++
            barra.style.width = `${preogreco}%`
            barra.innerHTML = `${preogreco}%`
        }
    }, 100)
}

function ValidarNome() {
    //$Verificando se o Input de nome esta vasio
    if (Nome.value == "") {
        //! Caso ele esteja vasio adicionaremos um alerta avisando o usuario para digitar o nome
        Mostrar.innerHTML = `
        <div class=" alert alert-danger fade show w-100 mt-3" role="alert">

            <span> Digite um nome </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
        `
        //! E adicionamos a clase is invalid para deixar um contorno vermelho entorno do input do nome
        Nome.classList.add("is-invalid")
        //! E retornamos inpedindo o codigo de continuar
        return false
    }

    return true
}

function ValidarIdade() {
    //$Verificando se o Input de idade esta vasio
    if (Idade.value == "") {
        //! Caso ele esteja vasio adicionaremos um alerta avisando o usuario para digitar a idade
        Mostrar.innerHTML = `
        <div class=" alert alert-danger fade show w-100 mt-3" role="alert">

            <span> Digite sua idade </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
        `
        //! E adicionamos a clase is invalid para deixar um contorno vermelho entorno do input da idade
        Idade.classList.add("is-invalid")
        //! E retornamos inpedindo o codigo de continuar
        return false
    }

    //$Agora verificamos se a idade é manor ou igual a 0 ou se ela é maior do que 100
    if (Number(Idade.value) <= 0 || Number(Idade.value) > 100) {
        //! Caso ele esteja vasio adicionaremos um alerta avisando que a idade é invalida
        Mostrar.innerHTML = `
        <div class=" alert alert-danger fade show w-100 mt-3" role="alert">

            <span> Idade invalida </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
        `
        //! E adicionamos a clase is invalid para deixar um contorno vermelho entorno do input da idade
        Idade.classList.add("is-invalid")
        //! E retornamos inpedindo o codigo de continuar
        return false
    }

    return true
}

function ValidarCidade() {
    //$Verificando se o Input da cidade esta vasio
    if (Cidade.value == "") {
        //! Caso ele esteja vasio adicionaremos um alerta avisando o usuario para escolher a cidade
        Mostrar.innerHTML = `
        <div class=" alert alert-danger fade show w-100 mt-3" role="alert">

            <span> Escolha sua Cidade </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
        `
        //! E adicionamos a clase is invalid para deixar um contorno vermelho entorno do input da cidade
        Cidade.classList.add("is-invalid")
        //! E retornamos inpedindo o codigo de continuar
        return false
    }
    return true
}