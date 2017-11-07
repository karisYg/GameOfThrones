$(document).ready(function() {

	console.log(localStorage.getItem("playerone"));
	// var playeronename = prompt("Enter Player One name");
	// $("#userone").text(playeronename);
	// var playertwoname= prompt("Enter Player Two name");
	// $("#usertwo").text(playertwoname);

	$("#inputplayerone").val("");
	$("#inputplayertwo").val("");
	$("#inputplayerone").click(function(){
		$(this).val("");
		localStorage.removeItem("playerone");
	});
	$("#inputplayertwo").click(function(){
		$(this).val("");
		localStorage.removeItem("playerone");

	});
	var playerone =$("#inputplayerone");	
	$("#spanplayerone").click(function () {
		var playerone =$("#inputplayerone");
		playerone=playerone.val();
		localStorage.setItem("playerone", playerone);		
		$("#userone").text(playerone);
	});
	$("#rollplayerone").click(function(){
		var gamerone = localStorage.getItem("playerone");
		if (gamerone===null) {
			alert("player one is required");
			
		}else{
			var randone = Math.floor((Math.random()*6)+1);
			$("#rolloneresult").text(randone);
			//alert(randone);
		}
	});
	$("#spanplayertwo").click(function(){
		var playertwo =$("#inputplayertwo").val();
		$("#usertwo").text(playertwo);
	});
	
});






