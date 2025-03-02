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

console.log(adj.length, names.length)

function loadEnemy() {
    level++
    health = Math.floor(10 * 1.5 ** level)

    if (adj.length >= 1 & names.length >= 1){

        // Get random indexs
        const adj_ind = Math.floor(Math.random() * adj.length) 
        const names_ind = Math.floor(Math.random() * names.length)
        
        // Make new name and image
        const next_name = adj[adj_ind] + ' ' + names[names_ind] 
        const next_image = imagesPath + adj[adj_ind] + '_' + names[names_ind] + '.webp'
        
        // Removes elements from their arrays
        adj.splice(adj_ind, 1) 
        names.splice(names_ind, 1)
       
        // Display new enemy 
        enemy_name.innerText = next_name
        enemy_image.src = next_image
        enemy_level.innerText = 'Lvl: ' + level
        hp_bar.style.width = '100%'
        enemy_hp.innerText = health
        enemy_card.style.opacity = 100

        // Default image if no image exists
        enemy_image.onerror = function () {
            enemy_image.src = imagesPath + 'default.jpeg';
        }
    }

    return health
}


