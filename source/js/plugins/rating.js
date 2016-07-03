app.plugins.register('rating', function () {

	var $block = $(this),
		$item = $block.find('.rating__item');

	$item.on('click', function () {
		var self = $(this);

		$item.removeClass('rating__item_active');
		self.addClass('rating__item_active');
	});

});