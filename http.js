Promise = require("promise");
require("whatwg-fetch");

var fs = require('fs');

console.log(fs);

var page = tabris.create("Page", {
  title: "XMLHttpRequest via fetch()",
  topLevel: true
});

var createTextView = function(text) {
  tabris.create("TextView", {
    text: text,
    markupEnabled: true,
    layoutData: {left: 12, right: 12, top: [page.children().last() || "0%", 12]}
  }).appendTo(page);
};

fetch("http://www.telize.com/geoip").then(function(response) {
  return response.json();
}).then(function(json) {
  createTextView("The IP address is: " + json.ip);
  createTextView("Latitude: " + json.latitude);
  createTextView("Longitude: " + json.longitude);
});

page.open();

