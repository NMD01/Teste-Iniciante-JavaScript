function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()

    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var nasc = document.getElementById('txtano')
    var sexo = document.getElementsByName('sexrad')

    var idade = ano -(Number(nasc.value))
    var genero = ''

    if(nasc.value.length == 0 || (Number(nasc.value) > ano) || (Number(nasc.value) <= 0)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else if(sexo[0].checked){
        if(idade >=0 && idade <= 10){
            var genero = 'um menino (Masculino)'
        }else if(idade >=11 && idade <= 21){
            var genero = 'um Jovem (Masculino)'
        }else if(idade >= 22 && idade < 60){
            var genero = 'um Adulto (Masculino)'
        }else if(idade >= 60){
            var genero = 'um Idoso (Masculino)'
        }res.innerHTML = `Vc é ${genero} com ${idade} de idade`









    }else if(sexo[1].checked){
        if(idade >= 0 && idade <= 10){
            var genero = 'uma Menina (Feminino)'
        }else if(idade >= 11 && idade <= 21){
            var genero = 'uma Jovem (Feminino)'
        }else if(idade >= 22 && idade < 60){
            var genero = 'uma Adulta (Feminino)'
        }else if(idade >= 60){
            var genero = 'uma Idosa (Feminino)'
        }res.innerHTML = `Vc é ${genero} com ${idade} de idade`








    }
















































}