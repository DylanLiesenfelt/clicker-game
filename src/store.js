const store_button = document.getElementById('store-btn')
const store_display = document.getElementById('store')
const exit = document.getElementById('exit-store-btn')

store_button.addEventListener('click', () => {
    store_display.style.visibility = 'visible'
})

exit.addEventListener('click', () => {
    store_display.style.visibility = 'hidden'
})