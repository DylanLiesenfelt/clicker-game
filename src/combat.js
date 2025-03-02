function checkHealth() {
    if (health === 0) {
        reward()
    } else {
        requestAnimationFrame(checkHealth)
    }
}


function combat(health, clickMod) {
    
    const startHealth = health
    
    enemy_card.addEventListener('click', () => { // Click attack
        if (health > 0) {
            health = health - 1*clickMod
            enemy_hp.innerText = health
            let barWidth = ((health/startHealth) * 100) + '%' 
            hp_bar.style.width = barWidth
              
        }
    })
    
    checkHealth()
}