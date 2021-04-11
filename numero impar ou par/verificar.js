function verificar(){

    let n = document.querySelector('input#txtnum')
    let res = document.querySelector('div#res')

    let n1 = Number(n.value)

    if(n.value.length == 0){
        window.alert('[ERRO]Impossivel verificar sem o numero')
    }else if(n1 == 0){
    res.innerHTML = `<strong>${n1}</strong> tem todos os atributos de um numero <strong>Par</strong>.<p><strong>PORTANTO É PAR</strong>.<p> No entanto alguns o consideram um numero <strong>neutro</strong>`
}else if(n1 % 2 == 0){
        res.innerHTML = `<strong>${n1}</strong> é um numero <strong>PAR</strong>`
    }else{
        res.innerHTML = `<strong>${n1}</strong> é um numero <strong>ÍMPAR</strong>`
    }

    
    

    //res.innerHTML = `${n1}`


}
