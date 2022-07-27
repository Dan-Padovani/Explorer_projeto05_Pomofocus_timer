// Sounds elements
let soundForest = document.getElementById('audioForest')
let soundRain = document.getElementById('audioRain')
let soundShop = document.getElementById('audioShop')
let soundFire = document.getElementById('audioFire')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimerAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

// Input elements volume controls
let volumeControlForest = document.getElementById('volumeForest')
let volumeControlRain = document.getElementById('volumeRain')
let volumeControlShop = document.getElementById('volumeShop')
let volumeControlFire = document.getElementById('volumeFire')


// Input volume control events
volumeControlForest.addEventListener('change', function() {
	soundForest.volume = this.value / 100;
});

volumeControlRain.addEventListener('change', function() {
	soundRain.volume = this.value / 100;
});

volumeControlShop.addEventListener('change', function() {
	soundShop.volume = this.value / 100;
})

volumeControlFire.addEventListener('change', function() {
	soundFire.volume = this.value / 100;
})

export {
	soundForest,
	soundRain,
	soundShop,
	soundFire,
	buttonPressAudio,
	kitchenTimerAudio,
	volumeControlForest,
	volumeControlRain,
	volumeControlShop,
	volumeControlFire
}