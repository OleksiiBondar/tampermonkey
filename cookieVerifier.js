// ==UserScript==
// @name         DevJam Cookie Verifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        https://www.expedia.com/Details?action*
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
// ==/UserScript==

$(document).ready(function () {
    
       alert('Destination=' + $.cookie('destination') + ' startDate=' + $.cookie('departDate') + ' endDate=' + $.cookie('returnDate') + ' author=' + $.cookie('author') );
});
