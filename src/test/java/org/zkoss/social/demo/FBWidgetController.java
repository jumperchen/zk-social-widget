/* FBWidgetController.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  Jun 3, 2011 3:52:02 PM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.demo;

import org.zkoss.social.facebook.Like;
import org.zkoss.social.facebook.event.LikeEvent;
import org.zkoss.zk.ui.util.GenericForwardComposer;

/**
 *
 * @author simonpai
 */
public class FBWidgetController extends GenericForwardComposer {
	
	private static final long serialVersionUID = 8579428264784118171L;
	
	public void onLike$like2(LikeEvent event) {
		alert(event.getUrl() + " is " + (event.isLiked() ? "liked" : "unliked"));
	}
	
}
