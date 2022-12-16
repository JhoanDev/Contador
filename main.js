
function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('resultado')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == null) {
        res.innerHTML = '<b>impossível contar, por favor preencha todos os dados!</b>'
    }
    else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML = null
        if (p <= 0) {
            window.alert('passo inválido, considerando passo 1')
            p = 1
        }
        if (i < f){
            for (var cont = i; cont <= f; cont += p) {
                if (cont + p <= f){
                    res.innerHTML += `${cont}, `
                }
                else{
                    res.innerHTML += `${cont}.  <b>FIM!</b>`
                }
            }
        }
        else if (i > f){
            for (var cont = i; cont >= f; cont -= p) {
                if (cont - p >= f){
                    res.innerHTML += `${cont}, `
                }
                else{
                    res.innerHTML += `${cont}.  <b>FIM!</b>`
                }
            }
        }
    }
}