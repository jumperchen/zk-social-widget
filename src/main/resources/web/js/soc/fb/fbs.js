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
	
	attr: function (name, val) {
		// TODO: escape
		return val ? name + '=' + encodeURIComponent(val) + '&amp;amp;' : '';
	}
	
};

})();
