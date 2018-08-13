$(document).ready(function(){

	$(".divcontainer").hide();

	$('.card a').click(function(e){
		var target = "#" + $(this).data("target");
		e.preventDefault();
        $(".divcontainer").slideUp('fast');
        $(target).slideDown('fast');	
    });

    $('.exit').click(function(){
    	$(".divcontainer").slideUp('fast');
    });

});