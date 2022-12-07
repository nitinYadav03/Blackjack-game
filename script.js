
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name: "Nitin",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₹" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard == 1){
        return 11
    } else if(randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 20
        playerEl.textContent = player.name + ": ₹" + player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 10
        playerEl.textContent = player.name + ": ₹" + player.chips
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

}

function newCard() {
    if(isAlive == true && hasBlackJack == false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}





