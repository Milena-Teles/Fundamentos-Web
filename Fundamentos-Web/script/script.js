let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome()
{
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.lengt < 3)
    {
        txt.innerHTML = 'nome invalido'
        txt.style.color = 'red'
    }
    else
    {
        nomeOk = true
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = 'E-mail Invalido.'
    }
    else
    {
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.lengt >= 100) {
        txtAssunto.innerHTML = 'Limite de 100 caracters.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert ('Formulario enviado.')
    }
    else
    {
        alert ('Preencha os campos corretamente para enviar.')
    }
    
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '2500px'
}
