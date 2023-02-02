function useLightTheme(){
    console.log('Função 1 disparada')
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme(){
    console.log('Função 2 disparada')
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme(){
    console.log('Função 3 disparada')
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
// a função disparada por esse dois primeiros botões são dois estilos inline
document.getElementById('switchBtn').addEventListener('click', switchTheme)