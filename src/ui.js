// ========== Globals ==========
const imagesPath = "../assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')
const coin_display = document.getElementById('coin')
const hand = document.getElementById('hand')
const store_display = document.getElementById('store')
const store_button = document.getElementById('store-btn')
const store_exit = document.getElementById('exit-store-btn')
const store_coin = document.getElementById('store-coin')
const pack_display = document.getElementById('pack-display')
const card_display = document.getElementById('card-display')
const pack1 = document.getElementById("pack1")
const pack2 = document.getElementById("pack2")
const pack3 = document.getElementById("pack3")

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
        enemy_image.src = imagesPath + 'default.jpeg';
    }
}

function updateHealth(hp) {
    enemy_hp.innerText = hp
}

function updateHealthBar(width) {
    hp_bar.style.width = width + '%'
}

function updateCoin(coins) {
    coin_display.innerText = 'Coins: ' + coins
}

function reward(base) {
    coins += base * coinMulti
    updateCoin(coins)
}

function updateCardOpacity(val) {
    enemy_card.style.opacity = val + '%'
}

