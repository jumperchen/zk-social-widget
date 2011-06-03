/* LikeEvent.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  Jun 3, 2011 3:38:41 PM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.facebook.event;

import java.util.Map;

import org.zkoss.zk.au.AuRequest;
import org.zkoss.zk.au.AuRequests;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.event.Event;

/**
 * 
 * @author simonpai
 */
public class LikeEvent extends Event {
	
	private static final long serialVersionUID = -886212275545883959L;
	
	private final boolean _liked;
	private String _url;
	
	public static final LikeEvent getEvent(AuRequest request) {
		final Map data = request.getData();
		return new LikeEvent(request.getCommand(), request.getComponent(),
			AuRequests.getBoolean(data, "like"), (String) data.get("url"));
	}
	
	/**
	 * 
	 * @param liked
	 */
	public LikeEvent(String name, Component target, boolean liked) {
		super(name, target);
		_liked = liked;
	}
	
	/**
	 * 
	 * @param liked
	 * @param url
	 */
	public LikeEvent(String name, Component target, boolean liked, String url) {
		this(name, target, liked);
		_url = url;
	}
	
	/**
	 * 
	 */
	public final boolean isLiked() {
		return _liked;
	}
	
	/**
	 * 
	 * @return
	 */
	public final String getUrl() {
		return _url;
	}
	
}
