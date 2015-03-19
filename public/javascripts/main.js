$(function(){
$('.menutop a:eq(0)').bind('mouseover',function(){
		$('#header').css('background','orange')
	})
$('.menutop a:eq(0)').bind('mouseout',function(){
		$('#header').css('background','green')
	})
});