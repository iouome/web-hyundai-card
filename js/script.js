jQuery(document).ready(function(){
	$('.rollover').each(function(){
		var li = $(this);
		var allA = li.find('a').first();
		li.bind('mouseenter focus',function(){
			allA.css('background-color','white');
			allA.css('color','#1F75D6');
		})
		li.bind('mouseleave blur',function(){
			allA.css('background-color','#191919');
			allA.css('color','#ffffff');
		})
	});
	
	
	
/* 카드 안내.신청 슬라이드 */
	var mySlider=$('#display ul').bxSlider({
		mode:'horizontal', //수평방향으로 이동
		speed:300, //이동속도
		pager:false, //페이징 표시를 제어(숨김 또는 노출)
		moveSlides:1, //이동 슬라이드 갯수
		slideWidth:165, //한개 슬라이드 폭(width)
		minSlides:3, //최소 노출 슬라이드 수
		maxSlides:3, //최대 노출 슬라이드 수
		slideMargin:48, //슬라이드 간의 간격
		auto: true, //자동 슬라이드 여부
		autoHover: true, //마우스 오버시 자동 정지
		controls:false //이전 다음 버튼 숨김(아래 함수로 따로 코딩할 것임)
	});
	
	$('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide(); //goToPrevSlide()플러그인 메서드
		return false;
	});
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});
	
	
	
	/* 금융안내신청 슬라이드 배너 */
	var visual = $('.fin_area1 .slide_wrap > ul > li');
	var button = $('.fin_area1 .control_panel > .control_button');
	var current = 0;
	var setIntervalId;
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			if(current === tg.index()){return;}
			button.removeClass('on');
			tg.addClass('on');
			move(i);
			//return false;
		}	
	});
	
	$('.fin_area1').on({
		mouseover:function(){
			clearInterval(setIntervalId);
		},mouseout:function(){
			timer();
		}
	});
	
	timer();
	
	function timer(){ //시간에 따라 자동으로 돌아가게
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n==visual.size()){n=0}
			button.eq(n).trigger('click');
		},1700);
	};
	
	function move(i){
		var currentEI = visual.eq(current);
		var nextEI = visual.eq(i);
		currentEI.css({left:0}).stop().animate({left:'-100%'});
		nextEI.css({left:'100%'}).stop().animate({left:0});
		current = i; //다음실행 위해
		
	}


	/* 컬처.라이프스타일 슬라이드 배너 */
	var visual2 = $('.c_area .slide_wrap2 > ul > li');
	var button2 = $('.c_area .control_panel2 > .control_button2');
	var current2 = 0;
	var setIntervalId2;
	button2.on({
		click:function(){
			var tg2 = $(this);
			var j = tg2.index();
			if(current2 === tg2.index()){return;}
			button2.removeClass('on');
			tg2.addClass('on');
			move2(j);
			//return false;
		}	
	});
	
	$('.c_area').on({
		mouseover:function(){
			clearInterval(setIntervalId2);
		},mouseout:function(){
			timer2();
		}
	});
	
	timer2();
	
	function timer2(){ //시간에 따라 자동으로 돌아가게
		setIntervalId2 = setInterval(function(){
			var n = current2 + 1;
			if(n==visual2.size()){n=0}
			button2.eq(n).trigger('click');
		},1700);
	};
	
	function move2(j){
		var currentEI2 = visual2.eq(current2);
		var nextEI2 = visual2.eq(j);
		currentEI2.css({left:0}).stop().animate({left:'-100%'});
		nextEI2.css({left:'100%'}).stop().animate({left:0});
		current2 = j; //다음실행 위해
		
	}


	
	/* top 이벤트배너 */
	$('#top_event').find('.close_btn').on('click',function(){
		$('#top_event').slideUp();
	});


	
	
});
