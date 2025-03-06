// ===== Globals =====
const imagesPath = "../assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')
const coin_display = document.getElementById('coin')
const hand = document.getElementById('hand')

// ===== Lists =====
//Adjectives
const adj = [
'Arcane','Battle','Buff','Crystal','Cyborg',
'Drunk','Eldritch','Feral','Fossil','Frozen',
'Glitched','Holy','Inferno','Liquid','Golden',
'Nightmare','Paper','Plastic','Plasma','Primal',
'Psychic','Radioactive','Sand','Steampunk','Stone',
'Stone','Storm','Twilight','Undead','Void'
]

//Nouns
const names = [
'Angel','Bear','Bigfoot','Demon','Dinosaur',
'Dragon','Ghoul','Goblin','God','Golem',
'Hawk','Hydra','Kraken','Lich','Mage',
'Monk','Paladin','Penguin','Puppet','Racoon',
'Ram','Rodent','Shark','Slug','Spider',
'Tank','Tiger','Toad','Turtle','Wolf'
]

// ===== Player Vars =====
let level = 0
let clickMod = 1
let goldMod = 1
let autoMod = 1
let coin = 0
let playerHand = []

// ===== Enemy Vars =====
let enemy
let health = 0

function game() {
    if (level === 58) {
        console.log('Game Over')
    } 
    health = loadEnemy() 
    combat(health) 
   
}

game()