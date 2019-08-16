$(document).ready(function () {
	function gnbOn () {
    	var $header = $('#header');
		var $gnb = $('#gnb > ul');
		var $gnbDep2 = $gnb.find('> li > ul');
		var dep1 = $('body').data('dep-one') -1;
		var dep2 = $('body').data('dep-two') -1;
		console.log(dep1, dep2);

		$gnbDep2.hide();
		
		$gnb.find('> li').on('mouseenter focusin', function () {
			$header.removeClass('active');

			$(this).parent().closest($header).addClass('active');
			$gnbDep2.slideDown();
			$(this).addClass('on').siblings().removeClass('on');
		});
		
		$gnb.on('mouseleave', function () {
			$gnbDep2.slideUp();
			$header.removeClass('active');
			$gnb.find('> li.on').removeClass('on');
			if (dep1 >= 0) $gnb.children().eq(dep1).addClass('on').find('ul li').eq(dep2).addClass('on');
		});

		$gnb.find('a:first, a:last').on('blur', function () {
			setTimeout(function () {
				if ( !$gnb.find('a').is(':focus') ) $gnb.trigger('mouseleave');
			}, 10);
		});
			
		if (dep1 >= 0) $gnb.trigger('mouseleave');
	}
	gnbOn ();
});