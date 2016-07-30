// ==UserScript==
// @name         DevJam Cookie Populator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Oleksii Bondar
// @grant        GM_addStyle
// @match        https://www.expedia.com/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==


$(document).ready(function () {  
    localStorage.setItem('departDate' ,$('#departDate').val()); 
    localStorage.setItem('returnDate', $('#returnDate').val()); 
    localStorage.setItem('returnAirport', $('#returnAirport').val()); 
});

