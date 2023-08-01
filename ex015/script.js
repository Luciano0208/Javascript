function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO]verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade>= 0 && idade < 10) {
                // criança 
                img.setAttribute('src', 'baby-menino.png')
            } else if (idade < 21){
                    //Adolecente
                    img.setAttribute('src', 'menino-adolecente.png')
                    } else if (idade < 50){
                    //Adulto
                img.setAttribute('src', 'homem-adulto.png')
                    } else {
                        //Idoso
                    img.setAttribute('src', 'idoso-homem.png')
                    } }
                    else if(fsex [1].checked) {
            genero = 'Mulher'
            if (idade>= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'baby-menina.png')
            } else if (idade < 21){
                    //Adolecente
                    img.setAttribute('src', 'menina-adolecente.png')
                    } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'mulher-adulto.png')
                    } else {
                        //Idoso
                        img.setAttribute('src', 'idoso-mulher.png')
                    } 
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
     
}
