

var spanoutput= document.getElementById("output");

$(document).ready(function() {
	var playerone =document.getElementById("inputplayerone").value;
	var playertwo =document.getElementById("inputplayertwo").value;

	$("#inputplayerone").click(function(){
		$(this).val("");
	});

	$("#inputplayertwo").click(function(){
		$(this).val("");

	});


	$("span.playerone").click(function () {
		alert(playertwo);
		$("#userone").text("playerone"+playerone);


	});


	
});