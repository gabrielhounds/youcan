$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
	var t = TweenMax;



	function handleFrameClick(e) {
		console.log(e.target.id);
		switch (e.target.id) {
		  case 'frame1':
		  	console.log('FRAME 1');
		  	t.to('.overlay1', 0.3, {display:'block', opacity:1});
	  	  break;
	  	  case 'frame2':
	  	  	console.log('FRAME 2');
	  	  	t.to('.overlay2', 0.3, {display:'block', opacity:1});
	  	  break;
	  	  case 'frame3':
	  	  	console.log('FRAME 3');
	  	  	t.to('.overlay3', 0.3, {display:'block', opacity:1});
	  	  break;
	  	  case 'frame4':
	  	  	console.log('FRAME 4');
	  	  	t.to('.overlay4', 0.3, {display:'block', opacity:1});
	  	  break;
		}
	}

	$('.frame').mouseover( function(e){

		t.set(this, {zIndex:10})
		t.to($(this).children('.front'), 0.6,  {rotationY:'180deg',    ease:Expo.easeOut});
		t.to($(this).children('.back'),  0.6,  {rotationY:'+=180deg',  ease:Expo.easeOut});
		t.to($(this).children('.text'),  0.6,  {rotationY:'+=180deg',  ease:Back.easeOut});

	}).mouseout(function(e){

		t.set(this, {zIndex:0})
		t.to($(this).children('.front'), 0.6, {rotationY:'0deg',   ease:Back.easeOut, delay:0.2});
		t.to($(this).children('.back'),  0.6, {rotationY:'180deg', ease:Back.easeOut, delay:0.2});
		t.to($(this).children('.text'),  0.6, {rotationY:'180deg', ease:Back.easeOut, delay:0.2});

	}).click(function(e){

		handleFrameClick(e);

	});


}
