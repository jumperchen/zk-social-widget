/*
 * 
 */
function (out) {
	// TODO: check outer div design
	out.push('<div style="display: inline-block;"><fb:like');
	this._wgtAttrs(out);
	out.push('></fb:like></div>');
}
