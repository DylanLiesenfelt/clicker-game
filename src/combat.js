function combat(health) {
    const startHealth = health

    function clickAttack() { // Click attack function
        if (health > 0) {
            health -= 1 * clickMod
            coin += reward()
            
            enemy_hp.innerText = health
            let barWidth = ((health / startHealth) * 100) + '%'
            hp_bar.style.width = barWidth
            coin_display.innerText = "Coins:" + coin
        }

        if (health <= 0) {
            enemy_card.removeEventListener('click', clickAttack)
        }
    }
    
    enemy_card.addEventListener('click', clickAttack)
    if (health <= 0) {
        coin += ((reward * 10) * level) 
    }
}


