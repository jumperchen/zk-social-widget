/*
<iframe src="http://www.facebook.com/plugins/like.php?href&amp;send=true&amp;
layout=standard&amp;width=450&amp;show_faces=true&amp;action=like&amp;
colorscheme=light&amp;font&amp;height=80" scrolling="no" frameborder="0" 
style="border:none; overflow:hidden; width:450px; height:80px;" 
allowTransparency="true"></iframe> * 
 */
function (out) {
	out.push('<iframe src="http://www.facebook.com/plugins/like.php?');
	this._wgtAttrs(out, true);
	out.push('" scrolling="no" frameborder="0" allowTransparency="true"', 
			' style="border:none; overflow:hidden; width:450px; height:80px;"></iframe>');
}
