(function($) {

	var tlDigitalLaptop = new TimelineMax(),
		tlDigitalGears = new TimelineMax(),
		tlDigitalChartBoxes = new TimelineMax({repeat: -1}),
		tlDigitalChart2 = new TimelineMax({repeat: -1, repeatDelay: 8}),
		tlDigitalPpaper = new TimelineMax(),
		tlDigitalIpad = new TimelineMax();



	TweenMax.staggerFromTo("#digital-el line", 4, {drawSVG:"0"}, {drawSVG:"100%", repeat: -1, repeatDelay: 8});
	TweenMax.staggerFromTo("#digital-el-line-bottom", 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3});

	tlDigitalLaptop.pause();

	tlDigitalLaptop

		// .staggerFromTo("#digital-laptop-line-bottom", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box6", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box5", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box4", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box3", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box2", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		// .staggerFromTo("#digital-laptop-box1", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		.set("#digital-laptop-boxes *", {fill: "#FFFFFF"})
		.staggerFromTo("#digital-laptop-arow-2", .3, {drawSVG:"0"}, {drawSVG:"100%"})
		.staggerFromTo("#digital-laptop-arow-1", .3, {drawSVG:"0"}, {drawSVG:"100%", ease: Power3.easeOut})
		.staggerFromTo("#digital-laptop-text", .3, {x: -10, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: SlowMo.easeInOut})



	var	tlDigitalLaptopBoxes = new TimelineMax({ repeat: -1});
	
	tlDigitalLaptopBoxes
		.fromTo("#digital-laptop-box6", 2, {height: 24, y: 0}, {height: 30, y: -6, ease: Power0.easeInOut,}, "digital-box1")
		.fromTo("#digital-laptop-box6", 2, {height: 30, y: -6}, {height: 24, y: 0, ease: Power0.easeInOut,}, "digital-box2")
		.fromTo("#digital-laptop-box5", 2, {height: 38, y: 0}, {height: 28, y: 10, ease: Power0.easeInOut,}, "digital-box3")
		.fromTo("#digital-laptop-box5", 2, {height: 28, y: 10}, {height: 38, y: 0, ease: Power0.easeInOut,}, "digital-box4")
		.fromTo("#digital-laptop-box4", 2, {height: 50.9, y: 0}, {height: 20, y: 30, ease: Power0.easeInOut,}, "digital-box5")
		.fromTo("#digital-laptop-box4", 2, {height: 20, y: 30}, {height: 50.9, y: 0, ease: Power0.easeInOut,}, "digital-box6")
		.fromTo("#digital-laptop-box3", 2, {height: 45, y: 0}, {height: 25, y: 20, ease: Power0.easeInOut,}, "digital-box4")
		.fromTo("#digital-laptop-box3", 2, {height: 25, y: 20}, {height: 45, y: 0, ease: Power0.easeInOut,}, "digital-box6")
		.fromTo("#digital-laptop-box2", 2, {height: 73, y: 0}, {height: 60, y: 13, ease: Power0.easeInOut,}, "digital-box2")
		.fromTo("#digital-laptop-box2", 2, {height: 60, y: 13}, {height: 73, y: 0, ease: Power0.easeInOut,}, "digital-box5")
		.fromTo("#digital-laptop-box1", 2, {height: 104.1, y: 0}, {height: 93, y: 11, ease: Power0.easeInOut,}, "digital-box1")
		.fromTo("#digital-laptop-box1", 2, {height: 93, y: 11}, {height: 104.1, y: 0, ease: Power0.easeInOut,}, "digital-box3")


	$( "#digital-laptop" ).mouseover(function() {
		tlDigitalLaptop.restart();
	});	

	$( "#digital-laptop" ).mouseout(function() {
		tlDigitalLaptop.seek(-0.01);
		tlDigitalLaptop.pause();
	});	

	
	tlDigitalGears 


		.to("#digital #gears-big", 10, {rotation: 360, transformOrigin: "center", ease: Power0.easeNone, repeat: -1}, "gears" )
		.to("#digital #gears-small", 10, {rotation: -360, transformOrigin: "center", ease: Power0.easeNone, repeat: -1}, "gears")



	tlDigitalChartBoxes
		.fromTo("#chart-box4", 2, {height: 12.6, y: 0}, {height: 18, y: -6, ease: Power0.easeInOut,}, "digital-main-box1")
		.fromTo("#chart-box4", 2, {height: 18, y: -6}, {height: 12.6, y: 0, ease: Power0.easeInOut,}, "digital-main-box2")
		.fromTo("#chart-box3", 2, {height: 28.2, y: 0}, {height: 20, y: 8, ease: Power0.easeInOut,}, "digital-main-box3")
		.fromTo("#chart-box3", 2, {height: 20, y: 8}, {height: 28.2, y: 0, ease: Power0.easeInOut,}, "digital-main-box4")
		.fromTo("#chart-box2", 2, {height: 23.3, y: 0}, {height: 30, y: -7, ease: Power0.easeInOut,}, "digital-main-box2")
		.fromTo("#chart-box2", 2, {height: 30, y:  -7}, {height: 23.3, y: 0, ease: Power0.easeInOut,}, "digital-main-box4")
		.fromTo("#chart-box1", 2, {height: 36.2, y: 0}, {height: 22, y: 14, ease: Power0.easeInOut,}, "digital-main-box3")
		.fromTo("#chart-box1", 2, {height: 22, y: 14}, {height: 36.2, y: 0, ease: Power0.easeInOut,}, "digital-main-box1")



	tlDigitalChart2

		.staggerFromTo("#chart-2-el2", 1, {drawSVG:"0"}, {drawSVG:"100%"})
		.staggerFromTo("#chart-2-el1", 1, {drawSVG:"0"}, {drawSVG:"100%"})
		

	tlDigitalPpaper.pause();
	tlDigitalPpaper

		.to("#digital-paper", 1, {x: -30, ease: Power4.easeInOut})


	$( "#digital-paper" ).mouseover(function() {
		tlDigitalPpaper.restart();
	});	

	$( "#digital-paper" ).mouseout(function() {
		tlDigitalPpaper.seek(-0.01);
		tlDigitalPpaper.pause();
	});	


	tlDigitalIpad.pause();

	tlDigitalIpad

		.to("#digital-ipad", 1, {x: 50, y: -10, ease: Back.easeInOut}, "digital-ipad")
		.to("#digital-magnifying-glass", 1, {rotation: 380,x: 50, y: -20,transformOrigin: "center" , ease: Power3.easeInOut}, "digital-ipad")

	$( "#digital-magnifying-glass" ).mouseover(function() {
		tlDigitalIpad.play();
	});	

	$( "#digital-magnifying-glass" ).mouseout(function() {
		tlDigitalIpad.seek(0.0001);
		tlDigitalIpad.pause();
	});	

})(jQuery);
