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
		}
		,
		{
			img: "img/hadjik_round_img.png",
			height: 263,
			width: 263,
			url: "#Hadjik",
			pos: [250, 330, 50, -50],
			txt: "Selveste ski-filmen"
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
		}
	];
	var gfx = $("#gfxContainer");
	var sin = 0;
	var cos = 0;
	var orbitSpeed = 10;
	var speeder = 200;
	var angle = 0;
	var speed = 2;
	var a2 = 0;
	var init = function() {
		for (var i = 0; i < menuArr.length; i++) {
			var top = 250/2 + (Math.cos(a2) * 100);
			var left = w/10 + (i * 280);//centerX + Math.sin(angle) * radius;
			a2 += speed;
			var str = '<div class="menuItem" style="top: '+top+'px; left: '+left+'px; opacity: 1">';
				str += '<div class="img"><img src="'+menuArr[i].img+'" /></div>';
				str += '</div>';
			gfx.append(str);
		}

		$(".menuItem").hover(
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
		}
		)
	}

	function SVG(tag) {
	   return document.createElementNS('http://www.w3.org/2000/svg', tag);
	}

	var $svg = $('#circles');
	$(SVG('circle'))
		.attr('cx', 130)
	    .attr('cy', 75)
	    .attr('r', 50)
	    .attr('fill', 'white')
	    .attr('opacity', '0,6')
	    .appendTo($svg);

	$("#circle").animate({
		'cx': 200
	}, 2000);

	var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }
	
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
	
	//var timer = setInterval(loop, speeder);
	

	init();
});