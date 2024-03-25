const form = document.getElementById('form-contato')
let salvar = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    salvaContato()
    atualizaLista()
})

function salvaContato(){
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    let salvar2 = `<tr>`
    salvar2 += `<td>${inputNome.value}</td>`
    salvar2 += `<td>${inputTelefone.value}</td>`
    salvar2 += `</tr>`

    salvar += salvar2

    inputNome.value = ''
    inputTelefone.value = ''
}
function atualizaLista(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = salvar
}