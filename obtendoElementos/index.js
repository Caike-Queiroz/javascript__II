function show(){
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    const listElements = document.getElementsByTagName('li');
    console.log(listElements);
    
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);

    
    const contactLabels = document.querySelectorAll('#contact-list > li > label');
    console.log(contactLabels);
    
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);

    // esse método só pega o primeiro elemento que bater com a query que passamos
    const firstContactLabel = document.querySelector('#contact-list > li > label'); 
    console.log(firstContactLabel);
}
