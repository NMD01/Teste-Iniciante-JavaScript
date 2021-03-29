function verificar() {
    var data = new Date
    var ano = data.getFullYear()

    var nasc = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    var sex = document.getElementsByName('radsex')
    var genero = ''

    var idade = ano - Number(nasc.value)

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    //res.innerHTML = `vc tem ${idade} anos`

    if(nasc.value.length == 0 || (Number(nasc.value) > ano) || (Number(nasc.value) <= 0)){
        window.alert('[ERRO] Verifique os dados e tente novamente')}
    
    
        else if(sex[0].checked){
            //var genero = 'homem'

        if(idade >= 0 && idade < 11){
            
            var genero = 'um menino'
            img.setAttribute('src', 'homemp.png')
        }else if(idade >=11 && idade < 22 ){            
            var genero = 'um jovem Homem'
            img.setAttribute('src', 'homemj.png')
        }else if(idade >=22 && idade < 60){
            var genero = 'Homem Adulto'
            img.setAttribute('src', 'homema.png')
        }else if(idade >= 60){
            var genero = 'Homem idoso'
            img.setAttribute('src', 'homemi.png')
        
        }res.innerHTML= `Vc é ${genero} de ${idade} anos de idade`
        
        
        
        
       }else if(sex[1].checked){
           //var genero = 'mulher'

        if(idade >=0 && idade <= 10){
            var genero = 'uma menina'
            img.setAttribute('src', 'mulherp.png')
        }else if(idade > 10 && idade < 22){
            var genero = 'uma jovem Mulher'
            img.setAttribute('src', 'mulherj.png')
        }else if(idade >= 22 && idade < 60){
            var genero = 'uma Mulher Adulta'
            img.setAttribute('src', 'munhera.png')
        }else if(idade > 60){
            var genero = 'uma Mulher Idosa'
            img.setAttribute('src', 'mulheri.png')
        }
            
        res.innerHTML= `Vc é ${genero} de ${idade} anos de idade`
    
    
    
    
    
    
    }
        
//res.style.textAlign = 'center'        

res.appendChild(img)
        }
        
    
    







