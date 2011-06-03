/* FacebookLike.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  May 2, 2011 6:26:15 PM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.facebook;

import java.io.IOException;

import org.zkoss.social.facebook.event.LikeEvent;
import org.zkoss.zk.ui.event.CheckEvent;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zk.ui.sys.ContentRenderer;

/**
 *
 * @author simonpai
 */
public class Like extends TaggingElement {
	
	private static final long serialVersionUID = 2139026200562628024L;
	
	public static final int STANDARD = 0;
	public static final int BUTTON_COUNT = 1;
	public static final int BOX_COUNT = 2;
	
	private boolean _send;
	private int _layout;
	private boolean _showFaces;
	private String _action = "like";
	
	static {
		addClientEvent(Like.class, "onLike", CE_DUPLICATE_IGNORE | CE_IMPORTANT);
	}
	// TODO: onLike event
	
	// getter, setter //
	/**
	 * 
	 */
	public boolean getSend() {
		return _send;
	}
	
	/**
	 * 
	 * @param send
	 */
	public void setSend(boolean send) {
		_send = send;
	}
	
	
	
	@Override
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		if(_send) 
			render(renderer, "send", _send);
	}
	
	@Override
	public void service(org.zkoss.zk.au.AuRequest request, boolean everError) {
		if ("onLike".equals(request.getCommand())) {
			LikeEvent evt = LikeEvent.getEvent(request);
			Events.postEvent(evt);
		} else
			super.service(request, everError);
	}
	
	public String getZclass() {
		return _zclass == null ? "z-fb-like" : _zclass;
	}
	
}

