const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    addLInha();
    addTableTbody();
    messageSuccsess();
})

let linhas = ''
let telNumber = document.getElementById('number-tel');
let contactName = document.getElementById('name');

function addLInha (){

    let linha = '<tr>';
        linha += `<td>${telNumber.value}</td>`;
        linha += `<td>${contactName.value}</td>`;

    linhas   += linha;

    telNumber.value = '';
    contactName.value = '';

    return linhas;
}
    
function addTableTbody (){
    
    const addTboddy = document.querySelector('tbody');
    addTboddy.innerHTML = linhas;

    return addTboddy;
}

function messageSuccsess (){

    const addSpan = document.querySelector('span');
    const message ='<p class="confirm">Adicionado com Sucesso!!</p>';
    addSpan.innerHTML = message;

    return message;
} 



telNumber.addEventListener('focus', function(){
    const hideSpan = document.querySelector('span');
    const message = ''

    hideSpan.innerHTML = message;
});

