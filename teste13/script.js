function verificar(){
var idade = document.querySelector('input#inicial')
var resposta1 = document.querySelector('div#resposta')
var idade1 = Number(idade.value)

resposta1.innerHTML = `<p>Vc tem ${idade1} anos</p>`

if(idade1 >= 18 && idade1 < 67){
    resposta1.innerHTML += `<p>Já tem autorização para dirigir</p>`
}else if(idade1 >=67){
    resposta1.innerHTML += `<p>Vc está muito velho, procure um medico para q ele possa te autorizar a dirigir</p>`
}else{
    resposta1.innerHTML += `<p>Não tem idade para dirigir</p>`
}    




}
/*Tentativa de fazer um relogio

var data1 = new Date()
var sem = data1.getDay()
var dia = data1.getDate()
var ano = data1.getFullYear()
var mes = data1.getMonth()
var hora = data1.getHours()
var min = data1.getMinutes()


var seg = data1.getSeconds()


if(hora >= 0 && hora < 10){
    data.innerHTML+=`${0}${hora}`
}else if(min >= 0 && min < 10){
    data.innerHTML+=`${0}${min}`

}  */  
