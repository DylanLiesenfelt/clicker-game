// ===== Globals =====
const imagesPath = "../assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')
const coin_display = document.getElementById('coin')

// ===== Lists =====
//Adjectives
const adj = [
    'Colossal', 'Frozen', 'Chaos', 'Skeletal', 'Twilight',
    'Molten', 'Slimy', 'Hairy', 'Unholy', 'Elder',
    'Electric', 'Drunk', 'Juvenile', 'Paper', 'Holy', 
    'Earthen', 'Arcane','Deadly', 'Feral', 'Metal',
    'Aquatic', 'Primal', 'Celestial', 'Evolved',  
    'Storm', 'Crystal', 'Wooden', 'Hallucinogenic',
    'Glitched', 'Shadow', 'Pale', 'Quantum',
    'Radioactive', 'Battle', 'Void', 'Parasitic',
    'Elemental', 'Undead', 'Psychic','Exotic', 'Doctor', 
    'Cyborg', 'Ancestral', 'Sand', 'Buff','Nature', 
    'Death', 'Soul', 'Chromatic', 'Stone', 'Flame', 
    'Eldritch', 'Runic', 'Cartoon', 'Plasma', 'Nightmare',
    'Obsidian', 'Plastic'
]

//Nouns
const names = [
    'Rodent','Ox','Tiger','Rabbit','Dragon','Sepent','Stallion',
    'Ram','Ape','Wolf','Boar','Toad','Robot',
    'Dinosaur','Penguin','Owl','Demon','Angel',
    'Goblin','Bug','Bat','Slug','Slime','Bear','Racoon',
    'Ninja','Tank','Hydra','Army','Stag','Shark','Whale',
    'Troll','Dwarf','Elf','Ghost','Ghoul','Hawk',
    'Guardian','Bigfoot', 'God','Turtle','Golem','Walker','Monk', 
    'Mage','Spider','Destroyer','Vampire','Kraken','Beast', 
    'Queen', 'King','Paladin','Gladiator','Puppet','Lich','Clown'
]

// ===== Player Vars =====
let level = 0
let clickMod = 1
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