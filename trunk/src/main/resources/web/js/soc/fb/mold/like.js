/*
 * 
 */
function (out) {
	out.push('<fb:like', this.domAttrs_());
	this._wgtAttrs(out);
	out.push('></fb:like>');
}
