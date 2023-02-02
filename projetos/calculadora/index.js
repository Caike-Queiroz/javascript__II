const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev) {
    // Keydown é quando vc aperta uma tecla
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key // input.value = input.value + ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    // eval = avaliar, logo vai pegar a string, transformar em código, e executar esse código
    resultInput.classList.remove('error')
    resultInput.value = result
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9') // background-color
        root.style.setProperty('--border-color', '#aaa') // border-color
        root.style.setProperty('--font-color', '#212529') // font-color
        root.style.setProperty('--primary-color', '#26834a') // primary-color
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529') // background-color
        root.style.setProperty('--border-color', '#666') // border-color
        root.style.setProperty('--font-color', '#f1f5f9') // font-color
        root.style.setProperty('--primary-color', '#4dff91') // primary-color
        main.dataset.theme = 'dark'
    }
})