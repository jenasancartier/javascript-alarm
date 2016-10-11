(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var datetime = null,
        date = null;

// var update = function () {
//     date = moment(new Date());
//     datetime.html(date.format('HH:mm'));
// };

$(document).ready(function(){
var currentTime;

  // update();
  setInterval(function(){
    currentTime = new moment().format('hh:mm');
    $('#time').text(currentTime);

  }, 1000);

  $("#alarmSet").submit(function (event) {


    var input;
    var alarmTime;
    event.preventDefault();
    input = $('#input').val();
    alarmTime = new moment(input, "HH:mm").format("HH:mm");


    setInterval(function() {
      var time = new moment().format("HH:mm");
      console.log("test");

      if (alarmTime === time) {
        alert("WAKEUP");
        $("#snooze").show();
        return;
      }
    }, 2000);

  });
});

},{}]},{},[1]);
