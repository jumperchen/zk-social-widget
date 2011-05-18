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
	init: function () {
		_afterFBMount(function () { 
			FB.XFBML.parse(); 
		});
	},
	// TODO: move to wgtAttr_ in FacebookWidget.js
	attr: function (name, val) {
		// TODO: escape
		return val ? name + '=' + encodeURIComponent(val) + '&amp;amp;' : '';
	},
	/**
	 * 
	 */
	libtag: function (locale) {
		return '<script src="' + this.libsrc(locale) + '"></script>';
	},
	/**
	 * 
	 */
	libsrc: function (locale) {
		return 'http://connect.facebook.net/' + (locale || 'en_US') + '/all.js#xfbml=1';
	}
	
};

})();
