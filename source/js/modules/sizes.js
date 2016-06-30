(function(sizes, viewport){

	// {fn} get window sizes
	var updateSizes = function(){
		sizes.width = app.dom.$window.width();
		sizes.height = parseInt(window.innerHeight,10);
	};

	// {fn} get window viewport (for media-queries)
	var updateViewport = function(){
		var element = window,
		    prefix = 'inner';
		if (!(prefix+'Width' in window)) {
			prefix = 'client';
			element = document.documentElement || document.body;
		}
		viewport.width = element[prefix+'Width'];
		viewport.height = element[prefix+'Height'];
	};

	// {fn} update sizes
	var update = function(){
		updateSizes();
		updateViewport();
		app.device.check();
	};

	// {event} window resize
	app.dom.$window.on('resize.app', update);

	// get current values
	update();

	// {fn} get height
	sizes.getWidth = function(){
		return sizes.width;
	};
	// {fn} get height
	sizes.getHeight = function(){
		return sizes.height;
	};

})(app.sizes, app.viewport);