import Controls from "./controls.js"
import Timer from "./timer.js"

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




const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer(
  {minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  controls.reset()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
})

buttonAdd.addEventListener('click', function () {
  timer.addTimer()
})

buttonSubtract.addEventListener('click',function(){
  timer.subtractTimer()
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
