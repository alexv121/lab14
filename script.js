$(document).ready(function(){
	/*$("header").backstretch.("images/winteraproaching.jpg");
	to attach to specific element but if you want the whole page html/body
	$.backstretch.min([
		"winteraproaching.jpg",
		"nightsky.jpg",
		"dawnapproaching.jpg",

		]),(duration:4000, fade: normal);*/
    (function ($) {
        $(document).ready(function () {
        	/*this one goes off text in html btwn divs*/
            $('.do-splitflap')
                    .splitFlap();

            $('.click-splitflap')
                    .splitFlap({
                        textInit:   'Click for more',
                        autoplay:   false,
                        onComplete: function () {
                            console.log('Done !');
                        }
                    })
                    .click(function () {
                        $(this).splitFlap('splitflap').animate();
                    });

            $('.empty-splitflap')
                    .splitFlap({
                        text: 'This is JS'
                    });

            var ratio = 0.5;
            $('.resized-splitflap')
                    .splitFlap({
                        charWidth:  200 * ratio,
                        charHeight: 400 * ratio,
                        imageSize:  (10000 * ratio) + 'px ' + (400 * ratio) + 'px'
                    });
        });
    })(jQuery);	
/*$('.demo').splitFlap({
	image: "images/chars.png",
	imageSize: " ",
	charsMap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,!?#@()+-=",
	charWidth: 50,
	charHeight: 100,
	charSubstitute: " ",
	padDir: "left",
	padChar: " ",
	speed: 3,
	speedVariation: 2,
	text: " ",
	textInit: " ",
	autoplay: true,
	onComplete: function(){}
});*/
});

