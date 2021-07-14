/*
Espaço reservado
para colocar o código
de login do site,
cujo o mesmo será
feito em outro domínio
[...]
*/

let site = window.document.getElementById('html')
let tela_celular = window.document.getElementById('tela')

let instagram = window.document.getElementById('telainsta')
let github = window.document.getElementById('telagit')
let twitter = window.document.getElementById('telatwitter')

var instagram_c = 0

function instaover() {
    site.style.cursor = 'pointer'
}
function instaout() {
    site.style.cursor = ''
}
function instaclick() {
    if (instagram_c == 0) {
        console.log('Ocorreu um clique em: Instagram [Abrir]')
        instagram.style.opacity = '100%'
        instagram_c = 1

        github.style.opacity = '0%'
        twitter.style.opacity = '0%'
    } else {
        console.log('Ocorreu um clique em: Instagram [Fechar]')
        instagram.style.opacity = '0%'
        instagram_c = 0
    }
}

var github_c = 0

function gitover() {
    site.style.cursor = 'pointer'
}
function gitout() {
    site.style.cursor = ''
}
function gitclick() {
    if (github_c == 0) {
        console.log('Ocorreu um clique em: GitHub [Abrir]')
        github.style.opacity = '100%'
        github_c = 1

        instagram.style.opacity = '0%'
        twitter.style.opacity = '0%'
    } else {
        console.log('Ocorreu um clique em: GitHub [Fechar]')
        github.style.opacity = '0%'
        github_c = 0
    }
}

var twitter_c = 0

function twitterover() {
    site.style.cursor = 'pointer'
}
function twitterout() {
    site.style.cursor = ''
}
function twitterclick() {
    if (twitter_c == 0) {
        console.log('Ocorreu um clique em Twitter [Abrir]')
        twitter.style.opacity = '100%'
        twitter_c = 1

        instagram.style.opacity = '0%'
        github.style.opacity = '0%'
    } else {
        console.log('Ocorreu um clique em Twitter [Fechar]')
        twitter.style.opacity = '0%'
        twitter_c = 0
    }
}
