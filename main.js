$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
	var t = TweenMax;

	t.set('.overlay', {autoAlpha:0});
	t.set('.videoOverlay', {autoAlpha:0});

	function handleFrameClick(e) {
		console.log(e.target.id);
		switch (e.target.id) {
		  case 'frame1':
		  	console.log('FRAME 1');
		  	t.to('.overlay1', 0.3, {autoAlpha:1});
		  	t.from('.bigText', 0.6, {rotationY:'-=180deg', ease:Back.easeOut});
		  	t.from('.bigImg', 0.3, {rotationY:'-=20deg', opacity:0, ease:Back.easeOut});
	  	  break;
	  	  case 'frame2':
	  	  	console.log('FRAME 2');
	  	  	t.to('.overlay2', 0.3, {autoAlpha:1});
	  	  	t.from('.bigText', 0.6, {rotationY:'-=180deg', ease:Back.easeOut});
	  	  	t.from('.bigImg', 0.3, {rotationY:'-=20deg', opacity:0, ease:Back.easeOut});
	  	  break;
	  	  case 'frame3':
	  	  	console.log('FRAME 3');
	  	  	t.to('.overlay3', 0.3, {autoAlpha:1});
	  	  	t.from('.bigText', 0.6, {rotationY:'-=180deg', ease:Back.easeOut});
	  	  	t.from('.bigImg', 0.3, {rotationY:'-=20deg', opacity:0, ease:Back.easeOut});
	  	  break;
	  	  case 'frame4':
	  	  	console.log('FRAME 4');
	  	  	t.to('.overlay4', 0.3, {autoAlpha:1});
	  	    t.from('.bigText', 0.6, {rotationY:'-=180deg', ease:Back.easeOut});
	  	    t.from('.bigImg', 0.3, {rotationY:'-=20deg', opacity:0, ease:Back.easeOut});
	  	  break;
		}
	}

	function handleOverlayClose(e) {
		t.to('.overlay', 0.3, {autoAlpha:0, delay:0.1});
	}

	function handleVideoOpen(e) {
		t.to('.videoOverlay', 0.3, {autoAlpha:1});
	}

	$('.frame').mouseover( function(e){
		t.set(this, {zIndex:10});
		t.to($(this).children('.front'), 0.6,  {rotationY:'180deg',    ease:Expo.easeOut});
		t.to($(this).children('.back'),  0.6,  {rotationY:'+=180deg',  ease:Expo.easeOut});
		t.to($(this).children('.text'),  0.6,  {rotationY:'+=180deg',  ease:Back.easeOut});
	}).mouseout(function(e){
		t.set(this, {zIndex:0});
		t.to($(this).children('.front'), 0.6, {rotationY:'0deg',   ease:Back.easeOut, delay:0.2});
		t.to($(this).children('.back'),  0.6, {rotationY:'180deg', ease:Back.easeOut, delay:0.2});
		t.to($(this).children('.text'),  0.6, {rotationY:'180deg', ease:Back.easeOut, delay:0.2});
	}).click(function(e){
		handleFrameClick(e);
	});

	$('.backBtn').mouseover( function(e){
		console.log( 'BACK OVER' );
		t.to('.backBtnArrow', 0.3, {x:-5, ease:Power4.easeOut});
		t.to('.backBtnTxt',   0.3, {scale:1.1, x:5, ease:Power4.easeOut});
	}).mouseout( function(e){
		t.to('.backBtnArrow', 0.6, {x:0, ease:Bounce.easeOut});
		t.to('.backBtnTxt',   0.6, {scale:1, x:0, ease:Bounce.easeOut});
	}).click( function(e){
		handleOverlayClose(e);
	});

	$('.watchVideo').mouseover( function(e){
		console.log( 'VIDEO OVER' );
		t.to('.watchVideoIcon', 0.3, {scale:1.3, ease:Power4.easeOut});
		t.to('.watchVideoText', 0.3, {scale:0.9, y:5, ease:Power4.easeOut});
	}).mouseout( function(e){
		t.to('.watchVideoIcon', 0.3, {scale:1, ease:Back.easeOut});
		t.to('.watchVideoText', 0.3, {scale:1, y:0, ease:Back.easeOut});
	}).click( function(e){
		handleVideoOpen(e);
	});

	$('.videoClose').click( function(e){
		t.set('.videoOverlay', {autoAlpha:0});
		handleOverlayClose();
	})


}



































