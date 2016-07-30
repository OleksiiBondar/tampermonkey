// ==UserScript==
// @name         DevJam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        https://www.expedia.com/Details?action*
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js
// @require      https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js

// ==/UserScript==
GM_addStyle(".notifyjs-foo-base { opacity: 0.85; width: 400px; background: #69CEF0; padding: 5px; border-radius: 10px; color: white; } .notifyjs-foo-base .p {  float: left; margin: 10px 0 0 10px; text-align: right; color: white; }");

$.notify.addStyle('foo', {
  html: 
        "<p>Hot Deals on TicketMaster<p id='results'/></p>"
});


$.notify({
  title: 'Hot Deals on TicketMaster'
}, { 
  style: 'foo',
  clickToHide: true,
  autoHide: false,
  autoHideDelay: 10000,
  showAnimation: 'slideDown',
  showDuration: 400,
  hideAnimation: 'slideUp',
  hideDuration: 200

});

$.getJSON( "https://app.ticketmaster.com/discovery/v2/events.json?apikey=SLFZ5pYZ6UlXoUpRG5IJhtGeE4ohRpGs&city=Austin&countryCode=US&onsaleStartDateTime=2016-10-10T20:15:00Z&onsaleEndDateTime=2017-12-12T00:00:00Z", function(data) {
    
    var contentTable = '';
    $.each(data._embedded.events, function(index, event) {
       contentTable += '<tr><td><a href="'+ event.url + '">' + event.name + '</a></td></tr>';
    });

    
    console.log(contentTable);
    $("#results").append(contentTable);
});


