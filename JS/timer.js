export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  time,
  resetControls
}) {
  function addTimer() {
    let soma = Number(minutesDisplay.textContent) + time
    minutesDisplay.textContent = String(soma).padStart(2, '0')
  }

  function subtractTimer() {
    let subtract = Number(minutesDisplay.textContent) - time
    minutesDisplay.textContent = String(subtract).padStart(2, '0')
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
        return
      }

      if (seconds <= 0) {
        seconds = 5

        --minutes
      }

      updateDisplay(minutes, String(seconds) - 1)

      countdown()
    }, 1000)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    addTimer,
    subtractTimer
  }
}
