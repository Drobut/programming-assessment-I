const usersJson = localStorage.getItem("users")
var users = JSON.parse(usersJson);
if (!users) users = []

var password = ""
var nomeSobrenome = ""
var email = ""

document.getElementById('botaosignup').disabled = true

$('#password').keyup(function () {
    password = $(this).val()
    buttonCheck();
});

$('#nomeSobrenome').keyup(function () {
    nomeSobrenome = $(this).val()
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
    if (password.length >= 8 && nomeSobrenome.length > 4 && emailvalidation() != false) {
        $('#botaosignup').addClass('buttoncadastro2').removeClass('buttoncadastro3')
        document.getElementById('botaosignup').disabled = false
    } else {
        $('#botaosignup').addClass('buttoncadastro3').removeClass('buttoncadastro2')
        document.getElementById('botaosignup').disabled = true
        document.getElementById('campoError').textContent = "";
    }
}

document.getElementById('buttonSignIn').onclick = function navegacao() {
    window.location.href = "http://127.0.0.1:5501/usuario.html"
}

document.getElementById('botaosignup').onclick = () => {

    var indexUserComparation = null

    users.forEach((user, index) => {
        if (user.email === email) {
            indexUserComparation = index
        }
    });

    if (indexUserComparation != null) {
        document.getElementById('campoError').textContent = "Email já cadastrado";
    } else {

        const user = {
            password: password,
            nomeSobrenome: nomeSobrenome,
            email: email,
            cards: []

        }

        users.push(user)

        localStorage.setItem("users", JSON.stringify(users))
        nextPage();

    }
}

function nextPage() {
    window.location.href = "http://127.0.0.1:5501/usuario.html"
}