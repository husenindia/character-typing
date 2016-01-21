/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-21-2016 : (DF mm-dd-yyyy)
/*************************/
(function ($) {
	$.fn.cstTextTypeEffect = function(options){
		var settings = {
			speedOfTypeng:100,
			blinker:true			
		};
		return this.each(function(){
			if(options)
			{
				$.extend(settings,options);
			}
			"use strict";
			var $cstTextObj;
			var textofObj;
			var lengthOfText;		
			textTimeout();
			var counter=0;
			$cstTextObj=$(this);
			textofObj = $cstTextObj.text();	
			lengthOfText=$cstTextObj.text().length;
			$cstTextObj.text('');
			if(settings.blinker)
				$cstTextObj.append('<span class="blinker"></span>');
			function textTimeout() {
				var timer=setTimeout(function () {
					if(settings.blinker)
						$cstTextObj.find('.blinker').before(textofObj[counter]);				
					else
						$cstTextObj.before(textofObj[counter]);					
					textTimeout();
				}, settings.speedOfTypeng);
				counter++;
				if(counter>=lengthOfText){	
					clearInterval(timer);
				}
			}
		});
	};	
})( jQuery );
