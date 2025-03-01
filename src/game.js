function game() {
    let level = 1 //Starting level
    let health = 20 //Starting health
    updateEnemy(genEnemy(),health, level)
}

game()