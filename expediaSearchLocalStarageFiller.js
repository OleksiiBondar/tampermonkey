// ==UserScript==
// @name         ExpediaSearchLSPopulator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        http://www.ticketmaster.com/
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==


$(document).ready(function () {  
    localStorage.setItem('departDate' ,$('#calendar_from_input').val()); 
    localStorage.setItem('returnDate', $('#calendar_to_input').val()); 
});

