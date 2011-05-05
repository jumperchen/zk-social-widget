/* Facebooks.java

{{IS_NOTE
 Purpose:
  
 Description:
  
 History:
  May 3, 2011 6:25:50 PM , Created by simonpai
}}IS_NOTE

Copyright (C) 2011 Potix Corporation. All Rights Reserved.

{{IS_RIGHT
}}IS_RIGHT
*/
package org.zkoss.social.util;

/**
 *
 * @author simonpai
 */
public class Facebooks {
	
	public static String getFBLikeLib() {
		String locale = "en_US"; // TODO: locale
		return "document.write('<script src=\"http://connect.facebook.net/" + locale + "/all.js#xfbml=1\"></script>');";
	}
	
}
