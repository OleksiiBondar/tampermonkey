// ==UserScript==
// @name         TM DevJam: Expedia - Destination Data Capture
// @author       Oleksii Bondar, Andrii Golovei, Arthur Kiselev
// @namespace    tmdj
// @match        https://www.expedia.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://momentjs.com/downloads/moment.min.js
// ==/UserScript==

$(document).ready(function () {
  $('#search-button').click(function () {
    var location = $('#flight-destination').val() || $('#activity-destination').val() || "Seattle";
    var start = $('#flight-departing').val() || $('#activity-start').val() || "08/10/2016";
    var end = $('#flight-returning').val() || $('#activity-end').val() || "08/20/2016";

    start = moment(start, 'MM-DD-YYYY').format('YYYY-MM-DD');
    end = moment(end, 'MM-DD-YYYY').format('YYYY-MM-DD');
    location = location.split(/\s*[,]\s*/)[0];

    localStorage.setItem('tm_location', location);
    localStorage.setItem('tm_start', start);
    localStorage.setItem('tm_end', end);

    console.log("TMDJ", location);
    console.log("TMDJ", start);
    console.log("TMDJ", end);
  });
});