function combat(health) {
    const startHealth = health

    function clickAttack() { // Click attack function
        if (health >= 1) {
            health -= 1 * clickMod
            coin += reward()
            
            updateDisplays()
            if (health <= 0) {
                endCombat()
            }
        }
    }

    function endCombat() {
        enemy_card.removeEventListener('click', clickAttack) //Disable click event
        coin += Math.floor((reward() * (level*Math.E))+1) // Defeating enemy bonus
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
        coin_display.innerText = "Coins: " + coin.toFixed(2)
    }

    function reward() {
        return (5 * Math.log(level + 1) / Math.log(15))/10
    }

    enemy_card.addEventListener('click', clickAttack)
}


