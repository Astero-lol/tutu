(function(plugins){

	var storage = [];

	plugins.register = function(name, fn){
		storage[name] = fn;
	};

	$.fn.plugin = function(name){
		if (!this.length) return false;
		var pluginName = name;
		[].shift.apply(arguments);
		var params = arguments;
		this.each(function(){
			var $el = $(this);
			if (!$el.data('plugins')) $el.data('plugins', []);
			if ($el.data('plugins').indexOf(pluginName)<0) {
				if (storage[pluginName]) {
					storage[pluginName].apply(this, params);
					$el.data('plugins').push(pluginName);
				} else {
					console.error('Plugin ' + pluginName + ' not found');
				}
			}
		});
		return this;
	};

	$.fn.plugins = function(names){
		for (var i = 0; i < names.length; i++) {
			if (this.hasClass(names[i])) this.plugin(names[i]);
			this.find('.'+names[i]).plugin(names[i]);
		};
		return this;
	};

})(app.plugins);