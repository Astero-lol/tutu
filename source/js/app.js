/* --- App --- */
var app = {
	sizes: {},
	viewport: {},
	device: {},
	plugins: {},
	utils: {}
};


/* --- Config --- */
app.config = {
	duration: 350,
	renderDelay: 1000/60
};


/* --- DOM --- */
app.dom = {
	$root: $('#root'),
	$html: $('html'),
	$body: $('body'),
	$document: $(document),
	$window: $(window)
};