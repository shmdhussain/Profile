jQuery(function ($) {
	$('.showprof button').click(function () {
		if ($(this).find('span').hasClass('glyphicon-plus')) {
			console.log("hi");
			$(this).html('<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Hide Profile Photo');
			$("#profphoto").css({"display":"block"});
		} else {
			console.log("bye");
			$(this).html('<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Show Profile Photo');
			$("#profphoto").css({"display":"none"});
		}
	});
	
	//Automatic date Calculation from the strat date in 
	$("[data-startdate]").each(function(){
		var startdateData=$(this).data('startdate');
		var startdate=new Date(startdateData);
		var todaydate=new Date();
		//Set 1 year in milliseconds
		var one_year=1000*60*60*24*365;
		var requireddate=Math.ceil(todaydate.getTime()-startdate.getTime())/one_year;
		$(this).html(requireddate.toFixed(1));
	});

});