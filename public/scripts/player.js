var audio = new Audio();
var trackList = ['./audio/choose.mp3'];
var player = document.getElementById('player');

function initAudioPlayer(){
	var audioElement = document.createElement('audio');
		audioElement.setAttribute('controls', 'controls');
	var audioSrc = document.createElement('source');
		audioSrc.setAttribute('src', trackList[0]);
		audioSrc.setAttribute('type', 'audio/mp3');
	audioElement.appendChild(audioSrc);
	player.appendChild(audioElement);
}

window.addEventListener('load', function(){
	initAudioPlayer();
});