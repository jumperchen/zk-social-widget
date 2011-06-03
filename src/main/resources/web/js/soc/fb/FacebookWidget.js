/**
 * 
 */
soc.fb.FacebookWidget = zk.$extends(zk.Widget, {
	//_colorscheme: '',
	//_font,
	//_locale,
	
	$define: {
		colorscheme: _zkf = function () {
			this.rerender();
		},
		font: _zkf,
		locale: _zkf // TODO: remove
	},
	/**
	 * 
	 */
	wgtAttrs_: function (attr) {
		attr('colorscheme', this._colorscheme);
		attr('font', this._font);
		// TODO: width/height
	},
	_wgtAttrs: function (out, p) {
		this.wgtAttrs_(function (n, v) { 
			soc.fbs._attr(out, p, n, v); 
		});
	},
	//@Override
	redraw: function (out) {
		this.$supers("redraw", arguments);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		soc.fbs.init();
	}
});
