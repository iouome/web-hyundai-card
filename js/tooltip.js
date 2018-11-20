jQuery(document).ready(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	
	function updateBalloonPosition(x,y){
		balloon.css({left:x+15, top:y});
	}
	
	function showBalloon(){
		balloon.stop(); //stop은 애니메이션에서 필요함
		balloon.css('opacity',0).show();
		balloon.animate({opacity:1},500);
	}
	
	function hideBalloon(){
		balloon.stop();
		balloon.animate({opacity:0},500,function(){balloon.hide();});
	}
	
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title'); //text에 문자열 들어감
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition();
				/* balloon.show(); */
				showBalloon();
			},
			function(){
			/* balloon.hide(); */
			hideBalloon();
		
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
});
