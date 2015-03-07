$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: false
	});

	$(".scrollIndicator").on("click", function() {
		$(".main").moveTo(2);
	});

	 $('#logo').click(function() {
        $(".main").moveTo(1);
    });
});