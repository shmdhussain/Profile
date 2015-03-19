jQuery(function ($) {
	$('.showprof button').click(function () {
		if ($(this).find('span').hasClass('glyphicon-plus')) {
			$(this).html('<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Hide Profile Photo');
		} else {
			$(this).html('<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Show Profile Photo');
		}
	});

});