if (typeof login_aprovado == undefined) {
    localStorage.setItem("acesso", false)
} else {
    localStorage.setItem("acesso", true)
}
let acesso = localStorage.getItem("acesso")

let email = window.document.getElementById('email')
let senha = window.document.getElementById('senha')

email.value = email.value
senha.value = senha.value

let email_inserido = email.value
let senha_inserida = senha.value

let login_btn = window.document.getElementById('login')
let register_btn = window.document.getElementById('register')

function login_enter() {
    login_btn.style.backgroundColor = '#006aff'
}
function login_leave() {
    login_btn.style.backgroundColor = ''
}

function login() {
    let email_verify = localStorage.getItem("email")
    let senha_verify = localStorage.getItem("senha")

    if (acesso == "false") {
        window.alert('[ERRO] => Você não está registrado!')
        console.log(`Login retornou: ${acesso}, Email: ${email.value}, senha: ${senha.value}`)
    } else if (typeof email_verify != undefined && typeof senha_verify != undefined) {
        if (email.value == email_verify && senha.value == senha_verify) {
            window.location.href = 'index.html'
            console.log(`Login retornou: ${acesso}`)
        } else {
            if (senha.value.length < 1 || email.value.length < 1) {
                window.alert('[ERRO] => Complete os espaços vazios')
            } else {
                window.alert('[ERRO] => Email ou senha incorretos')
            }
        }
    }
}

function register_enter() {
    register_btn.style.backgroundColor = '#389c3d'
}
function register_leave() {
    register_btn.style.backgroundColor = ''
}

function register() {

    var email_verify = localStorage.getItem("email")
    var senha_verify = localStorage.getItem("senha")

    if (acesso == "true") {
        if (email.value == email_verify && senha.value == senha_verify) {
            window.alert('Você já está registrado... Redirecionando para a página...')
            window.location.href = 'index.html'
        } else {
            if (senha.value.length < 1 || email.value.length < 1) {
                window.alert('[ERRO] => Complete os espaços vazios')
            } else {
                window.alert('[ERRO] => Você já está registrado, mas o Email ou Senha estão incorretos!')
            }
        }
    } else {
        console.log(email_verify)
        localStorage.setItem("email", email.value)
        localStorage.setItem("senha", senha.value)

        var email_verify = localStorage.getItem("email")
        var senha_verify = localStorage.getItem("senha")

        localStorage.setItem("login", 'aprovado')
        var login_aprovado = localStorage.getItem("login")

        console.log(`Registrado com sucesso!\nEmail: ${email.value}\nPassword: ${senha.value}\nSessionEmail: ${email_verify}\nSessionPass: ${senha_verify}\nAcess: ${acesso}`)
    }
}