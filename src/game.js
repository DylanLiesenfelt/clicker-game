// ===== Globals =====
const imagesPath = "../assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')

// ==== Player Vars =====
let level = 0 
let clickMod = 1
let coin = 0

// ===== Enemy Vars =====
let enemy
let health = 0

function game() {
   health = loadEnemy() 
   combat(health, clickMod) 
   
}

game()