(function($) {
	var tl = new TimelineLite();

	function logo1() {

	tl

		.fromTo("#logo-1 #logo-left", 1, {scale: 3, autoAlpha: 0, x: 200}, {scale: 1, x:0, autoAlpha: 1, ease: SlowMo.easeInOut}, "logo")
		.fromTo("#logo-1 #logo-right", 1, {scale: 3, autoAlpha: 0, x: 200}, {scale: 1, x:0, autoAlpha: 1, ease: SlowMo.easeInOut}, "logo")
		.fromTo("#logo-1 #logo-right-v", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #v", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-i", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #i", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-s", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #s", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-i-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #i-2", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-b", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #b", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-l", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #l", shapeIndex: 2}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-right-e", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #e", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-left-b-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #b-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-left-y-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #y-2", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-left-t-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #t-2", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-left-e-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #e-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		.fromTo("#logo-1 #logo-left-s-2", .8, {autoAlpha: 0},{morphSVG: {shape: "#text-1 #s-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "start")
		
	}

	function logo2() {

	tl

		.fromTo("#logo-2 #logo-left", 1, {scale: 3, autoAlpha: 0, x: 200}, {scale: 1, y: 0, autoAlpha: 1, ease: Bounce.easeInOut}, "logo-2")
		.fromTo("#logo-2 #logo-right", 1, {scale: 3, autoAlpha: 0, x: 200}, {scale: 1, y: 0, autoAlpha: 1, ease: Bounce.easeInOut}, "logo-2")
		.staggerTo("#logo-2 #logo-left", .5, {x: 0}, .25, "logo-3")
		.staggerTo("#logo-2 #logo-right", .5, {x: 0}, .25, "logo-3")
		.fromTo("#logo-2 #logo-right-v", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #v", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-i", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #i", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-s", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #s", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-i-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #i-2", shapeIndex: .5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-b", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #b", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-l", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #l", shapeIndex: 2}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-right-e", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #e", shapeIndex: .5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-left-b-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #b-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-left-y-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #y-2", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-left-t-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #t-2", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-left-e-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #e-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		.fromTo("#logo-2 #logo-left-s-2", 1, {autoAlpha: 0},{morphSVG: {shape: "#text-2 #s-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo-3")
		
	}

	function logo3() {


	tl

		.fromTo("#logo-3 #logo-left", 1, {scale: 3, autoAlpha: 0, x: 400}, {scale: 1, x: 200, y: 0, autoAlpha: 1, ease: Power0.easeInOut}, "logo-4")
		.fromTo("#logo-3 #logo-right", 1, {scale: 3, autoAlpha: 0, x: -200}, {scale: 1, x: 200, y: 0, autoAlpha: 1, ease: Power0.easeInOut}, "logo-4")
		.staggerTo("#logo-3 #logo-left", 1, {x: 0}, .25, "logo-5")
		.staggerTo("#logo-3 #logo-right", 1, {x: 0}, .25, "logo-5")
		.fromTo("#logo-3 #logo-right-v", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #v", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-i", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #i", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-s", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #s", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-i-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #i-2", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-b", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #b", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-l", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #l", shapeIndex: 2}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-right-e", 0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #e", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-left-b-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #b-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-left-y-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #y-2", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-left-t-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #t-2", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-left-e-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #e-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1})
		.fromTo("#logo-3 #logo-left-s-2",0.1, {autoAlpha: 0},{morphSVG: {shape: "#text-3 #s-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1})
		
	}

	function logo4() {
		tl
			.fromTo("#Layer_4 #logo-start #vv", 1, {autoAlpha: 0}, {autoAlpha: 1}, "logo4-text")
			.fromTo("#Layer_4 #logo-start #bb", 1, {autoAlpha: 0}, {autoAlpha: 1}, "logo4-text")
			.fromTo("#Layer_4 #logo-start #vv", .5, {autoAlpha: 0},{morphSVG: {shape: "#Layer_4 #logo-end #logo-left", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4")
			.fromTo("#Layer_4 #logo-start #bb", .5, {autoAlpha: 0},{morphSVG: {shape: "#Layer_4 #logo-end #logo-right", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4")
			.staggerTo("#logo-end #logo-left", .5, {x: 0,}, .25, "logoStagger")
			.staggerTo("#logo-end #logo-right", .5, {x: 0}, .25, "logoStagger")
			.set('#logo-end', {visibility: "visible"}, "logoStagger")
			.fromTo("#logo-end #logo-right-v", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #v", shapeIndex: 6}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-i", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #i", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-s", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #s", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-i-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #i-2", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-b", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #b", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-l", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #l", shapeIndex: 2}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-right-e", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #e", shapeIndex: 4}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-left-b-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #b-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-left-y-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #y-2", shapeIndex: 1}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-left-t-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #t-2", shapeIndex: 8}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-left-e-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #e-2", shapeIndex: 3}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")
			.fromTo("#logo-end #logo-left-s-2", .5, {autoAlpha: 0},{morphSVG: {shape: "#vbtext #s-2", shapeIndex: 5}, ease:  Power0.easeNone, autoAlpha: 1}, "logo4-text-vb")

	}

	// function text() {
	
	// 	tl.to("#headline", 8, {scrambleText:{text:"visible bytes ist eine lean product development agentur aus münchen", chars:"01", revealDelay:1, tweenLength:false, speed:0.4, ease:Power0.easeNone}});
	// }

	// logo1();
	logo2();
	// logo3();
	// logo4();
	// text();





})(jQuery);