$(document).ready(function() {
	var menuArr = [
		{
			img: "img/danser_round_img.png",
			height: 263,
			width: 263,
			pos: [-30,730, 50, -50],
			url: "#danser",
			txt: "Magedanserinnen"
		},
		{
			img: "img/familie_round_img.png",
			height: 263,
			width: 263,
			url: "#familie",
			pos: [170, 600, 50, -50],
			txt: "Lottofamilien"
		},
		{
			img: "img/odds_round_img.png",
			height: 263,
			width: 263,
			url: "#odds",
			pos: [-50, 400, 100, 200],
			txt: "Årets ildsjel"
		},
		{
			img: "img/gull_round_img.png",
			height: 263,
			width: 263,
			url: "#gull",
			pos: [260,0, 50, 200],
			txt: "Årets kommisjonær"
		},
		{
			img: "img/hadjik_round_img.png",
			height: 263,
			width: 263,
			url: "#Hadjik",
			pos: [250, 330, 50, -50],
			txt: "Selveste ski-filmen"
		}
	];

	//test
	var speed1 = 200;
	var speed2 = 1000;
	var playPtn = (263-100)/2;
	
	var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }

	function getPlayBtnPos() {
		var arr = [randomNr(0, 100), randomNr(0, 100)];
		return arr;
	}

	var bc = $("#bannerContainer");
	var gfx = $("#gfxContainer");

	var textArr = ["dette er første", "dette er andre (2)", "tredje kommer her"];
	var i = 0;

	/*var rotate = function() {
		if (i <= (textArr.length-1)) {
			i = i+1;
		} else {
			i = 0;
		}
		//console.log("> i "+i+" > "+textArr.length);
		gfx.html(textArr[i] + " > "+i);
		setInterval(rotate, 2000);
	}
	rotate();*/

	(function loop() {
    	setTimeout(function () {
	        gfx.html('<img src="'+menuArr[i].img+'" />' + " > "+i);
	        if (i < (menuArr.length-1)) {
				i = i+1;
			} else {
				i = 0;
			}
			//console.log("> i "+i+" > "+textArr.length);
			
	        loop();
	    }, 1000);
	})();


	/*for (var i = 0; i < menuArr.length; i++) {
		var l = menuArr[i].pos[1];
		var t = menuArr[i].pos[0];
		var c = "play-txt-left";
		if (l < 200) {
			//btnLeft = 300;
			var c = "play-txt-right";
		}

		if (t < 50) {
			btnTop = 100;
		}
		var str = '<a href="#" data-url="'+menuArr[i].url+'"><div class="menuItem" style="top: '+menuArr[i].pos[0]+'px; left: '+menuArr[i].pos[1]+'px;">';
			str += '<div class="menuItem-over">';
			str += '<div class="img"><img src="'+menuArr[i].img+'" /></div>';
			str += '<div class="menuItem-btn" data-nr="'+i+'" style="top: '+playPtn+'px; left: '+playPtn+'px;">';
			str += '<div class="play-btn">&nbsp;</div>';
			str += '<div class="play-txt '+c+'">'+menuArr[i].txt+'<br>Se film</div>';
			str += '</div></div></div></a>';
		bc.append(str);
	}*/

	//left und right placement 
	$("#bannerContainer a").on("click", function(e) {
		console.log("> klikk > "+$(this).data("url"));
	});

	/*
	$(".menuItem-over").stardust();
	$(".menuItem-btn").css("opacity", 0);

	$(".menuItem").hover(
		function() {
			$(this).stop().animate({
				opacity: 1
			}, speed1, function() {
				$(this).find(".menuItem-over").stop().animate({
					opacity: 1
				}, function() {
					var nr = $(this).find(".menuItem-btn").data("nr");
					var t = menuArr[nr].pos[2];
					var l = menuArr[nr].pos[3];
					$(this).find(".menuItem-btn").stop().animate({
						opacity: 1,
						left: l,
						top: t
					}, speed1)
				})
			})
		},
		function() {
			$(this).stop().animate({
				opacity: 0.3
			}, speed1, function() {
				$(this).find(".menuItem-over").stop().animate({
					opacity: 0.3
				}, function() {
					$(this).find(".menuItem-btn").stop().animate({
						opacity: 0,
						top: playPtn+"px",
						left: playPtn+"px"
					}, speed1)
				})
			})
		}
	);*/
});

