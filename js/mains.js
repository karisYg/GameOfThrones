swal({
  title: "You've Arrived!",
  text: "To Pig Dice Game!",
  icon: "success",
  button: "Yiss, Proceed!",
});
$(document).ready(function(){

	$("#labelone").text("Username");
	$("#labeltwo").text("Username");
	$("#totalscore").text("");

	//clean inputs
	$("#inputplayerone").click(function(){
		$(this).val("");
		$("#userone").text("...");
				$("#rolloneresult").text("...");
				$("#totalscore").text("...");
				all_score= [];
				total=0;
				$("#rollplayerone").show();		
	});


	$("#inputplayertwo").click(function(){
		$(this).val("");
		$("#usertwo").text("...");
				$("#rolltworesult").text("...");
				$("#totalscore2").text("...");
				all_score= [];
				total=0;
				$("#rollplayertwo").show();
	});
	

	//constructor
	function Player(name){
		this.name = name;
		this.turnscore=0;
		this.total=0
	}

	var all_score = [];

	Player.prototype.roll= function(){
		var rollscore =randomNum();
		if (rollscore===(1||6)) {

		
			rollscore=0;
			return 0;

		}else{
			
			all_score.push(rollscore);
			return rollscore;
		}
		
	};
	// Player.prototype.score=function(){
	// 	this.total =this.turnscore+this.total;
	// 	this.turnscore=0;
	// }


	function randomNum(){
		return Math.floor((Math.random() * 6) + 1);
	}

	//var karis = new Player("karis");


	



	// console.log("total is :" +score);


	//player one logic

	$("#spanplayerone").click(function() {
		var playerone = $("#inputplayerone").val();
		if (playerone==="") {
			document.getElementById("inputplayerone").focus();
			$("#labelone").css('color', 'red');
			$("#labelone").text("Player name is required");
		}else{
			$("#labelone").css('color', '#07c63f');
			$("#labelone").text("Current Player is.. *" +playerone+"*");
			$("#userone").text(playerone);
			//console.log("player one:" + playerone);	
				$("#rolloneresult").text("");
				$("#totalscore").text("");
				all_score= [];
				total=0;		
		}


	});
	//ends here
	//player two logic

	$("#spanplayertwo").click(function() {
		var playertwo = $("#inputplayertwo").val();
		if (playertwo==="") {
			document.getElementById("inputplayerone").focus();
			$("#labeltwo").css('color', 'red');
			$("#labeltwo").text("Player name is required");
		}else{
			$("#labeltwo").css('color', '#07c63f');
			$("#labeltwo").text("Current Player is.. *" +playertwo+"*");
			$("#usertwo").text(playertwo);
			console.log("player one:" + playertwo);	

				$("#rolltworesult").text("");
				$("#totalscore2").text("");
				all_score= [];
				total=0;			
		}

		// console.log("player two:" + playertwo);
	});

	//ends here

	$("#rollplayerone").click(function() {
		var playerone = $("#inputplayerone").val();
		if (playerone==="") {
			document.getElementById("inputplayerone").focus();
			$("#labelone").css('color', 'red');
			$("#labelone").text("Player name is required");
			$("#rolloneresult").text("*_*");			
		}else{
			$("#userone").text(playerone);
			var gamerone = new Player(playerone);
				var turnnow=gamerone.roll();
				 var total=0
				if (turnnow!=0) {

						all_score.forEach(function(onescore){
							 total+=onescore;

						});
				$("#rolloneresult").text(turnnow);
				$("#totalscore").text(total);
				}else{
					all_score= [];
					total=0;
					$("#rolloneresult").text(turnnow);
					$("#totalscore").text(total);
					$("#rollplayerone").hide();
					swal('Any fool can use a computer,You Lost!!');
				}
	

		}
		
		
	});

	//player two logic


	$("#rollplayertwo").click(function() {
		var playertwo = $("#inputplayertwo").val();
		if (playertwo==="") {
			document.getElementById("inputplayertwo").focus();
			$("#labeltwo").css('color', 'red');
			$("#labeltwo").text("Player name is required");
			$("#rolltworesult").text("*_*");				
		}else{
			$("#usertwo").text(playertwo);
			// $("#userone").text(playerone);
			var gamerone = new Player(playertwo);
				var turnnow=gamerone.roll();
				 var total=0
				if (turnnow!=0) {

						all_score.forEach(function(onescore){
							 total+=onescore;

						});
				$("#rolltworesult").text(turnnow);
				$("#totalscore2").text(total);
				}else{
					all_score= [];
					total=0;
					$("#rolltworesult").text(turnnow);
					$("#totalscore2").text(total);
					$("#rollplayertwo").hide();
					swal('Any fool can use a computer,You Lost!!');
				}
		}
		
	});



});