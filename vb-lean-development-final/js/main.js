(function($) {

	var tlLab = new TimelineMax({repeat: -1}),
		tlLab2 = new TimelineMax(),
		tlUnivers = new TimelineMax(),
		tlManyCycles = new TimelineMax(),
		tlMidEl = new TimelineMax(),
		iTopEL=1,
		jMidEl=1;


	while (iTopEL < 19) {
		
		var countTopEl = "#lean-top-el" + iTopEL;

		TweenMax.staggerFromTo(countTopEl, 4, {drawSVG:"0"}, {drawSVG:"100%", repeat: -1, repeatDelay: 8})
			

		iTopEL++;
	}

	TweenMax.staggerFromTo("#line-bottom", 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3});

	$('#cup').hover(function() {
		TweenMax.staggerFromTo("#cup", 1.7, {drawSVG:"0", x: -40, autoAlpha: 0}, {drawSVG:"100%", x: 30, autoAlpha: 1});
	});		



	tlMidEl.pause();

	while (jMidEl < 29) {
	
		var countMidEl = "#lean-mid-el" + jMidEl,
			randomX = Math.random() * -600,
			randomY = Math.random() * -600;


		tlMidEl
			.fromTo(countMidEl, .1, { x: 0, y: 0, autoAlpha: 1, ease: SlowMo.easeInOut}, { autoAlpha: 0, x: randomX, y: randomY,})

		jMidEl++;
	}

	$( "#lean-mid" ).mouseover(function() {
		tlMidEl.restart();
	});	

	$( "#lean-mid" ).mouseout(function() {
		tlMidEl.seek(0.001);
		tlMidEl.pause();
	});	


	tlLab2.pause();


	tlLab

		.to("#lab-tube_x5F_left-line", 5, {y: -50, ease: Power0.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_left-line", 5, {y: 0, ease: Power0.easeInOut}, "lab-same-return")
		.to("#lab-tube_x5F_mid-line", 5, {y: 50, ease: Power0.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_mid-line", 5, {y: 0, ease: Power0.easeInOut}, "lab-same-return")
		.to("#lab-tube_x5F_right-line", 5, {y: -30, ease: Power0.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_right-line", 5, {y: 0, ease: Power0.easeInOut}, "lab-same-return")



	tlLab2

	 	.fromTo("#lab-tube-2", 0.3, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"})
    	.to("#lab-tube-cycle-3", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")
    	.to("#lab-tube-cycle-2", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")
    	.to("#lab-tube-cycle-1", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")



	$( "#lab-tube-2" ).mouseover(function() {
		tlLab2.restart();
	});

	$( "#lab-tube-2" ).mouseout(function() {
		tlLab2.seek(0.001);
		tlLab2.pause();
	});


	
	tlUnivers.pause();

	tlUnivers

		.to("#univers-rings", 10, {scale: 1.5, rotation: 360, transformOrigin: "center", ease: Power0.easeNone, repeat: -1})


	$( "#univers-rings" ).mouseover(function() {
		tlUnivers.restart();
	 });

	$( "#univers-rings" ).mouseout(function() {
		tlUnivers.seek(0.001);
		tlUnivers.pause();
	});
	
	tlManyCycles.pause();

	tlManyCycles

		.staggerFromTo("#many-cycles", .1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)
		.fromTo("#many-cycles", 0.1, {drawSVG:"0%"}, {drawSVG:"10%", immediateRender:false}, "+=0.4")
		.staggerTo("#many-cycles", 1, {drawSVG:"90% 100%"}, 0.5)
		.to("#many-cycles", 1, {rotation:360, scale:1, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
		.staggerTo("#many-cycles", .5, {scale:1, opacity:1}, 0.2)
		.to("#many-cycles", 1, {stroke: "#4782C3", strokeWidth: .1, ease: Power3.easeInOut})



	$( "#many-cycles" ).mouseover(function() {
		tlManyCycles.restart();
	 });

	$( "#many-cycles" ).mouseout(function() {
		tlManyCycles.seek(0.001);
		tlManyCycles.pause();
	});


})(jQuery);