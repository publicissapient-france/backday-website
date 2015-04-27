function ($) {
				$("#menu1").on('click', function (event) {
			        event.preventDefault();

			        $('html,body').animate({scrollTop: $("#backday").offset().top}, 1600);
			    });
