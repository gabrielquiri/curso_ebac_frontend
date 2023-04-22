const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA , ValB) {
    return ValB > ValA; 
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valA = parseFloat(document.getElementById('valor-a').value);
    let valB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = 'formulario enviado com sucesso : <b>parabens o ValorB é maior</b>';
    const containermessagesucess = document.querySelector('.sucess-message');

    formValid = numbervalid(valA , valB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valA.value = '';
        valB.value = '';
    }else {
        alert("errado o ValorA não pode ser maior que o ValorB por favor tente novemente")
    }
 
})
