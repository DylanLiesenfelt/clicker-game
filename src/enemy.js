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

function loadEnemy() {
    level++
    health = Math.floor(10 * 1.5 ** level)

    if (adj.length >= 1 & names.length >= 1){

        // Get random indexs
        const adj_ind = Math.floor(Math.random() * adj.length) 
        const names_ind = Math.floor(Math.random() * names.length)
        
        // Make new name and image
        const next_name = adj[adj_ind] + ' ' + names[names_ind] 
        const next_image = imagesPath + adj[adj_ind] + '_' + names[names_ind] + '.jpeg'
        
        // Removes elements from their arrays
        adj.splice(adj_ind, 1) 
        names.splice(names_ind, 1)
       
        // Display new enemy 
        enemy_name.innerText = next_name
        enemy_image.src = next_image
        enemy_level.innerText = 'Lvl: ' + level
        hp_bar.style.width = '100%'
        enemy_hp.innerText = health

        // Default image if no image exists
        enemy_image.onerror = function () {
            enemy_image.src = imagesPath + 'default.jpeg';
        }
    }

    return health
}


