jQuery(function ($) {
	$('.showprof button').click(function () {
		if ($(this).find('span').hasClass('glyphicon-plus')) {
			$(this).html('<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Hide Profile Photo');
		} else {
			$(this).html('<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Show Profile Photo');
		}
	});
	
	
	
	$(window).ready(function() { resize(); });
	$(window).resize(function() { resize(); });


});


$(function() {
   var aboutContainer = $("#myinfo");
   var workContainer = $("#projects");
   
   var resize=function() {
      var width = $("#aboutsec").width();
      var aboutItems = 1;
	  var projectItems = 2;

        if (width > 940) {
          aboutItems = 2;
		  projectItems = 4;
        } else if (width > 550) {
		  aboutItems = 1;
		  projectItems = 3;
        }

      	$("#aboutnext").off().click(function() {
			$("#myinfo").dragend("left");
			$("#aboutprev").css("display","block");
		});
		
		$("#aboutprev").click(function() {
			$("#myinfo").dragend("right");
		});
		
		$("#worknext").off().click(function() {
			$("#projects").dragend("left");
			$("#workprev").css("display","block");
		});
		
		$("#workprev").click(function() {
			$("#projects").dragend("right");
		});
		
        aboutContainer.dragend({
          itemsInPage: aboutItems,
          pageClass: "entry",
		  afterInitialize: function() {
			  $(".entry",aboutContainer).css("height","");
		  }
        });
		
		workContainer.dragend({
          itemsInPage: projectItems,
          pageClass: "entry",
 		  afterInitialize: function() {
			  $(".entry",workContainer).css("height","");
		  }
       });
   }
   
     $(window).ready(function() { resize(); });
	 $(window).resize(function() { resize(); });

    });
