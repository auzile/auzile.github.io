$(document).ready(function(){

    $(".quality").hide();
    $(".values").hide();

	$('.textbtn a').click(function(e){
		var target = "#" + $(this).data("target");
        $(target).fadeIn().siblings("div").hide();     
    });
});