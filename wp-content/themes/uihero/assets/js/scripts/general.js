jQuery(document).ready(function ($) {
	var mainHeader = $(' #masthead')[0],
			menuItems = $('#primary-menu .menu-item a'),
			mySVG = $(" #logoSvg")[0],
			section = $('.home .uihero-section'),
			nav = $('.uihero-header nav'),
			nav_height = nav.outerHeight(),
			svgDoc,
			svgLoded = false,
			wheel = false,
			$docH = $(document).height() - $(window).height(),
			$scrollTop = $(window).scrollTop();

//	mySVG.addEventListener("load", function () {
//		svgDoc = mySVG.contentDocument;
//		if ($(mainHeader).hasClass('fixed')) {
//			svgDoc.getElementsByTagName('style')[0].sheet.cssRules[2].style.fill = '#1C4240';
//		} else {
//			svgDoc.getElementsByTagName('style')[0].sheet.cssRules[2].style.fill = '#fff';
//		}
//		svgLoded = true;
//	}, false);

	$(window).scroll(function () {
		var cur_pos = $(this).scrollTop();
		section.each(function () {
			var top = $(this).offset().top - nav_height,
					bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li').removeClass('active');
				section.removeClass('active');
				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});

		if ($(window).scrollTop() > mainHeader.offsetHeight - 30) {
			$(mainHeader).addClass('fixed');
//			if (svgLoded) {
//				svgDoc.getElementsByTagName('style')[0].sheet.cssRules[2].style.fill = '#1C4240';
//			}
		} else {
			$(mainHeader).removeClass('fixed');
//			if (svgLoded) {
//				svgDoc.getElementsByTagName('style')[0].sheet.cssRules[2].style.fill = '#fff';
//			}
		}
	});

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
	});
});


