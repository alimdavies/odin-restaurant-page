import { populateHome } from "./initial-page.js"
import { populateMenu } from "./menu.js"
import { populateAbout } from "./about.js"
import "./style.css"

const content = document.querySelector('#content')
const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const aboutBtn = document.querySelector('#aboutBtn')
const nav = document.querySelector('nav')

content.classList.add('center')
nav.classList.add('center')

function reset() {
    content.innerHTML = ''
}

populateHome()

homeBtn.addEventListener('click', (e) => {
    reset()
    populateHome()
})

menuBtn.addEventListener('click', (e) => {
    reset()
    populateMenu()
})

aboutBtn.addEventListener('click', (e) => {
    reset()
    populateAbout()
})