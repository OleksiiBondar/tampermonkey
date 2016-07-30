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

// ==/UserScript==
GM_addStyle(".notifyjs-foo-base { opacity: 0.85; width: 400px; background: #EBF21B; padding: 5px; border-radius: 10px; color: white; link: white; vlink: white; alink: white; } .notifyjs-foo-base .div {  float: left; margin: 10px 0 0 10px; text-align: right; color: white; }");

$.notify.addStyle('foo', {
  html: 
        "<div id='results'></div>"
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

var departDate;
var returnDate;
var returnAirport;
var restApiUrl;

$(document).ready(function () {  
    var departDateLocal = localStorage.getItem('departDate').replace('/', '-').replace('/', '-').replace('/', '-');
    var returnDateLocal = localStorage.getItem('returnDate').replace('/', '-').replace('/', '-').replace('/', '-');
    
    var departDateArr = departDateLocal.split('-');
    departDate = departDateArr[2] + '-' + departDateArr[0] + '-' + departDateArr[1];
    
    var returnDateArr = returnDateLocal.split('-');
    returnDate = returnDateArr[2] + '-' + returnDateArr[0] + '-' + returnDateArr[1];
    
    var returnAirportLocal = localStorage.getItem('returnAirport');
    returnAirport = returnAirportLocal.split(' ')[0];
    
    restApiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=SLFZ5pYZ6UlXoUpRG5IJhtGeE4ohRpGs&city=' + returnAirport + '&countryCode=US&startDateTime='+departDate+'T00:00:00Z&endDateTime='+returnDate+'T00:00:00Z&size=10';
    console.log(departDate + ' ' + returnDate + ' '+ returnAirport);
    console.log(restApiUrl);
    
    $.getJSON( restApiUrl, function(data) {
        var contentTable = '';
        $.each(data._embedded.events, function(index, event) {
            contentTable += '<tr><td><a href="'+ event.url + '">' + event.name + '</a></td></tr>';
        });
        $("#results").append(contentTable);
        console.log(contentTable);
    });
});








