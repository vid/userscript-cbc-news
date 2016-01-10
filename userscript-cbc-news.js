// ==UserScript==
// @name         cbc news improvements
// @namespace    http://nicer.info
// @version      0.1
// @description  deduplicate and support visited links for CBC news
// @author       Vid
// @match        http://www.cbc.ca/news
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

(function(doc) {
    function improve() {
        // add read class
        $("<style>").prop("type", "text/css").html("a:visited { color: purple;}").appendTo("head");
        // parse through each quote and post via ajax
        var seen = {};
        function parseSection(section, index) {
            jQuery(section).find('a').each(function() {
                var a = this;
                if (!a.href.match(/cbc.ca\/news\//)) {
                    // not a news link
                } else if (seen[a.href]) {
                    a.style.color = 'grey';
                } else {
                    seen[a.href] = a;
                }
            });
        }
        parseSection(jQuery('.topstories'));
        // parse sectins so articles preferentially show in top stories
        var w = jQuery('.wrap4');
        parseSection(w[2], 2);
        w.each(function(index, section) {
            if (index !== 2) {
                 parseSection(section, index);
            }
        });
    }
    
    // use as a flag to run the script
    var didRun = false;
    
    function mayRun() {
      if (!didRun) {
          didRun = true; 
          improve();
      }
    }
    
    // if any page script fails this won't run
    jQuery(document).ready(mayRun);
    // so this is the backup
    setTimeout(mayRun, 1000);
    
})(document);
