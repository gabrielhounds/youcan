$(document).ready(function(){
	init();
});

function init() {
	console.log('init');

	var t = TweenMax;

	$('.frame').mouseover( function(e){
		t.to($(this).children('.img'), 0.6, {rotationY:'180deg', ease:Power3.easeOut});
	}).mouseout(function(e){
		t.to($(this).children('.img'), 0.6, {rotationY:'0deg', ease:Power3.easeOut});
	})


}
