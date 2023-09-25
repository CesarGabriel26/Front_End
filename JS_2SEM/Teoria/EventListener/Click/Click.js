let Botao = document.querySelector("#Botao")
var cont = 0
Botao.addEventListener('click',()=>{
    cont++
    document.querySelector("#Contador").textContent = cont
})