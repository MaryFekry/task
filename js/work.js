$(document).ready(function(){
	$("#comment").hide();
	var combtn=$("#commentbtn");
	combtn.on("click",function(){
		$("#comment").toggle();
	})
});