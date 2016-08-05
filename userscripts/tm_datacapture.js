// ==UserScript==
// @name         TM DevJam: Ticketmaster - Dates data capture
// @author       Oleksii Bondar, Andrii Golovei, Arthur Kiselev
// @namespace    tmdj
// @grant        GM_addStyle
// @match        http://www.ticketmaster.com/
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function () {
  localStorage.setItem('departDate', $('#calendar_from_input').val());
  localStorage.setItem('returnDate', $('#calendar_to_input').val());
});

