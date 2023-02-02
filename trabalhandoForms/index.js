const form = document.getElementById('orderForm');

form.addEventListener('submit', function(ev){
    ev.preventDefault() 
    // prevenirá o comportamento padrão desse evento, que no caso é o autorefresh da página  
    // após preenchermos o form

    const name = document.querySelector('input#name').value
    const address = document.getElementById('address').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]:checked').value 
    // vai retornar apenas o valor do radio que foi marcado
    const notes = document.querySelector('textarea[name="notes"]').value 
    
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += ` - ${item.value}\n`
    }) // vai pegar todos os checkboxes que estiverem marcado

    console.log({
        name,
        address,
        breadType,
        main, 
        salad,
        notes
    })

    document.getElementById('name').value = ''
    document.getElementById('address').value = ''
    document.getElementById('breadType').value = ''
    document.querySelector('textarea[name="notes"]').value = ''
    document.querySelectorAll('input[name="main"]:checked').forEach(function(item){ 
        item.checked = false 
    }) 
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){ 
        item.checked = false 
    })

    alert(`Pedido realizado!\nNome do cliente: ${name}\nEndereço de entrega: ${address}\nTipo de pão: ${breadType}\nRecheio:\n${main}\n${salad}\nObservações: ${notes}`)
})