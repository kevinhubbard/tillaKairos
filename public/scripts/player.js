
init();

function init(){
	var currentSong = 0;

	$('#audio').attr('src', $('#playlist li a')[0]);

	$('#playlist li a').click(function(e){
		e.preventDefault();
		$('#audio').attr('src', this);
		$('#audio')[0].play();
		$('#playlist li').removeClass('current-song');
		currentSong = $(this).parent().index();
		$(this).parent().addClass('current-song')
	});

	$('#audio')[0].addEventListener('ended', function(){
		currentSong++;
		if(currentSong == $('#playlist li a').length){
			currentSong = 0;
		}
		$('#playlist li').removeClass('current-song');
		$('#playlist li:eq('+currentSong+')').addClass('current-song');
		$('#audio').attr('src', $('#playlist li a')[currentSong].href);
		$('#audio')[0].play();
	})
	
}	