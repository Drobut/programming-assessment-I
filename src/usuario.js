const usersJson = localStorage.getItem("users")
var users = JSON.parse(usersJson);

var password = ""
var email = ""

document.getElementById('botaosignin').disabled = true

$('#password').keyup(function () {
    password = $(this).val()
    buttonCheck();
});

$('#email').keyup(function () {
    email = $(this).val()
    emailvalidation();
    if (emailvalidation() == true) {
        buttonCheck();
    } else {
        buttonCheck();
    }
});

function emailvalidation() {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        email.focus;
        return false
    } else {
        return true
    }
}

function buttonCheck() {
    if (password.length >= 8 && emailvalidation() != false) {
        $('#botaosignin').addClass('buttoncadastro2').removeClass('buttoncadastro3')
        document.getElementById('botaosignin').disabled = false
    } else {
        $('#botaosignin').addClass('buttoncadastro3').removeClass('buttoncadastro2')
        document.getElementById('botaosignin').disabled = true
        document.getElementById('campoError').textContent = "";
    }
}

document.getElementById('buttonSignUp').onclick = function navegacao() {
    window.location.href = "http://127.0.0.1:5501/index.html"
}

document.getElementById('buttonSenha').onclick = function navegacao() {
    window.location.href = "http://127.0.0.1:5501/esqueciMinhaSenha.html"
}

document.getElementById('botaosignin').onclick = () => {
    nextPage();
}

function nextPage() {

    var indexUserLogged = null

    users.forEach((user, index) => {
        if (user.email === email && user.password === password) {
            indexUserLogged = index
        }
    });

    if (indexUserLogged === null) {
        document.getElementById('campoError').textContent = "Senha ou email inválido"
    } else {
        localStorage.setItem('indexUserLogged', indexUserLogged)
        window.location.href = "http://127.0.0.1:5501/recados.html"
    }
}