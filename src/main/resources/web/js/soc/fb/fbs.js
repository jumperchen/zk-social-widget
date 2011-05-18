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
	_js: false,
	/**
	 * 
	 */
	loadjs: function (out, locale) {
		if(!this._js) {
			out.push(this.libtag(locale));
			this._js = true;
		}
	},
	/**
	 * 
	 */
	init: function () {
		_afterFBMount(function () { 
			FB.XFBML.parse(); 
		});
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
	},
	
	
	
	_attr: function (out, p, name, val) {
		if(val)
			if(p)
				out.push(name, '=', encodeURIComponent(val), '&amp;amp;');
			else
				out.push(' ' + name + '="', val, '"');
	}
	
};

})();
