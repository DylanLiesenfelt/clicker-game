const store_button = document.getElementById('store-btn')
const store_display = document.getElementById('store')
const exit = document.getElementById('exit-store-btn')

store_button.addEventListener('click', () => {
    store_display.style.visibility = 'visible'
})

exit.addEventListener('click', () => {
    store_display.style.visibility = 'hidden'
})

function makeCardLibary() {
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
    const booster = []

    for (let i = 0; i<5; i++) {
        n = Math.floor(Math.random() * lib.length)
        booster.push(lib[n])
    }

    return booster
}

//libary.find(obj => obj.id === 27) finds the 27th card
const libary = makeCardLibary()

