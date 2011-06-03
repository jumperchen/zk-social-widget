/**
 * 
 */
soc.fb.Like = zk.$extends(soc.fb.TaggingWidget, {
	_send: false,
	_layout: 0,
	
	$define: {
		send: _zkf = function () {
			this.rerender();
		}
		// TODO
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
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
