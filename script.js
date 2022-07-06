function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lengh == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bbh.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemh.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoh.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosoh.jpg')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bbm.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if(idade < 50){
                //adulta
                img.setAttribute('src', 'adultom.jpg')
            } else{
                //idosa
                img.setAttribute('src', 'idosam.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
