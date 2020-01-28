(function($) {

	var tlLab = new TimelineMax({repeat: -1}),
		tlLab2 = new TimelineMax({repeat: -1}),
		tlUnivers = new TimelineMax({repeat: -1}),
		tlManyCycles = new TimelineMax({repeat: -1}),
		tlMidEl = new TimelineMax({repeat: -1, repeatDelay: 10}),
		iTopEL=1,
		jMidEl=1;


	while (iTopEL < 19) {
		
		var countTopEl = "#lean-top-el" + iTopEL;

		TweenMax.staggerFromTo(countTopEl, 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeat: -1, repeatDelay: 5});
			

		iTopEL++;
	}

	TweenMax.staggerFromTo("#line-botton", 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3});
	TweenMax.staggerFromTo("#cup", 1.7, {drawSVG:"0", x: -40, autoAlpha: 0}, {drawSVG:"100%", x: 30, autoAlpha: 1, repeat: -1, repeatDelay: 8});
	TweenMax.staggerFromTo("#lamp-botton-1", 1.7, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, repeatDelay: 3});
	TweenMax.staggerFromTo("#lamp-botton-2", 1.7, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, repeatDelay: 3});
	TweenMax.staggerFromTo("#lamp-botton-3", 1.7, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, repeatDelay: 3});
	TweenMax.staggerFromTo("#lamp-botton-4", 1.7, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, repeatDelay: 3});


	while (jMidEl < 29) {
		
		var countMidEl = "#lean-mid-el" + jMidEl,
			randomX = Math.random() * -600,
			randomY = Math.random() * -600;


		tlMidEl
			.fromTo(countMidEl, .1, { autoAlpha: 0, x: randomX, y: randomY,}, { x: 0, y: 0, autoAlpha: 1, ease: SlowMo.easeInOut})


		jMidEl++;
	}


	tlLab

		.to("#lab-tube_x5F_left-line", 3, {y: -50, ease: Power3.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_left-line", 3, {y: 0, ease: Power3.easeInOut}, "lab-same-return")
		.to("#lab-tube_x5F_mid-line", 3, {y: 50, ease: Power3.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_mid-line", 3, {y: 0, ease: Power3.easeInOut}, "lab-same-return")
		.to("#lab-tube_x5F_right-line", 3, {y: -30, ease: Power3.easeInOut}, "lab-same")
		.to("#lab-tube_x5F_right-line", 3, {y: 0, ease: Power3.easeInOut}, "lab-same-return")



	tlLab2

	 	.fromTo("#lab-tube-2", 0.3, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"}, "+=3")
    	.to("#lab-tube-cycle-3", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")
    	.to("#lab-tube-cycle-2", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")
    	.to("#lab-tube-cycle-1", 1, {physics2D:{velocity:Math.random() * 220 + 150, angle:Math.random() * 40 + 250, gravity:500}, autoAlpha: 0}, "lab-cycle")




		
	tlUnivers

		.staggerFromTo("#univers-rings", 1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)
		.fromTo("#univers-rings", 0.1, {drawSVG:"0%"}, {drawSVG:"10%", immediateRender:false}, "+=0.1")
		.staggerTo("#univers-rings", 1, {drawSVG:"90% 100%"}, 0.5)
		.to("#univers-rings", 1, {rotation:360, scale:0.5, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
		.staggerTo("#univers-rings", 0.5, {stroke:"#4782C3", scale:1.5, opacity:0}, 0.2)


	tlManyCycles

		.staggerFromTo("#many-cycles", 1.7, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)
		.fromTo("#many-cycles", 0.9, {drawSVG:"0%"}, {drawSVG:"10%", immediateRender:false}, "+=0.4")
		.staggerTo("#many-cycles", 2, {drawSVG:"90% 100%"}, 0.5)
		.to("#many-cycles", 1.3, {rotation:360, scale:1, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
		.staggerTo("#many-cycles", 1, {scale:1, opacity:1}, 0.2)






})(jQuery);