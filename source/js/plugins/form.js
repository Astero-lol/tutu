app.plugins.register('form', function () {

	var $block = $(this),
		$field = $block.find('.form__field');

	$field.addClass('form__field_empty');

	$field.on('blur', function () {
		var self = $(this),
			$form = app.dom.$root.find('.form'),
			isEmpty = self.val() == '',

			$progress = app.dom.$root.find('.progress'),
			$progreeItem = $progress.find('.progress__item');

		self.each(function () {
			if(isEmpty) {
				self.addClass('form__field_empty');
			} else {
				self.removeClass('form__field_empty');
			}
		});

		for(var i = 0; i < $form.find('.form__field_empty').length + 2; i++) {
			$progreeItem.removeClass('progress__item_active');
			$progreeItem.eq(i).addClass('progress__item_active');

			if($form.find('.form__field_empty').length == 0) {
				$progreeItem.addClass('progress__item_active');
			}
		}

	});
	
});