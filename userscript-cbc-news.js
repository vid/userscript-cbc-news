// ==UserScript==
// @name         cbc links
// @namespace    http://nicer.info
// @version      0.2
// @description  support visited links for CBC news
// @author       Vid
// @match        https://www.cbc.ca/news
// @grant        none
// @license      MIT
// ==/UserScript==


(function(doc) {
  const style = document.createElement("style");
  style.setAttribute("media", "screen")
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  style.sheet.insertRule("a:visited { color: purple !important }", 0);
})(document);
