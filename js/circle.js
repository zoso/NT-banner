/*var t_mc:MovieClip = this.createEmptyMovieClip("t_mc", 1);
var angle:Number = 0;
var centerX:Number = Stage.width/2;
var centerY:Number = Stage.height/2;
var radius:Number = 80;
var speed:Number = .7;
var numBalls:Number = 10;
var a2:Number = 0;

function init() {
	for (var i = 0; i < numBalls; i++) {
		var mc:MovieClip = t_mc.attachMovie("_ball", "ball"+i, i);
		mc._x = i * 23;
		mc._y = centerY + Math.sin(a2) * radius;
		mc._alpha =( i * 10)+10
		mc.n_txt.text = i;
		a2 += speed;
		mc.onEnterFrame = function() {
			this._x = centerX + Math.cos(angle) * radius;
			this._y = centerY + Math.sin(angle) * radius;
			//angle += speed;
			//this._x = Math.cos(angle*Math.PI/180)*radius+centerX;
			//this._y=Math.sin(angle*Math.PI/180)*radius+centerY;
			angle+=speed;
		}
	}
}
init();


var sunGravityX:Number = sun.x + (sun.width * .5) / 2;
var sunGravityY:Number = sun.y + (sun.height * .5) / 2;

var sinEarth = 0;
var cosEarth = 0;
var sinMoon = 0;
var cosMoon = 0;
var sunOrbitDiameter:Number = 100;
var earthOrbitDiameter:Number = 24;
var orbitSpeed1:Number = 4;
var orbitSpeed2:Number = 4;

addEventListener(Event.ENTER_FRAME, onEnterFrame);
function onEnterFrame(event:Event):void {
	
	var earthGravityX:Number = earth.x + (earth.width * .5) / 2;
    var earthGravityY:Number = earth.y + (earth.height * .5) / 2;
	
	sinEarth += .001;
	cosEarth += .001;
	sinMoon += .01;
	cosMoon += .01;
    earth.x =  Math.sin(sinEarth * orbitSpeed1) * sunOrbitDiameter + sunGravityX;
    earth.y = Math.cos(cosEarth * orbitSpeed1) * sunOrbitDiameter + sunGravityY;
    moon.x =  Math.sin(sinMoon * orbitSpeed2) * earthOrbitDiameter + earthGravityX;
    moon.y = Math.cos(cosMoon * orbitSpeed2) * earthOrbitDiameter + earthGravityY;
}
*/



$(document).ready(function() {
	var dim = 270;


	var w = $(window).width();
	var menuArr = [
		{
			img: "img/danser_round_img.png",
			height: 263,
			width: 263,
			pos: [-30,690, 50, -50],
			url: "#danser",
			txt: "Magedanserinnen"
		},
		{
			img: "img/familie_round_img.png",
			height: 263,
			width: 263,
			url: "#familie",
			pos: [90, 560, 50, -50],
			txt: "Lottofamilien"
		}
		,
		{
			img: "img/hadjik_round_img.png",
			height: 263,
			width: 263,
			url: "#Hadjik",
			pos: [250, 430, 50, -50],
			txt: "Selveste ski-filmen"
		},
		{
			img: "img/odds_round_img.png",
			height: 263,
			width: 263,
			url: "#odds",
			pos: [-50, 500, 100, 200],
			txt: "Årets ildsjel"
		},
		{
			img: "img/gull_round_img.png",
			height: 263,
			width: 263,
			url: "#gull",
			pos: [100, 450, 50, 200],
			txt: "Årets kommisjonær"
		}
	];
	var gfx = $("#gfxContainer");
	var sin = 0;
	var cos = 0;
	var orbitSpeed = 10;
	var speeder = 3000;
	var angle = 0;
	var speed = 2;
	var a2 = 0;
	var isLooping = true;
	var timer = null;
	var playPtn = (263-100)/2;
	var init = function() {
		for (var i = 0; i < menuArr.length; i++) {
			//var top = 250/4 + (Math.sin(a2) * 100);
			//var left = w/10 + (i * 180);//centerX + Math.sin(angle) * radius;
			//a2 += speed;
			var top = menuArr[i].pos[0];
			var left = menuArr[i].pos[1];
			var str = '<a href="#"><div data-nr="'+i+'" class="menuItem" style="top: '+top+'px; left: '+left+'px; opacity: 0.1;">';
				str += '<div class="menuItem-btn" data-nr="'+i+'" style="opacity: 0; top: '+menuArr[i].pos[2]+'px; left: '+menuArr[i].pos[3]+'px;">';
				str += '<div class="play-btn">&nbsp;</div>';
				str += '<div class="play-txt play-txt-right">'+menuArr[i].txt+'<br>Se film</div></div>';
				str += '<div class="img"><img src="'+menuArr[i].img+'" /></div>';
				str += '</div></a>';
			gfx.append(str);
		}

		/*$(".menuItem").hover(
		function() {
			$(this).css({
				"z-index": 10
			});
			//clearInterval(timer);
		}, 
		function() {
			//timer = setInterval(loop, speeder);
			$(this).css({
				"z-index": 1
			});
		});*/

		
		$(".menuItem").mouseenter(function() {
			$(this).find(".menuItem-btn").each(function() {
				$(this).animate({
					opacity: 1
				})
			})
		});

		$(".menuItem").mouseleave(function() {
			$(this).find(".menuItem-btn").each(function() {
				$(this).animate({
					opacity: 0
				})
			})
		});
		
		$(".menuItem").stardust();
	}

	//$("#starsContainer").stardustBG({ant: 200});

	/*function SVG(tag) {
	   return document.createElementNS('http://www.w3.org/2000/svg', tag);
	}*/


	/*var $svg = $('#circles');
	$(SVG('circle'))
		.attr('cx', 130)
	    .attr('cy', 75)
	    .attr('r', 50)
	    .attr('fill', 'white')
	    .attr('opacity', '0,6')
	    .appendTo($svg);

	$("#circle").animate({
		'cx': 200
	}, 2000);*/
	/*function addSvg(div, element,eldict) { 
	   el = $(document.createElementNS('http://www.w3.org/2000/svg', element));
	   el.attr(eldict).appendTo(div);
	}
	

	addSvg('#mySVG', 'circle', {cx: 180, cy:110, r:100, fill: "#fff"});*/


	var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }


    var current = 0;
    var old = 0;
    var looper = function() {
    	$("#mySVG").animate({
    		cx: 400
    	})
    	gfx.find(".menuItem").each(function() {
    		var nr = $(this).data("nr");
    		if (nr == current) {
    			//console.log("nr: "+nr+" > "+current);
    			$(this).animate({
    				opacity: 1
    			}, 2500, function() {
    				$(this).delay(1000).animate({
    					opacity: 0.1
    				}, 1000)
    			});
    		}
    	});

    	if (current < (gfx.children().length-1)) {
    		current++;
    	} else {
    		current = 0;
    	}
    }

	//old loop
	var loop = function() {
		var i = 0;
		gfx.find(".menuItem").each(function() {
			//$(this).stardust();
			sin += .002;
			cos += .002;
			var l =  Math.sin(sin * orbitSpeed) * dim + 100 * i;
			var t = Math.cos(cos * orbitSpeed) * dim + 100 * i;
			i++;
			/*var l = (centerX+100) + Math.cos(angle) * 720;
			if (l > 940) l = (940-270);
			if (l < 0) l = 10;
			var t = centerY/2 + Math.sin(angle) * randomNr(0, 100);
			*/var r = randomNr(0, 10);
			var o = 1;//1 - (r/10);

			$("#log").html("t: "+t+" > "+l+" > "+o);
			$(this).animate({
				top: t,
				left: l,
				"z-index": r,
				opacity: o 
			})
			angle += speed;
		})
	}
	
	//
	

	init();
	timer = setInterval(looper, speeder);
	looper();
	/*
	

	*/
});