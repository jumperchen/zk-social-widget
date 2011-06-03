/**
 * 
 */
soc.fb.TaggingWidget = zk.$extends(soc.fb.FacebookWidget, {
	
	$define: {
		href: function () {
			this.rerender();
		}
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
		attr('href', this._href);
	}
	
});