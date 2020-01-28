(function($) {
	var tl = new TimelineLite();


	function logo() {

	tl

		.fromTo("#logo-left", 1, {scale: 3, autoAlpha: 0}, {scale: 1, y: 0, autoAlpha: 1, ease: Bounce.easeInOut}, "logo")
		.fromTo("#logo-right", 1, {scale: 3, autoAlpha: 0}, {scale: 1, y: 0, autoAlpha: 1, ease: Bounce.easeInOut}, "logo")
		// .set("#vb-text", {visibility: "visible"})
		.fromTo("#logo #logo-left-v", 1, {autoAlpha: 0},{morphSVG: {shape: "#v", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-i", 1, {autoAlpha: 0},{morphSVG: {shape: "#i", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-s", 1, {autoAlpha: 0},{morphSVG: {shape: "#s", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-i-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#i-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-b", 1, {autoAlpha: 0},{morphSVG: {shape: "#b", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-l", 1, {autoAlpha: 0},{morphSVG: {shape: "#l", shapeIndex: 2}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-left-e", 1, {autoAlpha: 0},{morphSVG: {shape: "#e", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-right-b-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#b-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-right-y-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#y-2", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-right-t-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#t-2", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-right-e-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#e-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.fromTo("#logo-right-s-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#s-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-to-text")
		.staggerTo("#logo-left", .8, {x: -250}, .25, "mainLogo")
		.staggerTo("#logo-right", .8, {x: -250}, .25, "mainLogo")
		.staggerTo("#logo-left-v", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-i", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-s", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-i-2", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-b", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-l", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-left-e", .8, {x: 80}, .25, "mainLogo")
		.staggerTo("#logo-right-b-2", .8, {x: 2}, .25, "mainLogo")
		.staggerTo("#logo-right-y-2", .8, {x: 2}, .25, "mainLogo")
		.staggerTo("#logo-right-t-2", .8, {x: 2}, .25, "mainLogo")
		.staggerTo("#logo-right-e-2", .8, {x: 2}, .25, "mainLogo")
		.staggerTo("#logo-right-s-2", .8, {x: 2}, .25, "mainLogo")
		
	}

	// function text() {
	
	// 	tl.to("#headline", 8, {scrambleText:{text:"visible bytes ist eine lean product development agentur aus münchen", chars:"01", revealDelay:1, tweenLength:false, speed:0.4, ease:Power0.easeNone}});
	// }

	// logo1();
	logo();
	// logo3();
	// logo4();
	// text();


})(jQuery);