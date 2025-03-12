// ===== Player Variables =====
let coins = 0
let coinMulti = 1
let coinModPrice = 50

let clickPower = 1
let clickModPrice = 50

let attackSpeed = 1
let speedLevel = 1
let speedModPrice = 50

let playerHand = []
let attackPower = 0
let isAutoAttacking = false

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
    // Start Auto Attack
    autoAttack()
}

function clickDamage() {
    reward(1)
    // Damage
    currentHealth = currentHealth - clickPower 
    updateHealth(currentHealth)
    updateHealthBar((currentHealth/maxHealth) * 100) 
    // Checks if enemy is dead
    if (currentHealth <= 0 && isAutoAttacking === false) { 
        enemyDefeated()
    } else {
        return
    }
}

function autoAttack() {
    if (isAutoAttacking) return;
    isAutoAttacking = true;

    function attackLoop() {
        if (attackPower > 0 && currentHealth > 0) {
            currentHealth -= attackPower;
            updateHealth(currentHealth);
            updateHealthBar((currentHealth / maxHealth) * 100);
            setTimeout(attackLoop, attackSpeed * 1000);
        } else {
            isAutoAttacking = false; 
            if (currentHealth <= 0) enemyDefeated();
        }
    }

    attackLoop(); 
}


function enemyDefeated() {
    isAutoAttacking = false; // Stop attacking when enemy is dead
    enemy_card.removeEventListener('click', clickDamage);
    reward(10 * enemyLevel);
    updateCardOpacity(0);
    setTimeout(() => {
        newEnemy();
        enemy_card.addEventListener('click', clickDamage);
    }, 1000);
}

// ========== Runtime ============
function main() {
    makeCardLibary()
    newEnemy()
    enemy_card.addEventListener('click', clickDamage)
}

new_game_btn.addEventListener('click', () => {
    start_screen.style.visibility = 'hidden'
    start_screen.style.position = 'absolute'

    game_display.style.visibility = 'visible'
    game_display.style.position = 'relative'

    main()
})