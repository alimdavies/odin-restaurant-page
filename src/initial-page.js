const content = document.querySelector('#content')

export function populateHome() {
    const title = document.createElement('h1')
    title.textContent = "Matteo's Restaurant"
    content.appendChild(title)

    const introPara = document.createElement('p')
    introPara.classList.add('introPara')
    introPara.innerHTML = "Welcome to Matteo's Restaurant, where we bring two of the world's greatest comfort foods under one roof. <br><br>Whether you're in the mood for a fire-baked, artisanal pizza with a perfectly charred crust or a thick, juicy burger stacked high with premium ingredients, we've got you covered. We believe in keeping things simple but extraordinary: fresh dough made daily, 100% pure beef patties, and locally sourced toppings that make every bite count.<br><br>Can't decide between a slice or a burger? Bring friends, order both, and share the best of both worlds.\n\nCraving comfort? Explore our menu and find your next favorite meal today."
    content.appendChild(introPara)
}