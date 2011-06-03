(function () {
	
	function _attr (out, p, name, val) {
		if(val)
			if(p)
				out.push(name, '=', encodeURIComponent(val), '&amp;amp;');
			else
				out.push(' ' + name + '="', val, '"');
	}
	
/**
 * 
 */
soc.fb.FacebookWidget = zk.$extends(zk.Widget, {
	
	$define: {
		colorscheme: _zkf = function () {
			this.rerender();
		},
		font: _zkf
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
			_attr(out, p, n, v); 
		});
	},
	//@Override
	bind_: function () {
		this.$supers("bind_", arguments);
		soc.fbs.init();
	}
});

})();
