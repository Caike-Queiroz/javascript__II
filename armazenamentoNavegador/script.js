// Session Storage
// Armazenando valor no armazenamento de sessão
document.getElementById('sessionBtn').addEventListener('click', function (){
    const input = document.getElementById('session')
    window.sessionStorage.setItem('Info', input.value) // Key, value
    input.value = ''
})
// Lendo valor que está no armazenamento de sessão
document.getElementById('readSession').addEventListener('click', function (){
    const info = sessionStorage.getItem('Info') // key
    alert(`A informação salva é "${info}"`)
})
// Armazenando valor no armazenamento local
document.getElementById('localBtn').addEventListener('click', function (){
    const input = document.getElementById('local')
    window.localStorage.setItem('text', input.value) // Key, value
    input.value = ''
})
// Lendo valor que está no armazenamento local
document.getElementById('readLocal').addEventListener('click', function (){
    const text = localStorage.getItem('text') // Key
    alert(`O texto salvo no local storage é "${text}"`)
})

document.getElementById('cookieBtn').addEventListener('click', function (){
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023,2,03) + ';' 
    const path = 'path=/' // Esse cookie estará disponível a partir em qualquer página depois do começo deste site
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function (){
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023,1,03) + ';' 
    const path = 'path=/' // Esse cookie estará disponível a partir em qualquer página depois do começo deste site
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})