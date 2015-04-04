$(document).ready(function(){
	resizeBackground();
	$(window).resize(resizeBackground);

	$('#logo').click(function() {
		$(".main").moveTo(1);
	});
});

function resizeBackground() {
	var width = $(window).width();
	var height = $(window).height();
	if (width * 0.68 >= height) {
		$('#homepage-background').css('width', '100%');
		$('#homepage-background').css('height', 'auto');
	} else {
		$('#homepage-background').css('height', '100vh');
		$('#homepage-background').css('width', 'auto');
	}
}