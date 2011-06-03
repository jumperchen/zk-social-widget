/**
 * 
 */
soc.fb.Comments = zk.$extends(soc.fb.FacebookWidget, {
	//_send: false,
	
	$define: {
		/*
		href: _zkf = function () {
			this.rerender();
		},
		send: _zkf
		*/
		// TODO
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
		/*
		attr('href', this._href);
		attr('send', this._send);
		*/
	},
	bind_: function () {
		this.$supers("bind_", arguments);
	},
	unbind_: function () {
		this.$supers("unbind_", arguments);
	}
});
