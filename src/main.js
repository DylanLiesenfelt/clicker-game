// ===== Player Variables =====
let coins = 0
let coinMulti = 1
let clickPower = 1
let attackPower = 0
let attackSpeed = 0
let playerHand = []

// ===== Enemy Variables =====
let enemyLevel = 0
let currentHealth = 0
let maxHealth = 0

// ===== Lists =====
const adj = [
    'Battle','Crystal','Cyber','Magma','Void'
]

const noun = [
    'Bear','Toad','Hydra','Demon','Wizard'
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

function newEnemy() {
    // Level Up
    enemyLevel++ 
    maxHealth = Math.floor(20 * Math.pow(enemyLevel, 1.3))
    currentHealth = maxHealth
    // Pull New Enemy
    index = getRandomLibraryIndex()
    enemy = combatLibrary[index] // Pull random card from combat deck
    combatLibrary.splice(index, 1) // Remove that card from the lib
    // Display
    updateName(enemy.name)
    updateImage(enemy.image)
    updateLevel(enemyLevel)
    updateHealth(maxHealth)
    updateHealthBar(100)
    updateCardOpacity(100)
}

function clickDamage() {
    reward(1)
    // Damage
    currentHealth = currentHealth - clickPower 
    updateHealth(currentHealth)
    updateHealthBar((currentHealth/maxHealth) * 100) 
    // Checks if enemy is dead
    if (currentHealth <= 0) { 
        enemy_card.removeEventListener('click', clickDamage)
        reward(10 * enemyLevel)
        updateCardOpacity(0)
        // Pull new enemy, reset game loop
        setTimeout(() => {
            newEnemy()
            enemy_card.addEventListener('click', clickDamage)
        }, 1000)
    } 
    
    else {
        return
    }
}

// ========== Runtime ============
function main() {
    makeCardLibary()
    newEnemy()
    enemy_card.addEventListener('click', clickDamage)
}

main()