$(document).ready(listo);



function listo() 
{
	$(".hamb").click(function(e) {
		e.preventDefault();
	$("header .container nav").toggleClass("open");
	$(".hamb i").toggleClass("fa-xmark");
	
	});

	$("header .container nav a").click(function(){

		$("header .container nav").removeClass("open");
		$(".hamb i").removeClass("fa-xmark");
		
		var dev = $(this).attr("href");

		$("html,body").animate({
			"scrollTop": $(dev).offset().top

		})
	})

}

