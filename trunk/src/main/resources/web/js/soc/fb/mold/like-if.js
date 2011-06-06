/*
 * 
 */
function (out) {
	out.push('<iframe src="http://www.facebook.com/plugins/like.php?');
	this._wgtAttrs(out, true);
	out.push('"', this.domAttrs_(), ' scrolling="no" frameborder="0" allowTransparency="true"', 
			' style="border:none; overflow:hidden; width:450px; height:80px;"></iframe>'); // TODO: height & width
}
