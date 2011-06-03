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
	//_js: false,
	/**
	 * 
	 */
	loadjs: function (locale) {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/' + (locale || 'en_US') + '/all.js';
		e.async = true;
		jq.head().appendChild(e);
	},
	/**
	 * 
	 */
	init: function () {
		_afterFBMount(function () {
			FB.init({
				// appId: 'YOUR APP ID', // TODO: app id
				status : true,
				cookie : true,
				xfbml : true
			});
			/*
			FB.XD.init();
			FB.XFBML.parse();
			*/ 
		});
	},
	/*
	libtag: function (locale, defer) {
		return '<script src="' + this.libsrc(locale) + (defer ? ' defer' : '') + '"></script>';
	},
	libsrc: function (locale) {
		return 'http://connect.facebook.net/' + (locale || 'en_US') + '/all.js#xfbml=1';
	},
	*/
	
	
	
	_attr: function (out, p, name, val) {
		if(val)
			if(p)
				out.push(name, '=', encodeURIComponent(val), '&amp;amp;');
			else
				out.push(' ' + name + '="', val, '"');
	}
	
};

// load js here
soc.fbs.loadjs(); // TODO: locale

})();
