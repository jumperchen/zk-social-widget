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
		locale: _zkf
	},
	/**
	 * 
	 */
	wgtAttrs_: function (attr) {
		attr('colorscheme', this._colorscheme);
		attr('font', this._font);
		// get width and height for outer div
		// TODO
	},
	_wgtAttrs: function (out, p) {
		this.wgtAttrs_(function (n, v) { 
			soc.fbs._attr(out, p, n, v); 
		});
	},
	//@Override
	redraw: function (out) {
		soc.fbs.loadjs(out, this._locale);
		this.$supers("redraw", arguments);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		soc.fbs.init();
	}
});
