$(document).ready(function () {
 	$(".title").click(function(a){
 		$(".content").removeClass("show")
 		$(this).find("+ .content").addClass("show")
	 })		
 })





