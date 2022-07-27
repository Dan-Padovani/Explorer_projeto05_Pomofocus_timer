import {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonAddMinutes,
	buttonRemoveMinutes, 
	buttonLightTheme,
	buttonDarkTheme,
	bodyThemeToggle,
	buttonCardForest,
	buttonCardRain,
	buttonCardCoffeeShop,
	buttonCardFire
} from "./elements.js"

import {
	buttonPressAudio,
	volumeControlForest,
	volumeControlRain,
	volumeControlShop,
	volumeControlFire,
	soundForest,
	soundRain,
	soundShop,
	soundFire
} from "./sounds.js"

export default function Events({timer}) {
	buttonCardForest.addEventListener('click', function () {
		isButtonActivated(buttonCardForest, soundForest, volumeControlForest)
	})
	
	buttonCardRain.addEventListener('click', function () {
		isButtonActivated(buttonCardRain, soundRain, volumeControlRain)
	})
	
	buttonCardCoffeeShop.addEventListener('click', function () {
		isButtonActivated(buttonCardCoffeeShop, soundShop, volumeControlShop)
	})
	
	buttonCardFire.addEventListener('click', function () {
		isButtonActivated(buttonCardFire, soundFire, volumeControlFire)
	})
	
	buttonLightTheme.addEventListener('click', function () {
		bodyThemeToggle.classList.toggle('darkMode')
		toggleLightAndDarkTheme()	
	})
	
	buttonDarkTheme.addEventListener('click', function() {
		bodyThemeToggle.classList.toggle('darkMode')
		toggleLightAndDarkTheme()
	})
	
	buttonPlay.addEventListener('click', function() {
		togglePausePlayButton()
		buttonPressAudio.play()
		timer.countdown()
	})
	
	buttonPause.addEventListener('click', function() {
		togglePausePlayButton()
		buttonPressAudio.play()
		timer.hold()
	})
	
	buttonStop.addEventListener('click', function() {
	buttonPressAudio.play()
	timer.stop()
	})

	buttonAddMinutes.addEventListener('click', function() {
	timer.addMinutesDisplay()
	})

	buttonRemoveMinutes.addEventListener('click', function() {
	timer.removeMinutesDisplay()
	})

	function isButtonActivated (button, sound, volumeInput) {
		if(button.className.match('.active')) {
			button.classList.remove('buttonCardSelected', 'active')
			volumeInput.classList.remove('volumeBarSelected')
			sound.pause()
		}else{
			button.classList.add('buttonCardSelected', 'active')
			volumeInput.classList.add('volumeBarSelected')
			sound.play()
			sound.loop = true
		}
	}

	function togglePausePlayButton() {
		buttonPlay.classList.toggle('hide')
		buttonPause.classList.toggle('hide')
	}

	function toggleLightAndDarkTheme() {
		buttonLightTheme.classList.toggle('hide')
		buttonDarkTheme.classList.toggle('hide')
	}
}

