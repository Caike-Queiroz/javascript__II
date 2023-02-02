let contador = 0;
function addInput() {
    contador++
    const ul = document.getElementById('inputs'); // #inputs é onde será adicionado os inputs gerados pela função

    const newLi = document.createElement('li'); // cria o nó 'li'
    
    newLi.className = 'list-item'; // adiciona a classe 'list-item' no nó 'li' 
    // o javascript usa className, pois class é uma palavra reservada
    newLi.innerText = `${contador}° input: `; // adiciona texto ao nó 'li'

    const newInput = document.createElement('input'); // cria o nó 'input'
    newInput.type = 'text'; // adiciona o type 'text' no nó 'input'
    newInput.name = `input${contador}`; // adiciona o name 'input${contador}' no nó 'input'


    newLi.appendChild(newInput);
    ul.appendChild(newLi);
}