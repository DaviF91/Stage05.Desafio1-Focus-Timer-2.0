import resetControls from "./controls.js"
import "./timer.js"

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

let minutes = Number(minutesDisplay.textContent)
let time = 5
let timerTimeOut


buttonPlay.addEventListener('click', function () {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  resetControls()
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
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
