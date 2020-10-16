var num = window.document.getElementById('txtnum')
var tab = window.document.getElementById('selop')
let res = document.querySelector('div#res')

let valores = []
let item
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}   
    
function analisa() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
    
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione os valores antes de finalizar!')
    }else{
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        let tot = valores.length
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p> `
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p> `
        var inputs = document.createElement('input')
        inputs.setAttribute('type', 'button')
        inputs.setAttribute('value', 'Limpar')
        inputs.setAttribute('onclick', 'limpar()')
        res.appendChild(inputs)
        
    }
}   
function limpar(){
    res.innerHTML = ''
    while(tab.length > 0){
        tab.remove(tab.length-1)
    }
    valores = []
}


        


            
     