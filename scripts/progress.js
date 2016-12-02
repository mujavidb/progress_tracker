$(document).ready(function(){
	var config = {
		axis: "x",
		containment: "parent",
		grid: [60,60]
	};
	$(".story_bar").draggable(config);
	$(".story_bar").resizable(config);
});