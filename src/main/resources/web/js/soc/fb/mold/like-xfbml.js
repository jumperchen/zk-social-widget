/*
<fb:like href="http://www.fblike.com/" 
	send="true" width="450" show_faces="true" 
	action="recommend" colorscheme="dark" font=""></fb:like>
 * 
 */
function (out) {
	// TODO: use util
	out.push('<script src="http://connect.facebook.net/');
	out.push('en_US'); // TODO: locale
	out.push('/all.js#xfbml=1"></script>');
	out.push('<fb:like ', this.domAttrs_(), '></fb:like>');
}
