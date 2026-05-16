const content = document.querySelector('#content')

export function populateMenu() {
    const title = document.createElement('h1')
    title.textContent = "Menu"
    content.appendChild(title)

    const menuList = document.createElement('ul')
    const cheeseBurger = document.createElement('li')
    cheeseBurger.textContent = "Cheeseburger"
    const baconBurger = document.createElement('li')
    baconBurger.textContent = "Bacon Burger"
    const pizzaMargherita = document.createElement('li')
    pizzaMargherita.textContent = "Pizza Margherita"
    const frenchFries = document.createElement('li')
    frenchFries.textContent = "French Fries"
    content.appendChild(menuList)
    menuList.appendChild(pizzaMargherita)
    menuList.appendChild(cheeseBurger)
    menuList.appendChild(baconBurger)    
    menuList.appendChild(frenchFries)
}