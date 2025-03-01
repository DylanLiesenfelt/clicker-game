const imagesPath = "../assets/images/card_images/"
const enemy_card = document.getElementById('enemy-card')
const enemy_name = document.getElementById('enemy-name')
const enemy_level = document.getElementById('enemy-lvl')
const enemy_image = document.getElementById('enemy-img')
const enemy_hp = document.getElementById('health-value')
const hp_bar = document.getElementById('health-bar')

//Adjectives
const adj = [
    'Big',  'Ice', 'Mad','Old', 'Skeletal', 'Twilight',
    'Bald', 'Dangerous', 'Dire', 'Molten', 'Robot',
    'Slimey', 'Wet', 'Hairy', 'Demonic', 'Wild', 'Evil', 
    'Starved', 'Electric', 'Drunk', 'Young', 'Thick', 
    'Paper', 'Heavenly', 'Earthly', 'Liquid', 'Magical',
    'Holy', 'Unholy', 'Possesed', 'Deadly', 'Superior', 
    'Aquatic', 'Ascended', 'Primal', 'Celestial', 
    'Evolved', 'Steel', 'Golden', 'Perfect', 'Storm',
    'Platinum', 'Crystal', 'Glass', 'Wooden', 
    'Twisted', 'Glitched', 'Mega', 'Anti', 'Space',
    'Alpha', 'Shadow', 'Beta', 'Ultra', 'Pale', 'Radioactive', 
    'Battle', 'Rotted', 'Dark', 'Light', 'Negative', 
    'Interdimensional', 'Massive', 'Black', 'White', 
    'Night', 'Undead', 'Ancient', 'Rare', 'Psychic',
    'Exotic', 'Universal', 'Galatic', 'Dr.', 'Armored',
    'Cyborg', 'Ancestral', 'Italian', 'Buff',
    'Organic', 'Death', 'Mecha', 'Soul', 'Rainbow', 
    'Stone', 'Fire', 'Common', 'Elemental'
]

//Nouns
const names = [
    'Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse',
    'Goat','Monkey','Roster','Dog','Pig','Frog','Mech',
    'Dinosaur','Lizard','Wolf','Penguin','Owl','Demon','Angel',
    'Goblin','Bettle','Bat','Slug','Slime','Bear','Panda','Racoon',
    'Ninja','Jack Rabbit','Hydra','Basilisk','Stag','Shark','Whale',
    'Orc','Troll','Dwarf','Elf','Ghost','Ghoul','Hawk',
    'Zomibe','Guardian','Bandit','Soilder','Alligator','Droid',
    'Big Foot','Man','Saiyan','God','Monster','Turtle',
    'Lamma','Golem','Lord','Walker','Rider','Monk',
    'Biscut','Spirit','Unkown','Wyvern','Wizzard','Spider','Destroyer',
    'Vampire','Brother','Knight','Kevin', 'Husky', 'Kraken',
    'Big Guy','Bucko','Big Dawg', 'Beast', 'Sloth', 
    'Queen', 'King', 'Door', 'Paladin', 'Swordman', 'Gladiator',
    'Cell', 'Puppet', 'Lich', 
]

class Enemy {
    constructor(name, img) {
        this.name = name;
        this.img = img;
    }
}

function genEnemy() {
    if (adj.length >= 1 & names.length >= 1){
        const adj_ind = Math.floor(Math.random() * adj.length) // Random index
        const names_ind = Math.floor(Math.random() * names.length)
        
        const new_name = adj[adj_ind] + ' ' + names[names_ind]
        const image = imagesPath + adj[adj_ind] + '_' + names[names_ind] + '.jpeg'
        
        adj.splice(adj_ind, 1) // Removes elements from their arrays
        names.splice(names_ind, 1)
       

        return new Enemy(new_name, image)
    }
}

function updateEnemy(enemy, lvl) {

    enemy_name.innerText = enemy.name
    enemy_image.src = enemy.image
    enemy_level.innerText = 'Lvl: ' + lvl

    const health = Math.floor(10 * 1.5 ** lvl)
    enemy_hp.innerText = health

    enemy_image.onerror = function () { // If no image exists go to default
        enemy_image.src = imagesPath + 'default.jpeg';
    };
    
    hp_bar.style.width = '100%'

    return health
}