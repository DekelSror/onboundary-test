


let voices = window.speechSynthesis.getVoices()

window.speechSynthesis.onVoicesChanged = e => {
	voices = window.speechSynthesis.getVoices()
}

function test () {
	console.log('testing...')

	const ut = new SpeechSynthesisUtterance('I will say two lines. This is the second line.')

	ut.lang = 'en-GB'
	ut.rate = 0.7
	ut.voice = voices.filter(v => v.lang.toLowerCase().startsWith('en'))[0]


	ut.onBoundary = function(e) {
		console.log('onBoundary fired!', e.name, e.charIndex, e.charLength)
	}
	
	window.speechSynthesis.speak(ut)
}



