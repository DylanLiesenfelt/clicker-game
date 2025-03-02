function updateInfo() {
    
}

function combat(health, clickMod) {
    
    const startHealth = health

    if (health > 0) {
        enemy_card.addEventListener('click', () => { // Click attack
            health = health - 1*clickMod
            enemy_hp.innerText = health
            let barWidth = ((health/startHealth) * 100) + '%' 
            hp_bar.style.width = barWidth    
        })
    } else {
        console.log('dead')
        return
    }   
}