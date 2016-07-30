// ==UserScript==
// @name         SearchExpediaFlights
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Andrii Golovei
// @grant        GM_addStyle
// @match        http://www.ticketmaster.com/event/*
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js
// @require      http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js
// @require      http://code.jquery.com/jquery-migrate-1.2.1.min.js


// ==/UserScript==
GM_addStyle(".notifyjs-tm-base { opacity: 0.85; width: 400px; background: #FFCB00; padding: 5px; border-radius: 10px; color: white; link: white; vlink: white; alink: white; } .notifyjs-tm-base .div {  float: left; margin: 10px 0 0 10px; text-align: right; color: white; }");
GM_addStyle("#expedia {background: #fff;padding: 13px;border: 1px solid #d9d9d9;border-right: 1px solid #bbb;border-bottom: 1px solid #bbb;} #expediaFlights {margin-top: 20px;}");
GM_addStyle("/* Slider */ .slick-slider { position: relative; display: block; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -khtml-user-select: none; -ms-touch-action: pan-y; touch-action: pan-y; -webkit-tap-highlight-color: transparent; } .slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; } .slick-list:focus { outline: none; } .slick-list.dragging { cursor: pointer; cursor: hand; } .slick-slider .slick-track, .slick-slider .slick-list { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } .slick-track { position: relative; top: 0; left: 0; display: block; } .slick-track:before, .slick-track:after { display: table; content: ''; } .slick-track:after { clear: both; } .slick-loading .slick-track { visibility: hidden; } .slick-slide { display: none; float: left; height: 100%; min-height: 1px; } [dir='rtl'] .slick-slide { float: right; } .slick-slide img { display: block; } .slick-slide.slick-loading img { display: none; } .slick-slide.dragging img { pointer-events: none; } .slick-initialized .slick-slide { display: block; } .slick-loading .slick-slide { visibility: hidden; } .slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; } .slick-arrow.slick-hidden { display: none; } ");
GM_addStyle(".slick-loading .slick-list {    background: #fff url('./ajax-loader.gif') center center no-repeat;}/* Icons */@font-face {    font-family: 'slick';    font-weight: normal;    font-style: normal;    src: url('./fonts/slick.eot');    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');}/* Arrows */.slick-prev,.slick-next {    font-size: 0;    line-height: 0;    position: absolute;    top: 50%;    display: block;    width: 20px;    height: 20px;    padding: 0;    -webkit-transform: translate(0, -50%);    -ms-transform: translate(0, -50%);    transform: translate(0, -50%);    cursor: pointer;    color: transparent;    border: none;    outline: none;    background: transparent;}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus {    color: transparent;    outline: none;    background: transparent;}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before {    opacity: 1;}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before {    opacity: .25;}.slick-prev:before,.slick-next:before {    font-family: 'slick';    font-size: 20px;    line-height: 1;    opacity: .75;    color: white;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;}.slick-prev {    left: -25px;}[dir='rtl'] .slick-prev {    right: -25px;    left: auto;}.slick-prev:before {    content: '←';}[dir='rtl'] .slick-prev:before {    content: '→';}.slick-next {    right: -25px;}[dir='rtl'] .slick-next {    right: auto;    left: -25px;}.slick-next:before {    content: '→';}[dir='rtl'] .slick-next:before {    content: '←';}/* Dots */.slick-dotted.slick-slider {    margin-bottom: 30px;}.slick-dots {    position: absolute;    bottom: -25px;    display: block;    width: 100%;    padding: 0;    margin: 0;    list-style: none;    text-align: center;}.slick-dots li {    position: relative;    display: inline-block;    width: 20px;    height: 20px;    margin: 0 5px;    padding: 0;    cursor: pointer;}.slick-dots li button {    font-size: 0;    line-height: 0;    display: block;    width: 20px;    height: 20px;    padding: 5px;    cursor: pointer;    color: transparent;    border: 0;    outline: none;    background: transparent;}.slick-dots li button:hover,.slick-dots li button:focus {    outline: none;}.slick-dots li button:hover:before,.slick-dots li button:focus:before {    opacity: 1;}.slick-dots li button:before {    font-family: 'slick';    font-size: 6px;    line-height: 20px;    position: absolute;    top: 0;    left: 0;    width: 20px;    height: 20px;    content: '•';    text-align: center;    opacity: .25;    color: black;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;}.slick-dots li.slick-active button:before {    opacity: .75;    color: black;}");
$(document).ready(function () {
    var artistContainer = $("#artistContainer");
    if (artistContainer) {
        var location = $("#artist_location span").first().text();
        artistContainer.after($("<div id='expedia'><h2><span style='color: #009cde; margin-bottom: 5px;'>You may also interested in flights to " + location + " </span></h2><div id='expediaFlights'><div class='flightsSlick'></div></div></div>"));

        var departureDate = convertDate(localStorage.getItem('departDate'));
        var returnDate = convertDate(localStorage.getItem('returnDate'));
        
        var departureAirport = 'SEA';
        var arrivalAirport = 'MIA';
        var $flightContent = $(".flightsSlick");
        findFlights(departureDate, returnDate, departureAirport, arrivalAirport, function (flights) {
            $.each(flights, function (index, offer) {
                $flightContent.append('<div><a target="_blank" href="' + offer.detailsUrl + '"><img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&amp;siteid=1"/></a><div class="details"><span>' + offer.origin + ' - ' + offer.destination + '</span><span style="margin-left: 35px">' + offer.price + '</span></div></div>'); });
            $flightContent.slick({
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                centerMode: true,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 1500
            });
        });
    }
});


function findFlights(departureDate, returnDate, departureAirport, arrivalAirport, draw) {
    var restApiUrl = 'http://terminal2.expedia.com:80/x/mflights/search?departureDate=' + departureDate + '&returnDate=' + returnDate + '&departureAirport=' + departureAirport + '&arrivalAirport=' + arrivalAirport + '&apikey=rxrUZKoPlSKZXN4PPZQfDgOK2dMRyG7Z';
    $.getJSON(restApiUrl, function (data) {
        draw(prepareData(data));
    });
}

function prepareData(data) {
    var flights = [];
    $.each(data.offers, function (index, offer) {
        if (index < 10) {
            var destination;
            var origin;
            $.each(data.legs, function (index, leg) {
                if (jQuery.inArray(leg.legId, offer.legIds)) {
                    destination = leg.segments[0].arrivalAirportCode;
                    origin = leg.segments[0].departureAirportCode;
                    flights.push(flight(origin, destination, offer.totalFarePrice.formattedPrice, offer.detailsUrl));
                    return false;
                }
            });
        }
    });
    return flights;
}

function flight(origin, destination, price, url) {
    var result = {};
    result.origin = origin;
    result.destination = destination;
    result.price = price;
    result.detailsUrl = url;
    return result;
}


//incomming format '07/30/2016'
//expected date format '2016-07-30'
function convertDate(inputDate) {
    var inputDateLocal = inputDate.replace('/', '-').replace('/', '-').replace('/', '-');
    var inputDateArr = inputDateLocal.split('-');
    
    return inputDateArr[2] + '-' + inputDateArr[0] + '-' + inputDateArr[1];
}



