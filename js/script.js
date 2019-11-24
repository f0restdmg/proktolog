$(document).ready(function(){
	$('#nav-icon1,#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('.top-mobile-menu').toggle('.menu-open');
	});
});