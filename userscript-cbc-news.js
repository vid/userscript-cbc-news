// ==UserScript==
// @name         cbc news improvements
// @namespace    http://nicer.info
// @version      0.2
// @description  support visited links for CBC news
// @author       Vid
// @match        http://www.cbc.ca/news
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

(function(doc) {
    
      $("<style>").prop("type", "text/css").html("a:visited h3.headline { color: purple !important;}").appendTo("head");
    
})(document);
