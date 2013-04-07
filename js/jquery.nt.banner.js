$(document).ready(function() {
	//http://tympanus.net/codrops/2011/12/14/item-blur-effect-with-css3-and-jquery/
	//http://motyar.blogspot.no/2010/03/dream-night-animation-with-jquery.html
	var support = jQuery.support.opacity;
	var w = $(window).width();
	var gfx = $("#gfxContainer");
	$("#log").html("Denne animasjonen bruker opacity. Browseren din støtter dette? "+support);
	function log(m) {
		//l.append("<br>"+str);
		window.console && console.log(m) || alert(m); 
	}
	var menuArr = [
		{
			img: "img/danser_round_img.png",
			pos: [0, 720, 50, -50],
			url: "#danser",
			txt: "Magedanserinnen"
		},
		{
			img: "img/familie_round_img.png",
			url: "#familie",
			pos: [160, 560, 150, -10],
			txt: "Lottofamilien"
		},
		{
			img: "img/odds_round_img.png",
			url: "#odds",
			pos: [-40, 390, 100, -20],
			txt: "Årets ildsjel"
		},
		{
			img: "img/gull_round_img.png",
			url: "#gull",
			pos: [250, -50, 80, -40],
			txt: "Årets kommisjonær"
		},
		{
			img: "img/hadjik_round_img.png",
			url: "#Hadjik",
			pos: [200, 300, 140, -50],
			txt: "Selveste ski-filmen"
		}
	];
	var timer = null;
	var speeder = 3000;

	var init = function() {
		for (var i = 0; i < menuArr.length; i++) {
			var top = menuArr[i].pos[0];
			var left = menuArr[i].pos[1];
			var str = '<a href="#"><div data-nr="'+i+'" class="menuItem" style="top: '+top+'px; left: '+left+'px;">';
				str += '<div class="menuItem-btn hidden" data-nr="'+i+'" style="top: '+menuArr[i].pos[2]+'px; left: '+menuArr[i].pos[3]+'px;">';
				str += '<div class="play-btn">&nbsp;</div>';
				str += '<div class="play-txt play-txt-right">'+menuArr[i].txt+'<br>Se film</div></div>';
				str += '<div class="img"><img src="'+menuArr[i].img+'" /></div>';
				str += '</div></a>';
			gfx.append(str);

			if (support) {
				$(".menuItem").css("opacity", 0);
			} else {
				$(".menuItem-btn").hide();
			}
		}

		if (support) {
			$(".menuItem").stardust();
			timer = setInterval(loop, speeder);
		}

		$(".menuItem").on("mouseenter", function() {
			$(this).find(".menuItem-btn").each(function() {
				$(this).show(100);
			})
		});
		$(".menuItem").on("mouseleave", function() {
			$(this).find(".menuItem-btn").each(function() {
				$(this).hide(100);
			})
		});
		$(".menuItem").on("click", function() {
			log("> "+$(this).data("nr"));
		});

	}

	var i = 0;
	var loop = function() {
		gfx.find(".menuItem").each(function(j) {
			if (j == i) {
				//console.log("hit i "+i +" > "+j );
				$(this).show();
				$(this).animate({
					opacity: 1
				}, 1000);
			} else {
				$(this).animate({
					opacity: 0
				}, 500, function() {
					$(this).hide();
				});
			}
		});
		if (i < (menuArr.length-1)) {
			i++;
		} else {
			i = 0;
		}
	}

	init();
});

