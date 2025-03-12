// ========= Global Vars ===========
let packPrice = 15
let pack1 = []
let pack2 = []
let pack3 = []
let boosterCard1
let boosterCard2
let boosterCard3
let boosterCard4
let boosterCard5

//====== Functions ======
function makeBooster() {
    const pack = []
    //Pull 5 random cards from library for the booster pack
    for (i=0; i<5; i++) { 
        index = getRandomLibraryIndex()
        pack.push(libary[index])
    } 
    return pack
}

function openBooster(pack) {
    if (coins >= packPrice) {
        store_exit.style.visibility = 'hidden' 
        // Change display
        card_display.style.visibility = 'visible'
        card_display.style.position = 'relative'
        pack_display.style.visibility = 'hidden'
        pack_display.style.position = 'absolute'
        // Render Cards
        for (i=0; i<pack.length; i++) {
            makeBoosterCard(pack[i], i+1)
        }
        boosterCard1 = pack[0]
        boosterCard2 = pack[1]
        boosterCard3 = pack[2]
        boosterCard4 = pack[3]
        boosterCard5 = pack[4]
        coins -= packPrice
        updateCoin(coins)
    } else {
        console.log('No Money')
    }
}

function makeBoosterCard(card, num) {
    //Make card element
    const booster_card = document.createElement('div')
    booster_card.id = 'booster-card' + num 
    booster_card.className = 'booster-card'
    //Make card name
    const card_header = document.createElement('div')
    card_header.innerText = card.name
    //Make card image
    const card_image = document.createElement('img')
    card_image.src = card.image
    //Make card card level
    const card_level = document.createElement('div')
    card_level.innerText = 'Lvl: ' + card.level
    //Put card together
    booster_card.appendChild(card_header)
    booster_card.appendChild(card_image)
    booster_card.appendChild(card_level)
    //Display everything
    card_display.appendChild(booster_card)
    //Add clcick event
    booster_card.addEventListener('click', () => buyBoosterCard(card))
}

function buyBoosterCard(card) {
    //Add card to player hand
    addCardToHand(card)
    //Reset store
    resetStore()
    //New Boosters
    pack1 = makeBooster()
    pack2 = makeBooster()
    pack3 = makeBooster()
    // Change price pack
    packPrice += 2
    updatePackPrice(packPrice)
}

function addCardToHand(card) {
    const cardID = card.adj + '_' + card.noun
    //Find card in hand
    const foundCard = playerHand.find(c => c.name === card.name)
    //Add to hand
    if (foundCard) {
        foundCard.level += 1
        document.getElementById(cardID + '-' + 'header').innerText = 'Lvl: ' + foundCard.level
    }
    else {
        playerHand.push(card)
        //Make Card
        const player_card = document.createElement('div')
        player_card.className = 'player-card'
        player_card.id = cardID
        //Make header
        const card_header = document.createElement('div')
        card_header.innerText = card.name
        //Make card image
        const card_image = document.createElement('img')
        card_image.src = card.image
        //Make card card level
        const card_level = document.createElement('div')
        card_level.id = cardID + '-' + 'header'
        card_level.innerText = 'Lvl: ' + card.level
        //Build card
        player_card.appendChild(card_header)
        player_card.appendChild(card_image)
        player_card.appendChild(card_level)
        //Display card
        hand.appendChild(player_card)
    }
    updateAttackPower()   
}

function updateAttackPower() {
    let levelTotal = 0
    for(i=0; i<playerHand.length; i++) {
        levelTotal += playerHand[i].level
    }

    attackPower = levelTotal
    
    if (isAutoAttacking === false) {
        autoAttack()
    }
}

function resetStore() {
    store_exit.style.visibility = 'visible' 
    card_display.style.visibility = 'hidden'
    card_display.style.position = 'absolute'
    pack_display.style.visibility = 'visible'
    pack_display.style.position = 'relative'
    card_display.innerHTML = '';

    pack1 = []
    pack2 = []
    pack3 = []
    boosterCard1 = []
    boosterCard2 = []
    boosterCard3 = []
    boosterCard4 = []
    boosterCard5 = []
}

//====== Event Listners =====
store_button.addEventListener('click', () => {
    store.style.visibility = 'visible'
    resetStore()
    pack1 = makeBooster()
    pack2 = makeBooster()
    pack3 = makeBooster()
})

store_exit.addEventListener('click', () => {
    store.style.visibility = 'hidden'
    resetStore()
    pack_display.style.visibility = 'hidden'
    store_exit.style.visibility = 'hidden' 
})

pack1_display.addEventListener('click', () => openBooster(pack1))
pack2_display.addEventListener('click', () =>  openBooster(pack2))
pack3_display.addEventListener('click', () => openBooster(pack3))

speed_upgrade_btn.addEventListener('click', () => {
    if (coins >= speedModPrice) {
        attackSpeed = attackSpeed - 0.25

        isAutoAttacking = false
        autoAttack()

        coins = coins - speedModPrice
        updateCoin(coins)

        speedModPrice /= 0.25
        speedLevel++
        speed_upgrade.innerText = 'Speed Mod: ' + speedLevel
        speed_upgrade_btn.innerText = speedModPrice + ' Coins'
    }
})

coin_upgrade_btn.addEventListener('click', () => {
    if (coins >= coinModPrice) {

        coins = coins - coinModPrice
        updateCoin(coins)

        coinModPrice /= 0.25
        coinMulti++

        coin_upgrade.innerText = 'Coin Mod: ' + coinMulti
        coin_upgrade_btn.innerText = coinModPrice + ' Coins'
    }    
})

click_upgrade_btn.addEventListener('click', () => {
    if (coins >= clickModPrice) {

        coins = coins - clickModPrice
        updateCoin(coins)

        clickModPrice /= 0.25
        clickPower++

        click_upgrade.innerText = 'Click Mod: ' + clickPower
        click_upgrade_btn.innerText = clickModPrice + ' Coins'
    }    
})