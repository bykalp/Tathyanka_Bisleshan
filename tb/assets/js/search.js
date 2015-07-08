(function($) {

	$(document).ready(function() {
		var elem_a = $('#search_nav ul li a');
		elem_a.click(function() {
			$('#search_nav ul li a.selected').removeClass('selected');
			$(this).addClass('selected');
		});
	});
})(jQuery);