const content = document.querySelector('#content')

export function populateAbout() {
    const title = document.createElement('h1')
    title.textContent = "About Matteo's Restaurant"
    content.appendChild(title)
    const firstPara = document.createElement('p')
    firstPara.textContent = "Hi there. I'm Matteo, I'm from Italy and I'd like you to have the best experience at my restaurant."
    content.appendChild(firstPara)
    const secondPara = document.createElement('p')
    secondPara.textContent = "Do you want to leave a suggestion? Write to matteosrestaurant@gmail.com."
    content.appendChild(secondPara)
}