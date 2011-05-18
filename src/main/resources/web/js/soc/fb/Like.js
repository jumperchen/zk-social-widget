/**
 * 
 */
soc.fb.Like = zk.$extends(soc.fb.FacebookWidget, {
	_send: false,
	_layout: 0,
	
	$define: {
		href: _zkf = function () {
			this.rerender();
		},
		send: _zkf
		// TODO
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
		attr('href', this._href);
		attr('send', this._send);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		// TODO: onLike
	},
	unbind_: function () {
		// TODO: onLike
		this.$supers("unbind_", arguments);
	}
});
