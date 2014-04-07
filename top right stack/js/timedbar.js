$(document).ready(function () { 

	$('#add').click(function () {
		var t = Math.random()*50000;
		var destination = $('input').val();
		$('#holding_pen').append('<div class="load_bar">'+destination+'</div>');
		$('.load_bar:last').show(100).delay(t).toggle("puff");
		//Jquery returns references to the element you have just worked with
		//puff uses jquery ui
		//NOTE: show/hide do not end up on the animation que without value for duration
	});
	
});