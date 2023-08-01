function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || number(fano.value) > ano) {
        alert('[ERRO]verifique os dados e tente novamente')
    } else{
        alert('Tudo Ok')
    }
     
}
