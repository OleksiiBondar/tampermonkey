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

$.cookie('author', 'alex', { expires: 7, path: '/' });
$.cookie('departDate', $('#departDate').val(), { expires: 7, path: '/' });
$.cookie('returnDate', $('#returnDate').val(), { expires: 7, path: '/' });
$.cookie('destination', $('#returnAirport').val(), { expires: 7, path: '/' });
