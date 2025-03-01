function combat(health, mod) {
    const startHealth = health

    enemy_card.addEventListener('click', () => { // Click attack
        
        if (health > 0) {
            health = health - 1*mod
            enemy_hp.innerText = health

            let barWidth = ((health/startHealth) * 100) + '%' 
            hp_bar.style.width = barWidth
        }
        else {
            return
        }
    })  
        
}