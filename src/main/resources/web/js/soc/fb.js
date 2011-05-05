/**
 * 
 */
(function () {

	function _afterFBMount(f) {
		if(window.FB)
			f();
		else
			setTimeout(function () { 
				_afterFBMount(f); 
			}, 500 );
	}

soc.fb = {
	/**
	 * 
	 */
	init: function () {
		_afterFBMount(function () { 
			FB.XFBML.parse(); 
		});
	}
};

})();
