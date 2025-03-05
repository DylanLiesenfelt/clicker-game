const store_display = document.getElementById('store')
const store_button = document.getElementById('store-btn')
const exit = document.getElementById('exit-store-btn')

const store_coin = document.getElementById('store-coin')

const pack_display = document.getElementById('pack-display')
const card_display = document.getElementById('card-display')

const pack1 = document.getElementById("pack1")
const pack2 = document.getElementById("pack2")
const pack3 = document.getElementById("pack3")

const libary = makeCardLibary()
let boosterPacks = []

store_button.addEventListener('click', () => { // Open Store
    store_display.style.visibility = 'visible'
    store_coin.innerText = "Coins: " + coin.toFixed(2) //Update coin
    makeBoosterPack(libary) // Gen booster packs
})

exit.addEventListener('click', () => {
    store_display.style.visibility = 'hidden'
    boosterPacks = [] //clear all packs
})

pack1.addEventListener('click', () => {
    displayCards(0)
})

pack2.addEventListener('click', () => {
    displayCards(1)
})

pack3.addEventListener('click', () => {
    displayCards(2)
})

function makeCardLibary() { // Add all possible cards to a library

    const cardLibary = []

    for (let i = 0; i < adj.length; i++) {
        for (let j = 0; j < names.length; j ++) {
            
            cardLibary.push({
                adjective: adj[i],
                name: names[j]
            })
        }
    }

    return cardLibary
}

function makeBoosterPack(lib) {

    for (let i = 0; i<3; i++) { //take the cards and and add them  

        const cards = []

        for (let i = 0; i<5; i++) { // pull 5 random indexes from the card library
            n = Math.floor(Math.random() * lib.length)
            cards.push(lib[n])
        }

        boosterPacks.push(cards)
    }
}

function displayCards(index) {

    // Change displays
    pack_display.style.visibility = 'hidden'
    pack_display.style.position = 'absolute'
    card_display.style.visibility = 'visible'
    card_display.style.position = 'relative'

    for (let i = 0; i<5; i++) {

        let adj = boosterPacks[index][i].adjective
        let name = boosterPacks[index][i].name

        let count =  i + 1
        
        // Create card 
        const card = document.createElement("div")
        card.className = 'store-card'
        card.id = 'store-card' + count

        // Create card image 
        const img = document.createElement("img")
        img.src = imagesPath + adj + '_' + name + '.webp'
        // Default image if no image exists
        img.onerror = function () {
            img.src = imagesPath + 'default.jpeg';
        }

        // Create card header
        const header = document.createElement("div")
        header.innerText = adj + ' ' + name

        card.appendChild(header)
        card.appendChild(img)
        
        card_display.appendChild(card)
    }
}




