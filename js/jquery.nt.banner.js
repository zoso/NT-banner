$(document).ready(function() {
	for(var i in console) {
	    console.log(i);
	}
	var support = jQuery.support.opacity;
	var w = $(window).width();
	var gfx = $("#gfxContainer");
	log("Denne animasjonen bruker opacity. Browseren din støtter dette? "+support);
	function log(m) {
		window.console && console.log(m);// || alert(m); 
	}
	var menuArr = [
		{
			img: "img/film-bilde-2.png",
			pos: [0, 720, 50, -50],
			url: "#danser",
			txt: "Magedanserinnen"
		},
		{
			img: "img/film-bilde-3.png",
			url: "#lottofamilie",
			pos: [160, 560, 150, -10],
			txt: "Lottofamilien"
		},
		{
			img: "img/film-bilde-4.png",
			url: "#ildsjel",
			pos: [-40, 390, 100, -20],
			txt: "Årets ildsjel"
		},
		{
			img: "img/film-bilde-5.png",
			url: "#kommisjonær",
			pos: [250, -50, 80, -40],
			txt: "Årets kommisjonær"
		},
		{
			img: "img/film-bilde-1.png",
			url: "#bjorgen",
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
				$(".menuItem-btn").css("opacity", 0);
				$(".menuItem").hide();
			} else {
				$(".menuItem-btn").hide(); //ie8
			}
		}

		if (support) {
			$(".menuItem").stardust();
			$("#starsContainer").stardustBG({ant: 50, loop: true});
			timer = setInterval(loop, speeder);
		}

		$(".menuItem").on("mouseenter", function() {
			$(this).find(".menuItem-btn").each(function() {
				if (support) {
					$(this).show().animate({
						opacity: 1
					}, 1000);
				} else {
					$(this).show(100);
				}
				
			})
		});
		$(".menuItem").on("mouseleave", function() {
			$(this).find(".menuItem-btn").each(function() {
				if (support) {
					$(this).animate({
						opacity: 0
					}, 200, function() {
						$(this).hide();
					})
				} else {
					$(this).hide(100);
				}
			})
		});
		$(".menuItem").on("click", function() {
			var id = parseInt($(this).data("nr"));
			log("> "+id+" > "+menuArr[id].url);
		});
	}

	var i = 0;
	var loop = function() {
		gfx.find(".menuItem").each(function(j) {
			if (j == i) {
				$(this).show().stop().animate({
					opacity: 1
				}, 1000);
			} else {
				$(this).animate({
					opacity: 0
				}, 1500, function() {
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

