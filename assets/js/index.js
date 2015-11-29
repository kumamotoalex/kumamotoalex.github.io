$(document).ready(function(){
	

	$(".resume-container").hover(function() {
		var b = $("#" + $(this).attr('id') + "-dne").css("color");
		$("#" + $(this).attr('id')).css("color","black");
		$("#" + $(this).attr('id')).css("background-color","white");
		$("#background-overlay").css("background", b);
		$(".resume-spacer").css("color", "white");
	});

});
