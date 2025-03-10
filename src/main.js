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

// ===== Player Variables =====
let coins = 0
let coinMulti = 1
let clickPower = 1
let attackPower = 0
let attackSpeed = 0
let cardHand = []

// ===== Enemy Variables =====
let enemyLevel = 0

// ===== Lists =====
const adj = [
'Arcane','Battle','Buff','Crystal','Cyborg',
'Drunk','Eldritch','Feral','Fossil','Frozen',
'Glitched','Holy','Inferno','Liquid','Golden',
'Nightmare','Paper','Plastic','Plasma','Primal',
'Psychic','Radioactive','Sand','Steampunk','Stone',
'Stone','Storm','Twilight','Undead','Void'
]

const noun = [
'Angel','Bear','Bigfoot','Demon','Dinosaur',
'Dragon','Ghoul','Goblin','God','Golem',
'Hawk','Hydra','Kraken','Lich','Mage',
'Monk','Paladin','Penguin','Puppet','Racoon',
'Ram','Rodent','Shark','Slug','Spider',
'Tank','Tiger','Toad','Turtle','Wolf'
]

const libary = [] // Holds all possible card combinations
let combatLibrary = libary // Combat enemies are removed on defeat

// ===== Classes =====
class Card {
    constructor(adj, noun, level) {
        this.adj = adj
        this.noun = noun
        this.name = adj + ' ' + noun
        this.level = level
        this.image = "../assets/images/card_images/" + adj + '_' + noun + '.webp'
    }
}

// ===== Functions =====
//Creates all possible cards and adds them to the library
function makeCardLibary() {
    for (let i = 0; i < adj.length; i++) {
        for (let j = 0; j < noun.length; j ++) {       
            libary.push(new Card(adj[i],noun[j],1))
        }
    }
}

function updateUI(coin, name, level, health, hpWidth, image) {
    enemy_name.innerText = name
    enemy_level.innerText = 'Lvl: ' + level
    enemy_hp.innerText = health
    enemy_image.src = image
    hp_bar.style.width = hpWidth+'%'
    coin_display.innerText = coin
    // Default image if image does not exist at path
    enemy_image.onerror = function () {
        enemy_image.src = imagesPath + 'default.jpeg';
    }
}

function newEnemy() {
    // Level Up
    enemyLevel++ 
    enemyhealth = Math.floor(20 * Math.pow(enemyLevel, 1.3))
    // Pull New Enemy
    index = Math.floor(combatLibrary.length * Math.random())
    enemy = combatLibrary[index] // Pull random card from combat deck
    combatLibrary.splice(index, 1) // Remove that card from the lib
    // Display
    updateUI(coins, enemy.name, enemyLevel, enemyhealth, 100, enemy.image)
    
    return enemyhealth
}

function reward() {
    coins += coins * coinMulti
    updateUI(coins)
}

function combat() {
    const startHealth = newEnemy()



}

// ========== Runtime ============
function main() {
    makeCardLibary()
    combat()
}

main()