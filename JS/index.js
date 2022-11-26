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

function countdown(){
  setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2,'0')

    if(minutes <= 0){
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      return
    }

    if(seconds <= 0){
      seconds = 2
      
      minutesDisplay.textContent = String(minutes - 1).padStart(2,'0')

    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2,'0')

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonAdd.addEventListener('click', function () {
  let soma = Number(minutesDisplay.textContent) + time
  minutesDisplay.textContent = String(soma).padStart(2,'0')
})

buttonSubtract.addEventListener('click',function(){
  let subtract = Number(minutesDisplay.textContent) - time
  minutesDisplay.textContent = String(subtract).padStart(2,'0')
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
