/* TaggingElement.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  Jun 3, 2011 12:09:55 PM , Created by simonpai
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
public class TaggingElement extends FacebookElement {
	
	private static final long serialVersionUID = 6403943009871780089L;
	
	protected String _href;
	
	/**
	 * 
	 */
	public String getHref() {
		return _href;
	}
	
	/**
	 * 
	 * @param href
	 */
	public void setHref(String href) {
		if(!Objects.equals(_href, href)) {
			_href = href;
			smartUpdate("href", _href);
		}
	}
	
	@Override
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		render(renderer, "href", _href);
	}
	
}
