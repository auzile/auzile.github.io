$(document).ready(function(){

    $(".divcontainer").hide();
    $(".projectdetail .jumbotron").hide();

	$('.card a').click(function(e){
		var target = "#" + $(this).data("target");
		e.preventDefault();
        $(".divcontainer").slideUp(function(){
               $(target).show().siblings("div").hide();
               $(".divcontainer").slideDown(); 
        });
    });

    $('.exit').click(function(){
    	$(".divcontainer").slideUp();
    });

});