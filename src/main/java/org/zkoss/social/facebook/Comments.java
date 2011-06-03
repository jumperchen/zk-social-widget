/* Comment.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  Jun 3, 2011 11:03:07 AM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.facebook;

import java.io.IOException;

import org.zkoss.lang.Objects;
import org.zkoss.zk.ui.sys.ContentRenderer;

/**
 *
 * @author simonpai
 */
public class Comments extends TaggingElement {
	
	private static final long serialVersionUID = -616899817943777534L;
	
	protected int _numPosts = 10;
	
	/**
	 * 
	 * @return
	 */
	public int getNumPosts() {
		return _numPosts;
	}
	
	/**
	 * 
	 * @param number
	 */
	public void setNumPosts(int number) {
		if(!Objects.equals(_numPosts, number)) {
			_numPosts = number;
			smartUpdate("numPost", _numPosts);
		}
	}
	
	@Override
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		if(_numPosts != 10)
			render(renderer, "numPosts", _numPosts);
	}
	
}
