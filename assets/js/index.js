$(document).ready(function(){
	

	$(".resume-container").hover(function() {
		var numer = ["one","two","three","four","five","six"];
		var color = ["#1fcecb", "#33cc33", "#ff6600", "#ff5050", "#ff66cc", "#3333ff", "#1fcecb"];
		var b = $("#" + $(this).attr('id') + "-dne").css("color");
		$("#" + $(this).attr('id')).css("color","black");
		$("#" + $(this).attr('id')).css("background-color","white");
		$("#background-overlay").css("background", b);
		$(".resume-spacer").css("color", "white");
		$("#name").css("color", "white");
	});

});
