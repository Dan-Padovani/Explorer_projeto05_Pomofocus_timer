import {
	buttonPause,
	buttonPlay
} from "./elements.js"

import {
	kitchenTimerAudio
} from "./sounds.js"

export default function Timer() {
	const secondsDisplay = document.querySelector('.seconds')
	const minutesDisplay = document.querySelector('.minutes')
	let minutes = Number(minutesDisplay.textContent)
	let timerIsOver

	function addMinutesDisplay() {
		minutes += 5
		if(minutes >= 99) {
			minutes = 99
			alert('Limite máximo atingido')
		}
		updateTimeDisplay(minutes, 0)
	}

	function removeMinutesDisplay() {
		minutes -= 5
		if(minutes <= 0) {
			minutes = 1
			alert('Limite mínimo atingido')
		}
		updateTimeDisplay(minutes, 0)
	}

	function stop() {
		buttonPause.classList.add('hide')
		buttonPlay.classList.remove('hide')
		hold()
		updateTimeDisplay(minutes, 0) 
	}
	
	function hold() {
		clearTimeout(timerIsOver)
	}
	
	function updateTimeDisplay (minutes, seconds) {
		secondsDisplay.textContent = String(seconds).padStart(2, '0')
		minutesDisplay.textContent = String(minutes).padStart(2, '0')
	}
	
	function countdown() {
		timerIsOver = setTimeout(() => {
			
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)
		
		if(minutes <= 0 && seconds <= 0) {
			stop()
			kitchenTimerAudio.play()
			return
		}
	
		if(seconds <= 0) {
			seconds = 60
			minutes--
		}
		seconds--
		updateTimeDisplay(minutes, seconds)
		
		countdown()
		}, 1000);
	}

	return {
		addMinutesDisplay,
		removeMinutesDisplay,
		stop,
		hold,
		updateTimeDisplay,
		countdown,
		minutes
	}
} 
