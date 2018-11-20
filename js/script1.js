jQuery(document).ready(function(){
	$('.joinBtn').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.login_inner');
		
		var lastAnchor;
		var lastPanel;
		
		/* anchors.show(); */
		/* lastAnchor = anchors.filter('.on'); */
		lastAnchor = anchors.filter('.select');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		/* lastPanel.show(); */
		
		anchors.click(function(event){
			event.preventDefault(); //html에서 일어나는 기본메서드를 막는다. 하이퍼링크a를 막으려고 preventDefault불러옴.
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			lastAnchor.removeClass('select');
			currentAnchor.addClass('select');
			lastPanel.hide();
			
			var searchBtn = $('#login .searchBtn');
			var hide = $(currentPanel.filter('#panel2'));
			if(currentPanel.get(0) === hide.get(0)){
				searchBtn.hide();
			}
			
			
			currentPanel.show();
			
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
			
			
		});
	})
	
	
	
	
});
