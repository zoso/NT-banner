(function($){
    var starClassArr = ["star_small", 
                    "star_small1", 
                    "star_small2", 
                    "star_small3", 
                    "star_small4", 
                    "star_small5", 
                    "star_small6", 
                    "star_small7", 
                    "star_small8",
                    "star_small9",
                    "star_small10",
                    "star_small11",
                    "star_small12",
                    "star_small13"
                    ];
    
    function getClass() {
        var r = randomNr(0,starClassArr.length-1);
        return starClassArr[r];
    }

    var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }

    var starArr = [];
    function addStars(el, x, y) {
        var ant = randomNr(defaultSettings.min, defaultSettings.max);
        starArr = [];
        var startLeft = x;
        var startTop = y;
        var str = '<div class="starsContainer">';
        for (var i = 0; i < ant; i++) {
            var l = randomNr(-10, 200);
            var t = randomNr(-10, 200);
            var c = getClass();
            starArr.push({left: l, top: t, star: c});
            str += '<div class="'+c+'" style="left: '+startLeft+'px; top: '+startTop+'px;">&nbsp;</div>';
        }
        str += '</div>';
        el.append(str);
        doSomeAni(el);
    }

    function doSomeAni(el) {
        var s = el.find(".starsContainer");
        var ant = s.children().length-1;
        var list = s.children().not('.star_cluster');
        list.each(function(i, elm) {
            $(elm).animate({
                left: starArr[i].left+"px",
                top: starArr[i].top+"px"
            }, randomNr(100, 2000), function() {
                $(this).animate({
                    opacity: 0,
                    left: randomNr(0, 270),
                    top: -10
                })
            })
        });
    }

    function removeStars(el) {
        el.find(".starsContainer").remove();
    }

    //Default settings
    var defaultSettings = {
        min: 10,
        max: 60,
        speed: 2000
    };

    var defaultBgSettings = {
        ant: 20,
        loop: false
    };

    //init
    $.fn.stardustBG = function(settings) {
        defaultBgSettings = $.extend({}, defaultBgSettings, settings || {});
        var container = this;
        var w = $(window).width();
        var startLeft = randomNr(10, (w-100));
        var startTop = 450; 
        var str = '';
        var o = 1;
        if (defaultBgSettings.loop == true) {
            o = 1;
        }
        for (var i = 0; i < defaultBgSettings.ant; i++) {
            var l = randomNr(10, (w-100));
            var t = randomNr(0, 400);
            var c = getClass();
            str += '<div class="'+c+'" style="left: '+l+'px; top: '+t+'px; opacity: '+o+'">&nbsp;</div>';
        }
        container.append(str);
        
        var starloop = function() {
            container.children().each(function(i) {
                if ($(this).attr('style') != undefined) {
                    //var l = parseInt($(this).css('left'));
                    //var t = parseInt($(this).css('top'));
                    var o = randomNr(1,10)/10;
                    //var l = randomNr(10, 150);
                    //console.log("r: "+r+" > "+(l+(r)));
                    var l = randomNr(10, (w-100));
                    var t = randomNr(0, 400);
                    //if (l+(r) > 900) l = 100;
                    $(this).animate({
                        left: l,
                        top: t,
                        opacity: o
                    }, randomNr(10, 3000))
                }
            });
        }
        if (defaultBgSettings.loop == true)
            var loopTimer = setInterval(starloop, 4000);
    };

    var element;
    var speed = 2000;
    
    $.fn.stardust = function(settings) {
        defaultSettings = $.extend({}, defaultSettings, settings || {});
        element = this;
        speed = defaultSettings.speed;
        element.mouseenter(function(e) {
            var parentOffset = $(this).offset();
            var x = Math.round(e.pageX-parentOffset.left)-20;
            var y = Math.round(e.pageY-parentOffset.top)-20;
            addStars($(this), x, y); 
        });
        element.mouseleave(function(e) {
            removeStars($(this));
        });
    };
})(jQuery);