// ==UserScript==
// @name         ExpediaFlightSearch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        http://www.ticketmaster.com/event*
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js

// ==/UserScript==
GM_addStyle(".notifyjs-foo-base { opacity: 0.85; width: 400px; background: #FFCB00; padding: 5px; border-radius: 10px; color: white; link: white; vlink: white; alink: white; } .notifyjs-foo-base .div {  float: left; margin: 10px 0 0 10px; text-align: right; color: white; }");

$.notify.addStyle('foo', {
  html: 
        "<div id='results'></div>"
});


$.notify({
  title: 'Flights list'
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




$(document).ready(function() {

    var departureDate = '2016-10-10';
    var returnDate = '2016-10-12';
    var departureAirport = 'SEA';
    var arrivalAirport = 'MIA';

    var restApiUrl = 'http://terminal2.expedia.com:80/x/mflights/search?departureDate=' + departureDate + '&returnDate=' + returnDate + '&departureAirport=' + departureAirport + '&arrivalAirport=' + arrivalAirport + '&apikey=rxrUZKoPlSKZXN4PPZQfDgOK2dMRyG7Z';


    $.getJSON(restApiUrl, function(data) {

        var contentTable = '<table>';
        $.each(data.offers, function(index, offer) {
            if (index < 10) {
                contentTable += '<tr><td><a target="_blank" href="' + offer.detailsUrl + '">From=' + departureAirport + ' To='+arrivalAirport+' Price='+offer.baseFarePrice.formattedPrice+'</a></td></tr>';
            } else {
                return false;
            }
        });
        contentTable += '</table>';
        $("#results").append(contentTable);
        console.log(contentTable);
    });
});









