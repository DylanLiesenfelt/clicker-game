// ========== Globals ==========
const imagesPath = "/assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')
const coin_display = document.getElementById('coin')
const hand = document.getElementById('hand')
const store = document.getElementById('store')
const store_button = document.getElementById('store-btn')
const store_exit = document.getElementById('exit-store-btn')
const store_coin = document.getElementById('store-coin')
const pack_display = document.getElementById('pack-display')
const card_display = document.getElementById('card-display')
const pack1_display = document.getElementById("pack1")
const pack2_display = document.getElementById("pack2")
const pack3_display = document.getElementById("pack3")
const pack_price = document.getElementsByClassName('pack-price') 
const coin_upgrade = document.getElementById('coin-upgrade')
const coin_upgrade_btn = document.getElementById('coin-btn')
const click_upgrade = document.getElementById('click-upgrade')
const click_upgrade_btn = document.getElementById('click-btn')
const speed_upgrade = document.getElementById('speed-upgrade')
const speed_upgrade_btn = document.getElementById('speed-btn')
const start_screen = document.getElementById('start-menu')
const new_game_btn = document.getElementById('new-game-btn')
const game_display = document.getElementById('game')

// ===== Updaters =====
function updateName(name) {
    enemy_name.innerText = name
}

function updateLevel(level) {
    enemy_level.innerText = 'Lvl: ' + level
}

function updateImage(img) {
    enemy_image.src = img

    // Default image if image does not exist at path
    enemy_image.onerror = function () {
        enemy_image.src = imagesPath + 'default.webp';
    }
}

function updateHealth(hp) {
    if (hp < 0 ) {
        hp = 0
    }
    enemy_hp.innerText = hp
}

function updateHealthBar(width) {
    hp_bar.style.width = width + '%'
}

function updateCoin(coins) {
    coin_display.innerText = 'Coins: ' + coins
    store_coin.innerText = 'Coins: ' + coins
}

function reward(base) {
    coins += base * coinMulti
    updateCoin(coins)
}

function updateCardOpacity(val) {
    enemy_card.style.opacity = val + '%'
}

function updatePackPrice(price) {
    const pack_price = document.getElementsByClassName('pack-price');
    for (let i = 0; i < pack_price.length; i++) {
        pack_price[i].innerText = price + ' Coins'; 
    }
}


function getRandomLibraryIndex() {
    return Math.floor(libary.length * Math.random())
}