$(document).ready(function (){
	var $tab = $('.tab');

	//초기화면 숨길 컨텐츠 제어
	$tab.find('ul .tab1 .type').show().parent().addClass("on").siblings().children('.type').hide();
	
	
	$tab.find("ul li .btn_cof").on("click",function  () {
		//초기화
		$(this).closest($tab).find("> ul > li").removeClass("on").children(".btn_cof").siblings().hide();

		//재설정
		$(this).siblings().show().parent().addClass("on");
		return false;
	});
});