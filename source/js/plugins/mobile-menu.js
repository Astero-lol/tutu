app.plugins.register('mobile-menu', function () {

	var $block = $(this),
		$menuButton = app.dom.$root.find('.header-menu-button'),
		isActive = true;

	var api = {
		open: function () {
			$block.addClass('mobile-menu_active');
			$menuButton.addClass('header-menu-button_active');
			isActive = false;
			app.dom.$body.css('overflow', 'hidden');
		},
		close: function () {
			$block.removeClass('mobile-menu_active');
			$menuButton.removeClass('header-menu-button_active');
			isActive = true;
			app.dom.$body.css('overflow', 'visible');
		}
	};

	$menuButton.on('click', function () {
		isActive ? api.open() : api.close();
	});
});