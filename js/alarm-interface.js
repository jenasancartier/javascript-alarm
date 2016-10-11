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
