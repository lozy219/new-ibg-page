$(document).ready(function(){
	resizeBackground();
	$(window).resize(resizeBackground);

	$('#logo').click(function() {
		$(".main").moveTo(1);
	});

	// $('a.page-scroll').bind('click', function(event) {
	// 	var $anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $($anchor.attr('href')).offset().top - 42
	// 	}, 1500, 'easeInOutExpo');
	// 	event.preventDefault();
	// });

	

	// Form: be a partner
	$('#partnerForm').on( "submit", function( event ) {
  		event.preventDefault();
  		var userInputSet = $(this).serializeArray();
  		var data = {};
  		for (var i=0;i<userInputSet.length;i++) {
  			data[userInputSet[i].name] = escapeHtml(userInputSet[i].value);
  		}

  		$.post("/api/contact/partner-reg", data, function(resp) {
			if (resp.status != 0) {
				alert(resp.message);
				return;
			}
  			// do whatever you want after getting response
		 	alert("Thank you for your response, and we will contact you soon!")
		 	// clean form input
		 	$('#partnerForm').each(function(){ 
			    this.reset();
			});
		});
	});


	// Form: feedback
	$('#feedbackForm').on( "submit", function( event ) {
  		event.preventDefault();
  		var userInputSet = $(this).serializeArray();
  		var data = {};
  		for (var i=0;i<userInputSet.length;i++) {
  			data[userInputSet[i].name] = escapeHtml(userInputSet[i].value);
  		}

  		$.post("/api/contact/feedback", data, function(resp) {
			if (resp.status != 0) {
				alert(resp.message);
				return;
			}
  			// do whatever you want after getting response
		 	alert("Thank you for your feedback, we value your opinion and will process it ASAP!");
		 	// clean form input
		 	$('#feedbackForm').each(function(){ 
			    this.reset();
			});
		});
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

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}