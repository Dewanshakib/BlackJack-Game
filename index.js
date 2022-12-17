let sum = 0
let cards = []
let message = ''
let hasBlackJack = false
let isAlive = false
let messageEl = document.querySelector('#message-el')
let cardEl = document.querySelector('#card-el')
let sumEl = document.querySelector('#sum-el')


function startGame () {
    isAlive = true
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    let sum = firstCard + secondCard
    let cards = [firstCard,secondCard]
    renderGame()
}

function randomNumber () {
    let getRandomNumber = Math.ceil(Math.random() * 13)

    if (getRandomNumber > 10) {
        return 10
    }
    else if (getRandomNumber === 1) {
        return 11
    }
    else {
        return getRandomNumber
    }
}


function renderGame () {
    cardEl.textContent = "Cards :"

    for (let i = 0 ; i < cards.length ; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20) {
        message = "You're in the Game 😌"  
    }
    else if (sum === 21) {
        message = "You're got Black Jack 🏆"
        hasBlackJack= true
    }
    else {
        message = "You're out of the Game 😲"
        isAlive = false
    }
    messageEl.textContent = message
    
    
}

function newCard () {

    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = randomNumber()
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
    }


}