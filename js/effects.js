$('#hide').click(function(){
	$('#text').hide();
});

$('#show').click(function(){
	$('#text').show();
});

$('#slowhide').click(function(){
	$('#text1').hide(2000);
});

$('#slowshow').click(function(){
	$('#text1').show(2000);
});

$('#toggle').click(function(){
	$('p.switch').toggle();
});

$('#fadein').click(function(){
	$('#div1').fadeIn(1000);
	$('#div2').fadeIn(2000);
	$('#div3').fadeIn(3000);
});

$('#fadeout').click(function(){
	$('#div1').fadeOut(3000);
	$('#div2').fadeOut(2000);
	$('#div3').fadeOut(1000);
});

$('#thought').click(function(){
	$('#panel').slideToggle("slow");
});

$('#animate').click(function(){
	var div = $('#box');
	div.animate({height: '200px', opacity: '0.4'},"slow");
	div.animate({width: '200px', opacity: '0.8'},"slow");
	div.animate({height: '100px', opacity: '0.4'},"slow");
	div.animate({width: '100px', opacity: '0.8'},"slow");
});

$('#stop').click(function(){
	$('#box').stop();
});

$('#startchaining').click(function(){
	$('#chain').animate({width: '140px'}).animate({borderWidth: '5px'});
});

$(".reset").click(function(){
        $("#chain").animate({borderWidth: '1px'}).animate({width: '70px'});
});