/*
 * 
 */
function (out) {
	out.push('<fb:comments', this.domAttrs_());
	this._wgtAttrs(out);
	out.push('></fb:comments>');
}
