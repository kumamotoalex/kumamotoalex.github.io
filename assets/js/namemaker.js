$(document).ready(function(){
	

	$(".info-button").click(function() {
		var x = $(".info-box").val();
		var result = "";
		var arrlow = ["a","e","i","o","u","ea","oo","ou","ee","ai"];
		var arrhigh = ["A","E","I","O","U"];
		for (i = 0; i < x.length; i++) {
			var c = x.charAt(i);
			if (jQuery.inArray(c, arrlow) != -1 || jQuery.inArray(c, arrhigh) != -1) {
				var index = Math.floor(Math.random() * 10);
				result += arrlow[index];
				
			} else {
				result += c;
			}
		}
		$("#right-side").text(result);
	});

	$(".info-box").keyup(function(event){
    if(event.keyCode == 13){
        $(".info-button").click();
    }
});
	
});