/**
 * 
 */
soc.fb.FacebookWidget = zk.$extends(zk.Widget, {
	//@Override
	redraw: function (out) {
		// TODO: load js
		this.$supers("redraw", arguments);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		if(this._mold == 'xfbml');
			soc.fbs.init(); // TODO: only once
	}
});
