(function () {
	
/**
 * 
 */
soc.fb.Like = zk.$extends(soc.fb.TaggingWidget, {
	_send: false,
	//_layout: 0,
	
	$define: {
		send: _zkf = function () {
			this.rerender();
		}
		// TODO
	},
	_fireLike: function (resp, like) {
		if(resp == this._href)
			this.fire('onLike', {like:like, url:resp});
	},
	//@Override
	wgtAttrs_: function (attr) {
		this.$supers('wgtAttrs_', arguments);
		attr('send', this._send);
	},
	bind_: function () {
		this.$supers("bind_", arguments);
		var self = this;
		this._fLike = function (resp) {
			self._fireLike(resp, true);
		};
		this._fUnlike = function (resp) {
			self._fireLike(resp, false);
		};
		soc.fbs.subscribe('edge.create', this._fLike);
		soc.fbs.subscribe('edge.remove', this._fUnlike);
	},
	unbind_: function () {
		soc.fbs.unsubscribe('edge.create', this._fLike);
		soc.fbs.unsubscribe('edge.remove', this._fUnlike);
		this.$supers("unbind_", arguments);
	}
});

})();