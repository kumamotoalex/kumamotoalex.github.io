$(document).ready(function(){
	var color = ["#1fcecb", "#33cc33", "#ff6600", "#ff5050", "#ff66cc", "#3333ff", "#1fcecb", "#6600cc", "#ccff33", "#ff3300"];
	var i = 0;
	function background() {
		var els = $("#container").children();
		if (els.length >= 1) {
			$('#bcircle1').css({
    			background: $(els.get(0)).children('.circle').css("background-color")
			});
		}
		if (els.length >= 2) {
			var color1 = $(els.get(0)).children('.circle').css("background-color");
			var color2 = $(els.get(1)).children('.circle').css("background-color");
			$('#bcircle2').css({
    			background: color2
			});

		}
		if (els.length > 2) {
			var color3 = $(els.get(2)).children('.circle').css("background-color");
			$('#bcircle3').css({
    			background: color3
			});

		}
	}

	$("body").on("click", ".up-arrow",function(){
		var prior = $(this).parent().parent();
		var object = prior.prev();
		object.insertAfter(prior);
		background();
	});
	$("body").on("click", ".down-arrow", function(){
		var prior = $(this).parent().parent();
		var object = prior.next();
		object.insertBefore(prior);
		background();
	});
	$("#plus").click(function(){
		$("#create-box").css("visibility","visible");
		$("#modal-overlay").css("z-index", "30");
	});
	$("#modal-overlay").click(function() {
		$("#create-box").css("visibility","hidden");
		$("#modal-overlay").css("z-index", "-20");
	});
	$("#create").click(function() {
		var title = $("#info-box").val();
		$("#container").append("<li class = 'priority'><div class = 'sidebar' id = '" + title + "'>" + title + "<\/div><div class = 'circle' id = '" + title + "1'><div class = 'up-arrow'><\/div><div class = 'down-arrow'><\/div><\/div><\/li>");
		var y = Math.floor(Math.random()*10);
		$("#" + title).css("background-color", color[y]);
		$("#" + title + "1").css("background-color", color[y]);
		$("#info-box").val("");
		$("#modal-overlay").css("z-index", "-20");
		$("#create-box").css("visibility","hidden");
		background();
	});
});
