(function($) {

	var tlGears = new TimelineMax(),
		tlLap = new TimelineMax(),
		tlCassette = new TimelineMax(),
		tlTriangle = new TimelineMax(),
		tlPen = new TimelineMax(),
		tlCompass = new TimelineMax(),
		tlRuler = new TimelineMax(),
		tlProtractor = new TimelineMax(),
		iDesignTopEL=1;


	TweenMax.staggerFromTo("#line-bottom", 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3});
	



	while (iDesignTopEL < 18) {
		
		var countTopEl = "#top-el-" + iDesignTopEL;

		TweenMax.staggerFromTo("#design " + countTopEl, 4, {drawSVG:"0"}, {drawSVG:"100%", repeat: -1, repeatDelay: 8});
			

		iDesignTopEL++;
	}


	tlGears 


		.to("#gears-big", 10, {rotation: 360, transformOrigin: "center", ease: Power0.easeNone, repeat: -1}, "gears" )
		.to("#gears-small", 10, {rotation: -360, transformOrigin: "center", ease: Power0.easeNone, repeat: -1}, "gears")


	tlLap.pause();

	tlLap

		.staggerFromTo("#lap-line-1_1_", .5, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3})
		.staggerFromTo("#lap-line-3_1_", .5, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3})
		.staggerFromTo("#lap-line-2_1_", .5, {drawSVG:"50% 50%"}, {drawSVG:"100%", repeatDelay: 3})
		.staggerFromTo("#lap-line-4_1_", .5, {drawSVG:"50% 50%"}, {drawSVG:"100%", repeatDelay: 3})
		.staggerFromTo(["#lap-line-1", "#lap-line-2", "#lap-line-3", "#lap-line-4"], .5, {x: -20, autoAlpha: 0 }, {x: 0, autoAlpha: 1, ease: Back.easeOut})
		.staggerFromTo("#box-left-1", 1, {y: -30, autoAlpha: 0}, {y: 0, rotation: 360, transformOrigin: "center", ease: Bounce.easeOut, autoAlpha: 1}, 0.25, "boxs")
		.staggerFromTo("#box-left-2_1_", 1, {x: -50, autoAlpha: 0}, {x: 0, rotation: 360, transformOrigin: "center", autoAlpha: 1, ease: Bounce.easeOut}, 0.25, "boxs")
		.fromTo("#box-mid-right", 1, {x: 30, autoAlpha: 0}, {x: 0, autoAlpha: 1, rotation: 360, transformOrigin: "center", ease: Bounce.easeOut}, "boxs")
		.fromTo("#box-mid-mid", 1, {y: -30, autoAlpha: 0}, {y: 0, autoAlpha: 1, rotation: 360, transformOrigin: "center", ease: Bounce.easeOut}, "boxs")
		.fromTo("#box-mid-left", 1, {x: -30, autoAlpha: 0}, {x: 0, autoAlpha: 1, rotation: -360, transformOrigin: "center", ease: Bounce.easeOut}, "boxs")
		.staggerFromTo("#box-right-1", 1, {y: -150, autoAlpha: 0}, {y: 0, rotation: -360, transformOrigin: "center", autoAlpha: 1, ease: Bounce.easeOut}, 0.25, "boxs")
		.staggerFromTo("#box-right-2", 1, {x: -30, autoAlpha: 0}, {x: 0, rotation: 360, transformOrigin: "center", autoAlpha: 1, ease: Bounce.easeOut}, 0.25, "boxs")
	

	$( "#laptop" ).mouseover(function() {
		tlLap.restart();
	});	

	$( "#laptop" ).mouseout(function() {
		tlLap.seek(.001);
		tlLap.pause();
	});		


	

	tlCassette

		.fromTo("#cassette", 1, {x: 90, autoAlpha: 1}, {x: -570, autoAlpha: 1, transformOrigin: "center", ease: Bounce.easeOut})
		.set("#cassette", {zIndex: 99999})
		.seek(.13)
		.pause()


	$( "#cassette" ).mouseover(function() {
		tlCassette.restart();
	});	


	tlTriangle

		.fromTo("#triangle", 1, {x: 0, autoAlpha: 1}, {x: 540, autoAlpha: 1, rotation: 360, transformOrigin: "center", ease: Bounce.easeOut})
		.seek(.001)
		.pause()

	

	$( "#triangle" ).mouseover(function() {
		tlTriangle.restart();

	});	


	

	tlPen
		.fromTo("#pen_1_", 1, {x: 0, autoAlpha: 1}, {x: 420, autoAlpha: 1, rotation: 360, transformOrigin: "center", ease: Power3.easeOut})
		.seek(.001)
		.pause()

	

	$( "#pen_1_" ).mouseover(function() {
		tlPen.restart();

	});	


	tlCompass
		.fromTo("#compass", 1, {x: 0, autoAlpha: 1}, {x: 580, autoAlpha: 1, rotation: 360, transformOrigin: "center", ease: Back.easeOut})
		.seek(.001)
		.pause()

	

	$( "#compass" ).mouseover(function() {
		tlCompass.restart();

	});	


	tlRuler
		.fromTo("#ruler", 1, {x: 0, autoAlpha: 1}, {x: -505, autoAlpha: 1, rotation: -360, transformOrigin: "center", ease: Power2.easeOut})
		.seek(.0001)
		.pause()

	

	$( "#ruler" ).mouseover(function() {
		tlRuler.restart();

	});	


	tlProtractor

		.fromTo("#protractor", 1, {x: 0, autoAlpha: 1}, {x: -425, y: 38, autoAlpha: 1, rotation: 990, transformOrigin: "center", ease: Power0.easeOut})
		.seek(.0001)
		.pause()

	

	$( "#protractor" ).mouseover(function() {
		tlProtractor.restart();

	});	



})(jQuery);