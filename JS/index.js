const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')
const buttonAdd = document.querySelector('.add')
const buttonSubtract = document.querySelector('.subtract')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFireplace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes
let time = 5

function resetControls() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

// Função para adicionar +5min no timer
function addTimer(){
  let soma = Number(minutesDisplay.textContent) + time
  minutesDisplay.textContent = String(soma).padStart(2,'0')
}
// Função para subtrair -5min no timer
function subtractTimer(){
  let subtract = Number(minutesDisplay.textContent) - time
  minutesDisplay.textContent = String(subtract).padStart(2,'0')
}

function updateDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2,'0')
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function countdown(){
  setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    
    updateDisplay(minutes, 0)

    if(minutes <= 0){
      resetControls()
      return
    }

    if(seconds <= 0){
      seconds = 2

      --minutes
    }
    
    updateDisplay(minutes, String(seconds) - 1)

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  resetControls()
})

buttonStop.addEventListener('click', function () {
  resetControls()
})

buttonAdd.addEventListener('click', function () {
  addTimer()
})

buttonSubtract.addEventListener('click',function(){
  subtractTimer()
})

buttonForest.addEventListener('click', function () {
  buttonRain.classList.remove('on')
  buttonForest.classList.add('on')
  buttonCoffee.classList.remove('on')
  buttonFireplace.classList.remove('on')
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('on')
  buttonForest.classList.remove('on')
  buttonCoffee.classList.remove('on')
  buttonFireplace.classList.remove('on')
})

buttonCoffee.addEventListener('click', function () {
  buttonCoffee.classList.add('on')
  buttonRain.classList.remove('on')
  buttonForest.classList.remove('on')
  buttonFireplace.classList.remove('on')
})

buttonFireplace.addEventListener('click', function () {
  buttonFireplace.classList.add('on')
  buttonCoffee.classList.remove('on')
  buttonRain.classList.remove('on')
  buttonForest.classList.remove('on')
})
