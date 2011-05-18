/*
<fb:like href="http://www.fblike.com/" 
	send="true" width="450" show_faces="true" 
	action="recommend" colorscheme="dark" font=""></fb:like>
 * 
 */
function (out) {
	// TODO: outer block
	out.push('<div style="display: inline-block;">', soc.fbs.libtag(), // TODO: locale
			'<fb:like ', this.domAttrs_(), '></fb:like></div>'); // TODO: separate fbAttrs
}
