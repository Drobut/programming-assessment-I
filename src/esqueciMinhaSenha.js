
var email = ""
var password = ""
var password2 = ""

document.getElementById('buttonChange').disabled = true

$('#password').keyup(function () {
    password = $(this).val()
    buttonCheck();
});

$('#password2').keyup(function () {
    password2 = $(this).val()
    buttonCheck();
});

$('#email').keyup(function () {
    email = $(this).val()
    emailvalidation();
    if (emailvalidation() == true) {
        buttonCheck();
        console.log(email);
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
    if (password.length >= 8 && emailvalidation() != false && password.length >= 8 && password2.length >= 8) {
        $('#buttonChange').addClass('buttoncadastro2').removeClass('buttoncadastro3')
        document.getElementById('buttonChange').disabled = false
    } else {
        $('#buttonChange').addClass('buttoncadastro3').removeClass('buttoncadastro2')
        document.getElementById('buttonChange').disabled = true
        document.getElementById('campoError').textContent = "";
    }
}

document.getElementById('buttonSignIn').onclick = function navegacao() {
    window.location.href = "http://127.0.0.1:5501/usuario.html"
}

document.getElementById('buttonChange').onclick = function navegacao() {
    window.location.href = "http://127.0.0.1:5501/usuario.html"
}

document.getElementById('buttonChange').onclick = function Goin() {
    nextPage();
}

function nextPage() {

    const usersJson = localStorage.getItem("users")
    var users = JSON.parse(usersJson);

    var indexUserComparation = null
    users.forEach((user, index) => {

        if (user.email === email) {
            indexUserComparation = index
        }
    });

    if (indexUserComparation === null) {
        document.getElementById('campoError').textContent = "Email não cadastrado";
    } else if (password != password2) {
        document.getElementById('campoError').textContent = "As senhas não são iguais"

    } else {
        users[indexUserComparation].password = password2
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "http://127.0.0.1:5501/usuario.html"
    }

}