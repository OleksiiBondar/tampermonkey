// ==UserScript==
// @name         DevJam Cookie Populator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        https://www.expedia.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
// ==/UserScript==

$.cookie('author', 'alex');
$.cookie('startDate', $('#flight-departing').val());
var endDate = $('#flight-returning').val();
$.cookie('endDate', endDate);
$.cookie('destination', $('#flight-destination').val());
