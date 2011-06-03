/**
 * 
 */
(function () {

	function _afterFBMount(f) {
		if(window.FB)
			f();
		else
			setTimeout(function () { // TODO: setInterval
				_afterFBMount(f); 
			}, 500 );
	}

soc.fbs = {
	/**
	 * 
	 */
	loadjs: function (locale) {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/' + 
				(locale || 'en_US') + '/all.js';
		e.async = true;
		jq.head().appendChild(e);
	},
	/**
	 * 
	 */
	init: function () {
		// TODO: init only once
		_afterFBMount(function () {
			FB.init({
				// appId: 'YOUR APP ID', // TODO: app id
				status : true,
				cookie : true,
				xfbml : true
			});
		});
	},
	/**
	 * 
	 */
	subscribe: function (name, f) {
		_afterFBMount(function () {
			FB.Event.subscribe(name, f);
		});
	},
	/**
	 * 
	 */
	unsubscribe: function (name, f) {
		_afterFBMount(function () {
			FB.Event.unsubscribe(name, f);
		});
	}
};

// load js here
soc.fbs.loadjs(); // TODO: locale

})();
