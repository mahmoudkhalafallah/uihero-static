jQuery(document).ready(function ($) {

	$(".carousel").owlCarousel({
		singleItem: true,
		pagination: false,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

	$('#Container').mixItUp({
		animation: {
			duration: 350,
			effects: 'fade translateY(10%) rotateZ(20deg) scale(1.09) translateX(24%) translateZ(280px) rotateX(-43deg) rotateY(97deg) stagger(80ms)',
			easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
		}
	});
});