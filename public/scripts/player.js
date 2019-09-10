
init();

function init(){
	var currentSong = 0;
	$('#audio')[0].src = $('#playlist li a')[0];
	$('#playlist li a').click(function(e){
		e.preventDefault();
		$('#audio')[0].src = this;
		$('#audio')[0].play();
	});
	
}	