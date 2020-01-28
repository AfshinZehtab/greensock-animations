(function($) {


	var tlSoftwareLaptop = new TimelineMax(),
		tlSoftwareIphone = new TimelineMax(),
		tlSoftwareIpad = new TimelineMax();



	TweenMax.staggerFromTo(["#software-el line", "#software-el polyline", "#software-el circle", "#software-el rect"], 4, {drawSVG:"0"}, {drawSVG:"100%", repeat: -1, repeatDelay: 8});
	TweenMax.staggerFromTo("#software-line-bottom", 1.7, {drawSVG:"0"}, {drawSVG:"100%", repeatDelay: 3});




	tlSoftwareLaptop.pause();

	tlSoftwareLaptop


		.staggerFromTo("#software-laptop-line-18", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-11", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-10", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-9", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-14", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-8", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-7", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-5", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-6", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-17", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-16", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-15", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-13", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-1", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-12", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-3", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-4", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})
		.staggerFromTo("#software-laptop-line-2", 0.1, {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Bounce.easeOut})



	$( "#software-laptop" ).mouseover(function() {
		tlSoftwareLaptop.restart();
	});	

	$( "#software-laptop" ).mouseout(function() {
		tlSoftwareLaptop.seek(0.001);
		tlSoftwareLaptop.pause();
	});	



	tlSoftwareIphone.pause();

	tlSoftwareIphone

		.staggerFromTo("#software-iphone", 0.5, {autoAlpha: 1}, {autoAlpha: 1, rotation: -90, y: 150, x: -20}, 0.25, "hamzaman")
		.staggerFromTo("#software-iphone-lamp", 0.5, {autoAlpha: 1}, {autoAlpha: 1, rotation: 90, x: 20, transformOrigin: "center"}, 0.25)
		.set("#software-iphone-lamp .st4", {fill: "#fff", stroke: "#fff"})
		.seek(0.001)

	

	$( "#software-iphone" ).mouseover(function() {
		tlSoftwareIphone.restart();
	});	



	tlSoftwareIpad.pause();



	tlSoftwareIpad

		.staggerFromTo("#software-ipad", 0.5, {x: 0}, {x: 30}, 0.25)



	$( "#software-ipad-cover" ).mouseover(function() {
		tlSoftwareIpad.restart();
	});	


	$( "#software-ipad-video" ).mouseover(function() {
		TweenMax.fromTo("#software-ipad-video-button", 1, {autoAlpha: 1}, {autoAlpha: 1, rotation: 360, transformOrigin: "center"});
	});	

	$( "#software-ipad-left-box" ).mouseover(function() {
		TweenMax.fromTo(this, 1.1, {autoAlpha: 1, scale: 1, ease: Power4.easeOut}, {autoAlpha: 1, scale: 1.1, ease: Power4.easeOut});
	});	

	$( "#software-ipad-right-box" ).mouseover(function() {
		TweenMax.fromTo(this, 1.1, {autoAlpha: 1, scale: 1, ease: Power4.easeOut}, {autoAlpha: 1, scale: 1.1, ease: Power4.easeOut});
	});	



	$( "#software-clock" ).mouseover(function() {
		TweenMax.to("#software-clock", 1, {x: -90, y: -45, ease: Power3.easeInOut});
	});	


	$(window).on('load', function() {
		var myPointerH = $('#software-clock-el2');
	 	var myPointerM = $('#software-clock-el3');

		window.clock = new TimelineMax({repeat: -1, paused: true});
		


		TweenMax.set(myPointerH, {transformOrigin:"8% 33px" })
		TweenMax.set(myPointerM, {transformOrigin:"100% 55px" })
		clock.add(TweenMax.to(myPointerH, 12, { rotation: "360_cw", ease: Linear.easeNone, repeat: 1 }, 0), "asd");
		clock.add(TweenMax.to(myPointerM, 1, { rotation: "360_cw", ease: Linear.easeNone, repeat: 23 }, 0), "asd");
		
		changeTime();

	});

	function changeTime() {

		var date = new Date();

		var getH = date.getHours();
		var getM = date.getMinutes();

		var hour = parseInt(getH, 10);
		var minute = parseInt(getM, 10);

		if (!isNaN(hour) && !isNaN(minute) && hour > 0 && hour <= 24 && minute >= 0 && minute < 60) {

		    if (hour === 12) hour = 0;
		   
		    var time = hour + minute/60;
		    
		    TweenLite.to(clock, 2, { totalTime: time, ease: Power1.easeInOut, immediateRender: true });
		}

	}

	setInterval(changeTime, 5000);



	$( "#software-ruler" ).mouseover(function() {
		TweenMax.to("#software-ruler", 1, {y: -20, ease: Power3.easeInOut});
	});	


	$( "#software-ruler" ).mouseout(function() {
		TweenMax.to("#software-ruler", 1, {y: 0, ease: Power3.easeInOut});
	});	


	$( "#software-pen" ).mouseover(function() {
		TweenMax.to("#software-pen", 1, {y: 20, autoAlpha: 0, ease: Back.easeInOut});
	});	

	$( "#software-pen" ).mouseout(function() {
		TweenMax.to("#software-pen", 1, {y: 0, autoAlpha: 1, ease: Back.easeInOut});
	});	


})(jQuery);