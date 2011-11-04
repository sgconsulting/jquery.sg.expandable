/***********************************
File    : jquery.sg.expandable
Author  : filippo pacini <filippo.pacini@gmail.com>
Note    : Code inspired on the "A List Apart" article:
          http://www.alistapart.com/articles/expanding-text-areas-made-elegant/
          by Neil Jenkins
License :
The contents of this file are subject to the Mozilla Public
License Version 1.1 (the "License"); you may not use this file
except in compliance with the License. You may obtain a copy of
the License at http://www.mozilla.org/MPL/

Software distributed under the License is distributed on an "AS IS"
basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
the License for the specific language governing rights and
limitations under the License.
The Initial Developer of the Original Code is S.G. Consulting
srl. Portions created by S.G. Consulting s.r.l. are Copyright (C)
2011 S.G. Consulting srl. All Rights Reserved.

************************************/
;(function($){
     // put the expand object inside the the wrapped set
     $.fn.expand = function(options) {
	 var settings = {};
	 settings = $.extend(settings, options||{});
	 // DOM manipulation
	 var wrapper = document.createElement("div");
	 wrapper.className = 'expandingArea';
	 var hidden = document.createElement("pre");
	 hidden.appendChild(document.createElement("span"));
	 hidden.appendChild(document.createElement("br"));
	 wrapper.appendChild(hidden);
	 // replace textareas with the wrapper
	 var textareas = this;
	 textareas.each(function() {
			    var txtArea = this;
			    this.parentNode.replaceChild(wrapper, this);
			    wrapper.appendChild(txtArea);
			});
	 // end DOM manipulation
	 // make textareas expandable
	 var areas = $('.expandingArea textarea');
	 var spans = $('.expandingArea span');
	 for (var i = 0, len = areas.length; i < len; i++) {
	     var area = areas[i];
	     var span = spans[i];
	     if (area.addEventListener) {
		 area.addEventListener('input', function() {
					   span.textContent = area.value;
				       }, false);
		 span.textContent = area.value;
	     } else if (area.attachEvent) {
		 // IE8 compatibility
		 area.attachEvent('onpropertychange', function() {
				      span.innerText = area.value;
				  });
		 span.innerText = area.value;
	     }
	 }
	 // Enable extra CSS
	 $('.expandingArea').addClass('active');
	 return this;
     };
})(jQuery);