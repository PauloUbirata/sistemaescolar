//DOM

const nome = document.querySelector('#nome')
const unidade1 = document.querySelector('#un1')
const unidade2 = document.querySelector('#un2')
const unidade3 = document.querySelector('#un3')
const botao = document.querySelector('#btn')
const media = document.querySelector('#media')
const result = document.querySelector('#resultado')
const alvo = document.querySelector('#alvo')

botao.addEventListener('click',calcular)

function calcular(){
    event.preventDefault()

    let mediaFinal = (Number(unidade1.value)+Number(unidade2.value)+Number(unidade3.value))/3
    media.value = mediaFinal.toFixed(2)
  
    if(mediaFinal>=7){
        result.innerHTML=`Sr(a) ${nome.value} você foi Aprovado!`
        alvo.src="images/feliz.png"
    }else if(mediaFinal >=4 && mediaFinal<7){
        result.innerHTML=`Sr(a) ${nome.value} você foi para Prova Final!`
        alvo.src="images/preocupado.png"
    }else{
        result.innerHTML=`Sr(a) ${nome.value} você foi para Recuperaação!`
        alvo.src="images/entao.png"
    }
}

