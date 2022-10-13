

// ES5 function declaration

var hamburger = document.querySelector('.hamburger-menu')
var mobileLinks = document.querySelector ('.mobile__linkholder')
var backdrop = document.querySelector('.backdrop')

function Addclass(){
hamburger.classList.toggle('show')
mobileLinks.classList.toggle('showlinks')
backdrop.classList.toggle('showlinks')
}