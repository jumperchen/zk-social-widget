/**
 * 
 */
soc.fb.Comments = zk.$extends(soc.fb.TaggingWidget, {
	
	$define: {
		numPosts: function () {
			this.rerender();
		}
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
		attr('num_posts', this._numPosts);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
	},
	unbind_: function () {
		this.$supers("unbind_", arguments);
	}
	
});
