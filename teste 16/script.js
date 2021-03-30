function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()

    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var nasc = document.getElementById('txtano')
    var sexo = document.getElementsByName('sexrad')
 
    var idade = ano -(Number(nasc.value))
    var genero = ''
    var tempo = 67 - idade
    var tempo2 = 18 - idade
    var tempo3 = 16 - idade

    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(nasc.value.length == 0 || (Number(nasc.value) > ano) || (Number(nasc.value) <= 0)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else if(sexo[0].checked){
        
        


        
        if(idade >=0 && idade <= 10){
            var genero = 'um menino (Masculino)'
            img.setAttribute('src', 'homemp.png')
        }else if(idade >=11 && idade <= 21){
            var genero = 'um Jovem (Masculino)'
            img.setAttribute('src','homemj.png')
        }else if(idade >= 22 && idade < 60){
            var genero = 'um Adulto (Masculino)'
            img.setAttribute('src','homema.png')
        }else if(idade >= 60){
            var genero = 'um Idoso (Masculino)'
            img.setAttribute('src','homemi.png')
        }res.innerHTML = `Vc é ${genero} com ${idade} de idade`


        if(idade >= 18 && idade < 67){
            res2.innerHTML = `Voto obrigatorio. <p>Quando vc tiver 67 anos tera direito ao voto opcional.<p/> <p>Falta ${tempo} anos para vc ter 67 anos</p>`
            }else if (idade >= 16 && idade < 18){
            res2.innerHTML = `Voto opicional.<p>Quando vc tiver 18 anos o voto passa a ser obrigatorio<p/><p>Falta ${tempo2} anos para o voto obrigatorio <p/>`
        }else if (idade >= 67){
            res2.innerHTML = 'Voto opcional. <p> Vc já tem mais de 67 não é necessario ir votar <p/>'
        }else{
            res2.innerHTML = `Não vota. <p>Quando vc tiver 16 anos tera direito ao voto opicional e com 18 anos o voto passa a ser obrigatorio<p/><p>Falta ${tempo3} anos para o voto opicional e ${tempo2} para o voto obrigatorio <p/>`
        }







    }else if(sexo[1].checked){
        if(idade >= 0 && idade <= 10){
            var genero = 'uma Menina (Feminino)'
            img.setAttribute('src', 'mulherp.png')
        }else if(idade >= 11 && idade <= 21){
            var genero = 'uma Jovem (Feminino)'
            img.setAttribute('src','mulherj.png')
        }else if(idade >= 22 && idade < 60){
            var genero = 'uma Adulta (Feminino)'
            img.setAttribute('src','munhera.png')
        }else if(idade >= 60){
            var genero = 'uma Idosa (Feminino)'
            img.setAttribute('src','mulheri.png')
        }res.innerHTML = `Vc é ${genero} com ${idade} de idade`



if(idade >= 18 && idade < 67){
    res2.innerHTML = `Voto obrigatorio. <p>Quando vc tiver 67 anos tera direito ao voto opcional.<p/> <p>Falta ${tempo} anos para vc ter 67 anos</p>`
    }else if (idade >= 16 && idade < 18){
    res2.innerHTML = `Voto opicional.<p>Quando vc tiver 18 anos o voto passa a ser obrigatorio<p/><p>Falta ${tempo2} anos para o voto obrigatorio <p/>`
}else if (idade >= 67){
    res2.innerHTML = 'Voto opcional. <p> Vc já tem mais de 67 não é necessario ir votar <p/>'
}else{
    res2.innerHTML = `Não vota. <p>Quando vc tiver 16 anos tera direito ao voto opicional e com 18 anos o voto passa a ser obrigatorio<p/><p>Falta ${tempo3} anos para o voto opicional e ${tempo2} para o voto obrigatorio <p/>`
}





    }

res.appendChild(img)














































}