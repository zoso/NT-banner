$(document).ready(function() {
	//http://tympanus.net/codrops/2011/12/14/item-blur-effect-with-css3-and-jquery/
	//http://motyar.blogspot.no/2010/03/dream-night-animation-with-jquery.html
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
			pos: [0, 600, 50, -50],
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
			pos: [0,0, 50, 200],
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

	
	var playPtn = (263-100)/2;
	var w = $(window).width();
	
	var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }

	var bc = $("#bannerContainer");
	var gfx = $("#gfxContainer");
	var i = 0;
	var loopEnabled = true;
	var timer = null;


	/*(function loop() {
    	setTimeout(function () {
    		console.log("loopEnabled "+loopEnabled);
    		if (loopEnabled) {
	    		if (i < (menuArr.length-1)) {
	    			i++;
	    		} else {
	    			i = 0;
	    		}
	    		imageLoop(i);
	    		//console.log(i+" "+menuArr.length);
	        }
	        loop();	
	    }, 3000);
	})();*/
	
	function loop() {
		if (loopEnabled) {
    		if (i < (menuArr.length-1)) {
    			i++;
    		} else {
    			i = 0;
    		}
    		imageLoop(i);
    		//console.log(i+" "+menuArr.length);
        }
	}

	var imageLoop = function(i) {
		var top = 450-270;
		var left = w - 270;
		var t = randomNr(-100, 0);
		var l = randomNr(0, left);
		var str = '<div class="menuItem" style="top: '+t+'px; left: '+l+'px;">';
			str += '<div class="img"><img src="'+menuArr[i].img+'" /></div>';
			str += '</div>';
		gfx.html(str);
		$(".menuItem").stardust();

		/*$(".menuItem").animate({
			opacity: 1,
			top: top-50,
		}, 1000, function() {
			$(this).animate({
				opacity: 0,
				top: top
			}, 1000)
		});*/
		
		/*$(".menuItem").animate({
			opacity: 1,
			top: top-50
		}, 1000).delay(1000).animate({
			opacity: 0,
			top: top
		}, 1000);

		$(".menuItem").hover(
			function() {
				$(this).stop();
				loopEnabled = false;
			},
			function() {
				loopEnabled = true;
			}
		)*/

		/*
		jQuery('#viewport').on({
		    mouseenter: function() {
		        clearInterval( $(this).data('timer') );
		    },
		    mouseleave: function() {
		        $(this).data('timer', setInterval(function () {
		            jQuery('#next').trigger('click');
		        }, 1000));
		    }
		}).trigger('mouseleave');
		*/
		
		
		moveImg($(".menuItem"));

		$(".menuItem").hover(
			function() {
				clearInterval(timer);
				loopEnabled = false;
			},
			function() {
				moveImg($(this));
				loopEnabled = true;
				timer = setInterval(loop, 3000);
			}
		)
	}

	timer = setInterval(loop, 3000);

	var moveImg = function($el) {
		$el.animate({
			opacity: 1,
			top: 200,
		}, 1000, function() {
			$(this).animate({
				opacity: 0,
				top: top
			}, 1000)
		})
	}
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

