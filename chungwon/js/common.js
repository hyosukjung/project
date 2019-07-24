$(document).ready(function(){
	var gnbUl = $(".list_gnb>li");
	var subGnb = $(".list_gnb>.list_sub");
	var optBox = $(".opt_chw");
	var optBtn = $(".opt_chw .btn_opt");
	var optList = $(".opt_chw .list_opt");
	var footOptBox = $(".chw_footer .opt_chw");
	var footOptBtn = $(".chw_footer .opt_chw .btn_opt");
	var footOptList = $(".chw_footer .opt_chw .list_opt");

	// gnb 마우스호버시 서브메뉴 노출
	gnbUl.on("mouseover focusin",function(){
		subGnb.hide();
		$(this).children(".list_sub").stop().fadeIn(300);
	});
	gnbUl.on("mouseout focusout",function(){
		$(this).children(".list_sub").stop().fadeOut(300);
	});

	//셀렉트박스 공통
	optBtn.click(function(){
		$(this).next().stop().slideToggle(200);
		if($(this).parent().hasClass("opt_open")){
			$(this).parent().removeClass("opt_open");
			$(this).children().text("열기");
		}else{
			$(this).parent().addClass("opt_open");
			$(this).children().text("닫기");
		};
	});

	// 배너 슬라이드
	$('.slide_banner').bxSlider({
	    auto:true,
	    controls:false
  	});

  	$('.slide_chw').bxSlider({
  		pager:false,
  		controls:true,
        maxSlides:4,
        slideWidth:280,
        slideMargin:26,
        moveSlides:1
  	});

  	// 퀵메뉴
  	$(window).scroll(function(){
	  	var scrollT = $(window).scrollTop();
	  	var quickMenu = $(".quick_chw");
	  	quickMenu.stop().animate({"top":scrollT+111},250);
  	});

});