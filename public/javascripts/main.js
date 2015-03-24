$(function(){
$('.menutop a:eq(0)').bind('mouseover',function(){
		$('.menutop [href="main"]').css('background','white')
	})
$('.menutop a:eq(0)').bind('mouseout',function(){
		$('.menutop [href="main"]').css('background','')
	})
});

$(function(){
$('.menutop a:eq(1)').bind('mouseover',function(){
		$('.menutop [href="company"]').css('background','white')
	})
$('.menutop a:eq(1)').bind('mouseout',function(){
		$('.menutop [href="company"]').css('background','')
	})
});

$(function(){
$('.menutop a:eq(2)').bind('mouseover',function(){
		$('.menutop [href="stores"]').css('background','white')
	})
$('.menutop a:eq(2)').bind('mouseout',function(){
		$('.menutop [href="stores"]').css('background','')
	})
});

$(function(){
$('.menutop a:eq(3)').bind('mouseover',function(){
		$('.menutop [href="contact"]').css('background','white')
	})
$('.menutop a:eq(3)').bind('mouseout',function(){
		$('.menutop [href="contact"]').css('background','')
	})
});