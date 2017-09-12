function prepareList() {
	$('.explist').find('li:has(ul)').unbind('click').click( function(event) {
		if (this == event.target) {
			$(this).toggleClass('expanded');
			$(this).children('ul').toggle('medium');
		}
		return false;
	})
	.addClass('collapsed').removeClass('expanded').children('ul').hide();
	$('.explist a').unbind('click').click(function() {
		window.location=$(this).attr('href');
		return false;
	});
	$('#expand-list').unbind('click').click(function() {
		$('.collapsed').addClass('expanded');
		$('.collapsed').children('ul').show('medium');
	});
	$('#collapse-list').unbind('click').click(function() {
		$('.collapsed').removeClass('expanded');
		$('.collapsed').children('ul').hide('medium');
	});
};

$(document).ready(function(){prepareList()});