(function(utils, config){

	utils.delayRender = function(callback){
		return setTimeout(callback, config.renderDelay);
	};

	utils.delayDuration = function(callback){
		return setTimeout(callback, config.duration);
	};

	utils.prevent = function(e){
		e.preventDefault();
	};

})(app.utils, app.config);