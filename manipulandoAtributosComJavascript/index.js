const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = 'Olá, mundo!'
    console.log(input.value) // pega o valor atual do input
    console.log(input.getAttribute('value')) // valor que está no HTML, o valor predefinido do input
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    //input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled) // irá sempre ser o oposto do valor atual
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log(`O valor do atributo data-something-else é: ${data}`)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else agora é: ${input.dataset.somethingElse}`)
})