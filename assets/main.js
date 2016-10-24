var panel = $('.panel');

$('h1').click(function () {
	panel.removeClass('show');
	$(this).siblings('.panel').addClass('show');
});