let BotaoAumenta = document.querySelector('#BotaoAumenta')
let BotaoDiminui = document.querySelector('#BotaoDiminui')
let BotaoZera = document.querySelector('#BotaoZera')
let Contador = document.querySelector('#Contador')
let Alerta = document.querySelector('#Alerta')

var Cont = 0

BotaoAumenta.addEventListener('click',()=>{
    Cont++
    
    Contador.textContent = Cont
    Alerta.innerHTML = ""
})

BotaoDiminui.addEventListener('click',()=>{
    if (Cont > 0) {
        Cont--
    }else {
        Alerta.innerHTML =
        `<div class="mt-3 alert alert-danger fade show" role="alert">
    
            <span>Numeros abaixo de ZERO não são mitidos</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    
        </div>`
    }
    Contador.textContent = Cont
})

BotaoZera.addEventListener('click',()=>{
    Cont = 0
    Contador.textContent = Cont
    Alerta.innerHTML = ""
})