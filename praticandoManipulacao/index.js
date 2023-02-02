let contador = 0;
function addContact() {
    contador++;
    const contactSection = document.getElementById('contacts-list');

    const h3 = document.createElement('h3');
    h3.innerText = 'Contato';

    const ul = document.createElement('ul');

    // Campo NOME
    const nameLi = document.createElement('li');
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Nome completo: ';
    nameLabel.htmlFor = `fullname${contador}`;
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = `fullname`;
    nameInput.id = `fullname${contador}`;
    nameLi.appendChild(nameLabel);
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br')); // br - break row

    // Campo TELEFONE
    const phoneLi = document.createElement('li');
    const phoneLabel = document.createElement('label');
    phoneLabel.innerText = 'Telefone: ';
    phoneLabel.htmlFor = `phone${contador}`;
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.id = `phone${contador}`;
    phoneLi.appendChild(phoneLabel);
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br')); // br - break row

    // Campo ENDEREÇO
    const addressLi = document.createElement('li');
    const addressLabel = document.createElement('label');
    addressLabel.innerText = 'Endereço: ';
    addressLabel.htmlFor = `address${contador}`;
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.id = `address${contador}`;
    addressLi.appendChild(addressLabel);
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br')); // br - break row

    contactSection.append(h3, ul);
}

function removeLastContact() {
    const contactSection = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');


    if (titles.length === 0 && contacts.length === 0) {
        alert('There are no longer any contacts');
    } else {
        contactSection.removeChild(titles[titles.length - 1]);
        contactSection.removeChild(contacts[contacts.length - 1]);
    }
}