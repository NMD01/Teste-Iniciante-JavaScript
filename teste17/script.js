function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    
    var res2 = document.querySelector('div#res2')
    var res = document.querySelector('div#res')
    var pais = document.getElementsByName('paisrad')
    var sexo = document.getElementsByName('sexrad')
    var anovida = document.querySelector('input#txtano')
    var idade = ano - (Number(anovida.value))
    var nasc = ""
    var genero = ""
    var terra = ""

    var img = document.createElement('img')
    img.setAttribute('id','foto')

    var img2 = document.createElement('img')
    img2.setAttribute('id','foto')


if(anovida.value.length == 0 || (Number(anovida.value) <= 0) || (Number(anovida.value) > ano)){
    window.alert('[ERRO] Verifique os dados e tente novamente')
    document.body.style.background = '#B0E0E6'
    res.innerHTML = 'Preencha o campo acima para ver o resultado'
}


   else if(sexo[0].checked){
        var genero = 'um homem'

        if(pais[0].checked){
            var nasc = 'Brasileiro'
            var terra = 'o Brasil'
            document.body.style.background = '#008500'
            img.setAttribute('src','bra.png')
            //img2.setAttribute('src','homemp.png')
        }else if(pais[1].checked){
            var nasc = 'Russo'
            var terra = 'a Russia'
            document.body.style.background ='#0d54bc'
            img.setAttribute('src','rus.png')
        }else if(pais[2].checked){
            var nasc = 'Americano'
            var terra = 'os Estados Unidos'
            document.body.style.background ='#d22222'
            img.setAttribute('src','eua.png')
        }else if(pais[3].checked){
            var nasc = 'Japones'
            var terra = 'o Japão'
            document.body.style.background = '#bd0029'   
            img.setAttribute('src','jap.png')
        }else if(pais[4].checked){
            var nasc = 'Argentino'
            var terra = 'a Argentina'
            document.body.style.background = '#4eb1e3'
            img.setAttribute('src','arg.png')
        }else if(pais[5].checked){
            var nasc = 'Ingles'
            var terra = 'a Inglaterra'
            document.body.style.background = '#00017a'
            img.setAttribute('src','ing.png')
        }//res.innerHTML = `Vc é <strong>${genero}</strong> que nasceu n${terra}.<p>Portanto é <strong>${nasc}</strong>.</p>`

        if(idade >= 0 && idade < 13){
            res.innerHTML = `Vc é um menino com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','homemp.png')
        }else if(idade >= 13 && idade < 18){
            res.innerHTML = `Vc é um adolecente com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','homemj.png')
        }else if(idade >= 18 && idade < 60){
            res.innerHTML = `Vc é um adulto com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','homema.png')
        }else if(idade >= 60){
            res.innerHTML = `Vc é um idoso com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','homemi.png')
            //img.setAttribute('src','bandeirabrasil.png')
        }
    
    
    
    
    
    
    
    
    
    
    
    
    }else if(sexo[1].checked){
        var genero = 'uma mulher'

        if(pais[0].checked){
            var nasc = 'Brasileira'
            var terra = 'o Brasil'
            document.body.style.background = '#008500'
            img.setAttribute('src','bra.png')
        }else if(pais[1].checked){
            var nasc = 'Russa'
            var terra = 'a Russia'
            document.body.style.background ='#0d54bc'
            img.setAttribute('src','rus.png')
        }else if(pais[2].checked){
            var nasc = 'Americana'
            var terra = 'os Estados Unidos'
            document.body.style.background ='#d22222'
            img.setAttribute('src','eua.png')
        }else if(pais[3].checked){
            var nasc = 'Japonesa'
            var terra = 'o Japão'
            document.body.style.background = '#bd0029'
            img.setAttribute('src','jap.png')
        }else if(pais[4].checked){
            var nasc = 'Argentina'
            var terra = 'a Argentina'
            document.body.style.background = '#4eb1e3'
            img.setAttribute('src','arg.png')
        }else if(pais[5].checked){
            var nasc = 'Inglesa'
            var terra = 'a Inglaterra'
            document.body.style.background = '#00017a'
            img.setAttribute('src','ing.png')
        }//res.innerHTML = `Vc é <strong>${genero}</strong> que nasceu n${terra}.<p>Portanto é <strong>${nasc}</strong>.</p>`

        if(idade >= 0 && idade < 13){
            res.innerHTML = `Vc é uma menina com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','mulherp.png')
        }else if(idade >= 13 && idade < 18){
            res.innerHTML = `Vc é uma adolecente com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','mulherj.png')
        }else if(idade >= 18 && idade < 60){
            res.innerHTML = `Vc é uma adulta com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','mulhera.png')
        }else if(idade >= 60){
            res.innerHTML = `Vc é uma idosa com ${idade} anos de idade que nasceu n${terra}<p>Portanto é <strong>${nasc}</strong>.</p>`
            img2.setAttribute('src','mulheri.png')

        }



        









    }//fem

    
































res.appendChild(img)
res.appendChild(img2)
}





