/* FacebookElement.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  May 10, 2011 5:12:27 PM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.facebook;

import java.io.IOException;

import org.zkoss.lang.Objects;
import org.zkoss.lang.Strings;
import org.zkoss.zk.ui.HtmlBasedComponent;
import org.zkoss.zk.ui.sys.ContentRenderer;

/**
 *
 * @author simonpai
 */
public class FacebookElement extends HtmlBasedComponent {
	
	private static final long serialVersionUID = 9145349786543108135L;
	
	private String _color = "light";
	private String _font;
	private String _ref;
	private String _locale;
	
	/**
	 * 
	 */
	public String getColorscheme() {
		return _color;
	}
	
	/**
	 * 
	 * @param colorscheme
	 */
	public void setColorscheme(String colorscheme) {
		if(!Objects.equals(_color, colorscheme)) {
			_color = colorscheme;
			smartUpdate("color", _color);
		}
	}
	
	/**
	 * 
	 */
	public String getFont() {
		return _font;
	}
	
	/**
	 * 
	 * @param font
	 */
	public void setFont(String font) {
		if(!Objects.equals(_font, font)) {
			_font = font;
			smartUpdate("font", _font);
		}
	}
	
	/**
	 * 
	 */
	public String getRef() {
		return _ref;
	}
	
	/**
	 * 
	 * @param ref
	 */
	public void setRef(String ref) {
		if(!Objects.equals(_ref, ref)) {
			_ref = ref;
			smartUpdate("ref", _ref);
		}
	}
	
	/**
	 * 
	 */
	public String getLocale() {
		return _locale;
	}
	
	/**
	 * 
	 * @param locale
	 */
	public void setLocale(String locale) {
		if(!Objects.equals(_locale, locale)) {
			_locale = locale;
			smartUpdate("locale", _locale);
		}
	}
	
	
	
	// super //
	@Override
	protected void renderProperties(ContentRenderer renderer)
			throws IOException {
		super.renderProperties(renderer);
		if(!"light".equals(_color))
			render(renderer, "color", _color);
		if(!Strings.isEmpty(_font))
			render(renderer, "font", _font);
		if(!Strings.isEmpty(_ref))
			render(renderer, "ref", _ref);
		if(!Strings.isEmpty(_locale) && "en_US".equals(_locale))
			render(renderer, "locale", _locale);
	}
	
	@Override
	protected boolean isChildable() {
		return false; // not childable
	}
	
}
