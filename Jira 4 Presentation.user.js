// ==UserScript==
// @name         Jira 4 Presentation
// @namespace    http://www.deutschebahn.com
// @version      0.1
// @description  try to take over the world!
// @author       Oliver Staudt
// @match        https://jira.dbsr-ccl.com/browse/*
// @grant        none
// ==/UserScript==

// Add jQuery, unless it already exists
if(typeof jQuery === 'undefined'|| !jQuery){
    (function(){
        var s=document.createElement('script');
        s.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
        if(typeof jQuery=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    })();
}

(function(){
    var codeToExecute = function(){
        /***********************/
        // YOUR CODE HERE
        /***********************/
        var myScript=document.createElement('script');
        myScript.textContent = 'var present = function(){'+
            '$("#issuedetails").fadeToggle();'+
            '$("#viewissuesidebar").fadeToggle();'+
            //'$("#attachmentmodule").fadeToggle();'+
            '$(".toolbar-split-left").fadeToggle();'+
            '$("#header").fadeToggle();'+
            '$("#announcement-banner").fadeToggle();'+
            '$("#rowForcustomfield_10004").fadeToggle();'+
            '};';
        document.body.appendChild(myScript);
       $("#opsbar-jira\\.issue\\.tools").append("<li class='toolbar-item'><a id='jira-present-trigger' onClick='present();' class='toolbar-trigger viewissue-share' original-title='Verstecke alle nicht wichtigen Infromationen'><span class='icon aui-icon aui-icon-small aui-iconfont-share'></span> <span class='trigger-label'>Präsentiere</span></a></li>");
    };

    var intervalInt = window.setInterval(function(){
        if(typeof jQuery !== 'undefined' && jQuery){
            // Clear this interval
            window.clearInterval(intervalInt);

            codeToExecute();
        }
    }, 100);
})();