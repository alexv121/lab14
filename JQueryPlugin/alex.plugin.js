(function($){
   $.fn.boldlyToggle = function(){
   		this.splitFlap({
   			textInit:   'Click for more',
	   		autoplay:   false,
		    onComplete: function () {
		    	console.log('Done !');
		    	}
		    }).click(function () {
		        $(this).splitFlap('splitflap').animate();
		    });

	    }); 
	   	return this
	};
})(jQuery);