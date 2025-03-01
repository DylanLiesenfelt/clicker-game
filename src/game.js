function game() {
    let level = 1 //Starting level
    let clickMod = 1
    let coin = 0
    let play = true // Play state
    
    while (play == true) {
        enemy = genEnemy()
        health = updateEnemy(enemy, level) //Load new enemy
        combat(health, clickMod)
        reward()
        level ++
    }
}

game()