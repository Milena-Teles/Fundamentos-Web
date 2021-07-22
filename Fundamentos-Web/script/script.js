let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%";
email.style.width = "100%";

function validaNome()
{
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length <3) 
    {
        txtNome.innerHTML = 'nome invalido';
        txtNome.style.color = 'red';
    }
    else
    {
        txtNome.innerHTML = '';
        // txtNome.style.display = 'none';
        nomeOk = true;
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = 'E-mail Invalido.';
        txtEmail.style.color = 'red';
    }
    else
    {
        txtEmail.innerHTML = '';
        // txtEmail.style.display = 'none';
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Limite de 100 caractéres.';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.innerHTML = 'Limite de 100 caractéres.';
        // txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert ('Formulario enviado.');
    }
    else
    {
        alert ('Preencha os campos corretamente para enviar.');
    }
    
}

function mapaZoom() {
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '2500px';
}
