$(document).ready(function () { 

	$('#add').click(function () {
		var destination = $('input').val();
		$('#holding_pen').append('<div class="load_bar">'+destination+'</div>');
		$('.load_bar').show();
	});
	
	$('#remove').click(function () {
		$('.load_bar:first').slideUp('slow', function () {
			$('.load_bar:first').remove();
		});
	});
	
});