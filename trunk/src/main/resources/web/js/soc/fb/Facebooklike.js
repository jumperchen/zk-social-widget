/**
 * 
 */
soc.fb.Facebooklike = zk.$extends(soc.fb.FacebookWidget, {
	_send: false,
	_layout: 0,
	
	$init : function() {
		this.$supers('$init', arguments);
		if(!window.FB) {
			var locale = 'en_US';
			//document.write('<script src="http://connect.facebook.net/' + locale + '/all.js#xfbml=1"></script>');
		}
	},
	$define: {
		href: _zkf = function () {
			this.rerender();
		},
		send: _zkf
		// TODO
	},
	//@Override
	domAttrs_: function () {
		var attr = this.$supers('domAttrs_', arguments); // TODO: check
		if (this._href)
			attr += ' href="' + this._href + '"';
		if (this._send)
			attr += ' send="' + this._send + '"';
		// TODO
		return attr;
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		soc.fbs.init();
		// TODO: onLike
	},
	unbind_: function () {
		// TODO: onLike
		this.$supers("unbind_", arguments);
	}
});
