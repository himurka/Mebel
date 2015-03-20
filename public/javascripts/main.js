$(function(){
$('.menutop a:eq(0)').bind('mouseover',function(){
		$('.menutop').css('background','red')
	})
$('.menutop a:eq(0)').bind('mouseout',function(){
		$('.menutop').css('background','')
	})
});