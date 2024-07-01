const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    addLInha();
    addTableTbody();
    messageSuccsess();
})

let linhas = ''

function addLInha (){

    const telNumber = document.getElementById('number-tel');
    const contactName = document.getElementById('name');

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
