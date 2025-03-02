function combat(health) {
    const startHealth = health

    function clickAttack() { // Click attack function
        if (health >= 1) {
            health -= 1 * clickMod
            coin += reward()
            
            updateDisplays()
        } else {
            endCombat()
        }
    }

    function endCombat() {
        enemy_card.removeEventListener('click', clickAttack) //Disable click event
        coin += Math.floor((reward() * (level/2))+1) // Defeating enemy bonus
        updateDisplays()
        enemy_card.style.opacity = 0
        setTimeout(() => {
            game()
        }, '1000')
    }

    function updateDisplays() {
        enemy_hp.innerText = health
        let barWidth = ((health / startHealth) * 100) + '%'
        hp_bar.style.width = barWidth
        coin_display.innerText = "Coins:" + coin
    }

    enemy_card.addEventListener('click', clickAttack)
}


