var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('h:mm:ss'));
};

$(document).ready(function(){
    $('#time').text(moment());
    datetime = $('#time')
    update();
    setInterval(update, 1000);

});
