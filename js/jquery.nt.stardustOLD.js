(function($){
    
   

    var classArr = ["star_small", 
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
        var r = randomNr(0,classArr.length-1);
        return classArr[r];
    } 

    var starArr = [];
    function addStars(el, x, y) {
        var ant = randomNr(10, 50);
        
        starArr = [];
        var startLeft = x;//263/2;
        var startTop = y; //50 = size of sprite
        var str = '<div class="starsContainer">';
        for (var i = 0; i < ant; i++) {
            var l = randomNr(-10, 200);
            var t = randomNr(-10, 200);
            var c = getClass();
            starArr.push({left: l, top: t, star: c});
            //str += '<div class="'+getClass()+'" style="left: '+l+'px; top: '+l+'px;">&nbsp;</div>';
            str += '<div class="'+c+'" style="left: '+startLeft+'px; top: '+startTop+'px;">&nbsp;</div>';
        }
        //str += '<div class="star_cluster" style="left: -150px; top: 50px;"></div>';
        str += '</div>';
        //console.log("addStars "+ant+" > "+str);
        el.append(str);
        doSomeAni(el);
    }

    function doSomeAni(el) {
        //console.log("doSomeAni -> "+starArr.length);
        var s = el.find(".starsContainer");
        var ant = s.children().length-1;
        //console.log("cont-> "+s.children().length+ " > "+ant);
        
        var list = s.children().not('.star_cluster');
        //console.log("list "+list.length);
        list.each(function(i, elm) {
            //console.log(">  "+$(elm)+" > "+i);
            $(elm).animate({
                left: starArr[i].left+"px",
                top: starArr[i].top+"px"
            }, randomNr(100, 2000), function() {
                $(this).animate({
                    opacity: 0,
                    left: randomNr(0, 270),
                    top: -100
                })
            })
        });



        /*for (var i = 0; i < starArr.length; i++) {
            // s.each(function() {
                var c = '.'+starArr[i].star;
                console.log("-----> "+c+ " > "+i);
                var div = $(this).find(c);//("left", starArr[i].left+"px;");
                //$(this).find(c).css("top", starArr[i].top+"px;")
                div.animate({
                    left: starArr[i].left+"px",
                    top: starArr[i].top+"px"
                }, 100);
            // });
        }*/

        


        /*
        animate({
                left: starArr[i].left+"px;",
                top: starArr[i].top+"px;"
            }, 400);

        

        for (var i = 0; i < starArr.length; i++) {
            var c = '.'+starArr[i].star;
        }
        */
    }

    function removeStars(el) {
        el.find(".starsContainer").remove();
    }

    var randomNr = function(min, max) {
        return Math.floor(Math.random() * (max - (min) + 1)) + (min);
    }

    //Default settings
    var defaultSettings = {
        ant: 200,
        loop: false
    };

    //init
    $.fn.stardustBG = function(settings) {
        defaultSettings = $.extend({}, defaultSettings, settings || {});
        var container = this;
        var w = $(window).width();
        var startLeft = randomNr(10, (w-100));
        var startTop = 450; 
        var str = '';
        var o = 1;
        if (defaultSettings.loop == true) {
            o = 0;
        }
        for (var i = 0; i < defaultSettings.ant; i++) {
            var l = randomNr(10, (w-100));
            var t = randomNr(0, 400);
            var c = getClass();
            str += '<div class="'+c+'" style="left: '+l+'px; top: '+t+'px; opacity: '+o+'">&nbsp;</div>';
        }
        container.append(str);
        
        var starloop = function() {
            container.children().each(function(i){
                if ($(this).attr('style').indexOf('left') > -1) {
                    //$(this).css('left', 100);
                    var l = parseInt($(this).css('left'));
                    var t = parseInt($(this).css('top'));
                    var r = randomNr(-50, 50);
                    $(this).animate({
                        left: l+(r),
                        top: t+(r)
                    }, randomNr(10, 3000))
                    //console.log("-> "+$(this).css('left'))
                }
            });
        }
        if (defaultSettings.loop == true)
            var loopTimer = setInterval(starloop, 4000);
    }



    var element;
    var speed = 2000;
    var ok = true;
    $.fn.stardust = function() {
        element = this;
        // var parentOffset = $(this).offset();
        // render();
        // var x = 0;//Math.round(parentOffset.left);
        // var y = 300;//randomNr(0, 270);//Math.round(parentOffset.top);
        // addStars($(this), x, y);
        /*element.hover(
            function(e) {
                var parentOffset = $(this).offset();
                var x = Math.round(e.pageX-parentOffset.left);
                var y = Math.round(e.pageY-parentOffset.top);
                addStars($(this), x, y);    
            }, 
            function(e) {
                removeStars($(this));
            }
        );*/
        element.mouseenter(function(e) {
            var parentOffset = $(this).offset();
            var x = Math.round(e.pageX-parentOffset.left)-20;
            var y = Math.round(e.pageY-parentOffset.top)-20;
            addStars($(this), x, y); 
        });
        element.mouseleave(function(e) {
            removeStars($(this));
        });
    }
    
        

})(jQuery);

/*
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
*/