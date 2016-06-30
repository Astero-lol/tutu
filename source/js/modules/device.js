(function(device, dom, sizes, viewport){

	/* --- Support --- */
	device.support = Modernizr;

	/* --- Check --- */
	device.check = function(){
		// phone
		device.isPhone = (viewport.width < 768);
		dom.$html.addClass(device.isPhone ? 'd-phone' : 'd-no-phone');
		dom.$html.removeClass(device.isPhone ? 'd-no-phone' : 'd-phone');
	};

	/* --- Mobile --- */
	device.isMobile = device.support.touch;
	dom.$html.addClass(device.isMobile ? 'd-mobile' : 'd-no-mobile');

	/* --- Retina --- */
	device.isRetina = (window.devicePixelRatio && window.devicePixelRatio>1);
	dom.$html.addClass(device.isRetina ? 'd-retina' : 'd-no-retina');

	/* --- Apple devices --- */
	if (navigator.userAgent.match(/iPad/i)) {
		dom.$html.addClass('d-ipad');
		device.isIPad = true;
	};
	if (navigator.userAgent.match(/(iPhone|iPod touch)/i)) {
		dom.$html.addClass('d-iphone');
		device.isIPhone = true;
	};
	if (navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i)) {
		dom.$html.addClass('d-ios');
		device.isIOS = true;
	};

})(app.device, app.dom, app.sizes, app.viewport);